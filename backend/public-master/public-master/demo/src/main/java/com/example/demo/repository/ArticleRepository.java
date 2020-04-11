package com.example.demo.repository;

import com.example.demo.model.Article;

import java.util.List;
import java.util.Optional;

public interface ArticleRepository {
    Article save(Article article);
    List<Article> getAll();
    List<Article> searchArticles(String term);
    Article searchById(long id);
    void deleteById(long id);

    void deleteAll();

    Article increaseViews(Long id);
}
