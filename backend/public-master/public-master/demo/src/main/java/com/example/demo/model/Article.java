package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;
    @Column(columnDefinition = "TEXT")
    private String content;
    private Category category;

    @Column(columnDefinition = "integer default 0")
    private int views;

    @ManyToOne  
    @JoinColumn(name="author_id", nullable=false)
    private Author author;
    
    private String imageUrl;

    @OneToMany(mappedBy = "article", cascade = CascadeType.ALL)
    private List<Comment> commentList;

    public Article(String title, String content, String imageUrl, Author author, Category category){
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
        this.author = author;
        this.category = category;
        this.views = 0;
    }
}
