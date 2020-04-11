package com.example.demo.repository;

import com.example.demo.model.Author;

import java.util.List;

public interface AuthorRepository {
    Author findById(Long id);
    Author createAuthor(Author a);
    List<Author> findAll();
    Author save(Author a);

    void deleteAll();

    Author findByUsername(String username);
}
