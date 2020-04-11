package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String fullName;
    private String username;
    @JsonIgnore
    private String password;
    private String imageUrl;
    private String token;

    @OneToMany(mappedBy = "author", cascade = CascadeType.REMOVE)
    @JsonIgnore
    List<Article> articleList;

    public Author(String fullName, String username, String password){
        this.fullName = fullName;
        this.username = username;
        this.password = password;
        this.imageUrl = "/account.png";
        articleList = new ArrayList<Article>();
    }

    public Article addArticle(Article a){
        articleList.add(a);
        return a;
    }
}
