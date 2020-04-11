package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Category {
    WB("Web design"),
    WD("Web development"),
    UX("User Experience"),
    INT("Interview"),
    TAT("Tips and tutorials"),
    JS("Javascript"),
    INSP("Inspiration"),
    PROG("Programming"),
    CA("Career advice");

    private String description;
}
