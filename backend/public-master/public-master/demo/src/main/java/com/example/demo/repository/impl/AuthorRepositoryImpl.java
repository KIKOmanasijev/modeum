package com.example.demo.repository.impl;

import com.example.demo.model.Author;
import com.example.demo.repository.AuthorRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AuthorRepositoryImpl implements AuthorRepository {
    private final JpaAuthorRepository repository;

    public AuthorRepositoryImpl(JpaAuthorRepository repository) {
        this.repository = repository;
    }

    @Override
    public Author findById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public Author createAuthor(Author a) {
        return this.repository.save(a);
    }

    @Override
    public List<Author> findAll() {
        return repository.findAll();
    }

    @Override
    public Author save(Author a) {
        return repository.save(a);
    }

    @Override
    public void deleteAll() {
        repository.deleteAll();
    }

    @Override
    public Author findByUsername(String username) {
        return repository.findByUsername(username);
    }
}
