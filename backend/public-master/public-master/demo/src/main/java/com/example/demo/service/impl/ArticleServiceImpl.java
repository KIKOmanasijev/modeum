package com.example.demo.service.impl;

import com.example.demo.model.Article;
import com.example.demo.model.Author;
import com.example.demo.model.Category;
import com.example.demo.repository.ArticleRepository;
import com.example.demo.repository.AuthorRepository;
import com.example.demo.service.ArticleService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {
    public final ArticleRepository articleRepository;
    public final AuthorRepository authorRepository;

    public ArticleServiceImpl(ArticleRepository articleRepository, AuthorRepository authorRepository) {
        this.articleRepository = articleRepository;
        this.authorRepository = authorRepository;
    }

    @Override
    public Article createArticle(String title, String content, String imageUrl, Long authorId, Category category) {
        Author a = authorRepository.findById(authorId);
        Article article = new Article(title, content, imageUrl, a, category);
        return articleRepository.save(article);
    }

    @Override
    public List<Article> getAllArticles() {
        return articleRepository.getAll();
    }

    @Override
    public List<Article> getAllArticlesByAuthor(Long id) {
        List<Article> all = articleRepository.getAll();
        List<Article> tmp = new ArrayList<Article>();
        for (Article a: all) {
            if (a.getAuthor().getId() == id){
                tmp.add(a);
            }
        }

        return tmp;
    }

    @Override
    public List<Article> getAllByCategory(String category) {
        List<Article> all = articleRepository.getAll();
        List<Article> tmp = new ArrayList<Article>();

        for (Article a: all) {
            if (a.getCategory() != null) {
                if (a.getCategory().name().equals(category)) {
                    tmp.add(a);
                }
            }
        }

        return tmp;
    }

    @Override
    public Article getArticle(long id) {
        return articleRepository.searchById(id);
    }

    @Override
    public List<Article> searchArticle(String term) {
        return articleRepository.searchArticles(term);
    }

    @Override
    public Article updateArticle(Long id, String title, String content, Category category) {
        Article article = articleRepository.searchById(id);
        article.setTitle(title);
        article.setContent(content);
        article.setCategory(category);
        return articleRepository.save(article);
    }

    @Override
    public void deleteArticle(Long id) {
        articleRepository.deleteById(id);
    }

    @Override
    public void increaseViews(Long id) {
        articleRepository.increaseViews(id);
    }

    @Override
    public void deleteAll() {
        articleRepository.deleteAll();
    }
}
