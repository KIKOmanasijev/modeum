package com.example.demo.service.impl;

import com.example.demo.model.Article;
import com.example.demo.model.Author;
import com.example.demo.model.Comment;
import com.example.demo.util.JwtUtil;

import com.example.demo.repository.ArticleRepository;
import com.example.demo.repository.AuthorRepository;
import com.example.demo.repository.CommentRepository;
import com.example.demo.service.AuthorService;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService {
    private final AuthorRepository authorRepository;
    private final ArticleRepository articleRepository;
    private final CommentRepository commentRepository;
    private final JwtUtil jwtUtil;

    public AuthorServiceImpl(AuthorRepository authorRepository, ArticleRepository articleRepository, CommentRepository commentRepository, JwtUtil jwtUtil) {
        this.authorRepository = authorRepository;
        this.articleRepository = articleRepository;
        this.commentRepository = commentRepository;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public Author findById(Long id) {
        return authorRepository.findById(id);
    }

    @Override
    public Author findByUsername(String username) {
        return authorRepository.findByUsername(username);
    }

    @Override
    public Author createAuthor(String fullName, String username, String password) throws Exception {
        String hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
        if (authorRepository.findByUsername(username) != null) {
            throw new Exception("Username already exists");
        }
        Author author = new Author(fullName, username, hashedPassword);
        author.setToken(jwtUtil.generateToken(author.getUsername()));
        return authorRepository.createAuthor(author);
    }

    @Override
    public Author addArticleForAuthor(Article a, Long authorId) {
        Author author = authorRepository.findById(authorId);
        author.addArticle(a);
        return authorRepository.save(author);
    }

    @Override
    public List<Author> findAll() {
        return authorRepository.findAll();
    }

    @Override
    public Comment comment(Long postId, Long authorId, String content) {
        Author author = authorRepository.findById(authorId);
        Article article = articleRepository.searchById(postId);
        Comment comment = new Comment(author, article, content);
        return commentRepository.comment(comment);
    }

    @Override
    public void deleteAll() {
        authorRepository.deleteAll();
    }

}
