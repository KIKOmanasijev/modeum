package com.example.demo.service;

import com.example.demo.model.Article;
import com.example.demo.model.Author;
import com.example.demo.model.Comment;

import java.util.List;

public interface AuthorService {
    Author findById(Long id);
    Author findByUsername(String username);
    Author createAuthor(String fullName, String username, String password) throws Exception;
    Author addArticleForAuthor(Article a, Long authorId);
    List<Author> findAll();

    Comment comment(Long postId, Long authorId, String content);

    void deleteAll();
}
