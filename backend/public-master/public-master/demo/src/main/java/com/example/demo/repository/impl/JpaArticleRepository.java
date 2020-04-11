package com.example.demo.repository.impl;

import com.example.demo.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JpaArticleRepository extends JpaRepository<Article, Long> {
    @Query("select c from Article c " +
            "WHERE c.title like :term or c.content like :term")
    List<Article> findByTerm(@Param("term")String term);
}
