package com.example.demo.repository.impl;

import com.example.demo.model.Article;
import com.example.demo.repository.ArticleRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ArticleRepositoryImpl implements ArticleRepository {
    private final JpaArticleRepository repository;

    public ArticleRepositoryImpl(JpaArticleRepository repository){
        this.repository = repository;
    }

    @Override
    public Article save(Article article) {
        return repository.save(article);
    }

    @Override
    public List<Article> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Article> searchArticles(String term) {
        return repository.findByTerm(term);
    }

    @Override
    public Article searchById(long id) {
        return repository.findById(id).get();
    }

    @Override
    public void deleteById(long id) {
        repository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        repository.deleteAll();
    }

    @Override
    public Article increaseViews(Long id) {
        Article article = repository.getOne(id);
        int Views = article.getViews() + 1;
        article.setViews(Views);
        return repository.save(article);
    }
}
