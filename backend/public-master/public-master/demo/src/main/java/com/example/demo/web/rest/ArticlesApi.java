package com.example.demo.web.rest;

import com.example.demo.model.*;
import com.example.demo.service.ArticleService;
import com.example.demo.service.AuthorService;
import com.example.demo.util.JwtUtil;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.parameters.P;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "http://localhost:5000")
public class ArticlesApi {
    private final ArticleService articleService;
    private final AuthorService authorService;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    public ArticlesApi(ArticleService articleService, AuthorService authorService, JwtUtil jwtUtil, AuthenticationManager authenticationManager) {
        this.articleService = articleService;
        this.authorService = authorService;
        this.jwtUtil = jwtUtil;
        this.authenticationManager = authenticationManager;
    }

    @GetMapping("/articles")
    public List<Article> getAll(){
        return articleService.getAllArticles();
    }

    @GetMapping("/category/{category}")
    public List<Article> getAllByCategory(@PathVariable String category) {
        return articleService.getAllByCategory(category);
    }

    @GetMapping("/articlesByAuthor/{authorId}")
    public List<Article> getArticlesByAuthor(@PathVariable Long authorId){
            return articleService.getAllArticlesByAuthor(authorId);
    }

    @GetMapping("/authors")
    public List<Author> getAllAuthors(){
        return authorService.findAll();
    }


    @DeleteMapping("/articles/{articleId}")
    public void deleteArticle(@PathVariable Long articleId){
        articleService.deleteArticle(articleId);
    }

    @PostMapping("/articles")
    @ResponseStatus(HttpStatus.CREATED)
    public Article createArticle(@RequestBody Article article){
        Article nov = articleService.createArticle(
                article.getTitle(),
                article.getContent(),
                article.getImageUrl(),
                article.getId(),
                article.getCategory());
        authorService.addArticleForAuthor(nov, article.getId());
        return article;
    }

    @PostMapping("/save/{articleId}")
    public Article saveEdit(@RequestBody Article article, @PathVariable Long articleId) throws Exception {
       Article star = articleService.getArticle(articleId);
       return articleService.updateArticle(articleId, article.getTitle(), article.getContent(), article.getCategory());
    }

    @PostMapping("/authors")
    @ResponseStatus(HttpStatus.CREATED)
    public Author createAuthor(@RequestBody Author author) throws Exception {
       return authorService.createAuthor(author.getFullName(), author.getUsername(), author.getPassword());
    }

    @PostMapping("/comment")
    @ResponseStatus(HttpStatus.CREATED)
    public Article commentOnPost(@RequestParam("postId") Long postId,
                                 @RequestParam("authorId") Long authorId,
                                 @RequestParam("content") String content){
        authorService.comment(postId, authorId, content);
        return articleService.getArticle(postId);
    }

    @GetMapping(params = "term")
    public List<Article> searchTerms(@RequestParam String term){
        return articleService.searchArticle(term);
    }

    @GetMapping("/articles/{articleId}")
    public Article getArticle(@PathVariable int articleId) {
        return this.articleService.getArticle(articleId);
    }
 
    @DeleteMapping("/{id}")
    public void deleteSlot(@PathVariable long id) {
        articleService.deleteArticle(id);
    }

    @DeleteMapping("/all")
    public void deleteAll(){
        articleService.deleteAll();
        authorService.deleteAll();
    }

    @PostMapping("/auth")
    public Author generateToken(@RequestBody AuthRequest authRequest) throws Exception {
        try{
            String temp = authorService.findByUsername(authRequest.getUsername()).getPassword();
            Boolean matching = BCrypt.checkpw(authRequest.getPassword(), temp);
            if (matching){
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(authRequest.getUsername(), temp)
                );
            }
            else {
                throw new Exception("Passwords not matching");
            }

        }
        catch (Exception e){
                throw new Exception("Failed auth");
        }
        Author author = authorService.findByUsername(authRequest.getUsername());
        author.setToken(jwtUtil.generateToken(authRequest.getUsername()));
        return author;
    }

    @PostMapping("/incViews/{id}")
    public void increaseViews(@PathVariable long id) throws Exception {
        articleService.increaseViews(id);
    }

}
