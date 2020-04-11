package com.example.demo.repository.impl;

import com.example.demo.model.Article;
import com.example.demo.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JpaAuthorRepository extends JpaRepository<Author, Long> {
    @Query("select a from Author a " +
            "WHERE a.username=:username")
    Author findByUsername(@Param("username")String username);
}
