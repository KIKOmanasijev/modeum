package com.example.demo.service;

import com.example.demo.model.Article;
import com.example.demo.model.Author;
import com.example.demo.model.Category;

import java.util.List;

public interface ArticleService {
    Article createArticle(String title, String content, String imageUrl, Long authorId, Category category);
    List<Article> getAllArticles();
    List<Article> getAllArticlesByAuthor(Long id);
    List<Article> getAllByCategory(String category);
    Article getArticle(long id);
    List<Article> searchArticle(String term);
    Article updateArticle(Long id, String title, String content, Category category);
    void deleteArticle(Long id);
    void increaseViews(Long id);

    void deleteAll();
}
