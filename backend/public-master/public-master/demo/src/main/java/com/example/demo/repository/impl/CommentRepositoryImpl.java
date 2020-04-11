package com.example.demo.repository.impl;

import com.example.demo.model.Comment;
import com.example.demo.repository.CommentRepository;
import org.springframework.stereotype.Repository;

@Repository
public class CommentRepositoryImpl implements CommentRepository {
    private final JpaCommentRepository repository;

    public CommentRepositoryImpl(JpaCommentRepository repository) {
        this.repository = repository;
    }

    @Override
    public Comment comment(Comment c) {
        return repository.save(c);
    }
}
