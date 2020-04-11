package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private Author author;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="article_id", nullable=false)
    private Article article;

    private String content;

    public Comment(Author author, Article article, String content){
        this.article = article;
        this.author = author;
        this.content = content;
    }
}
