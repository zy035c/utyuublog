package com.laptisis.celestial.service;

import java.util.List;

import com.laptisis.celestial.model.Blog;

public interface BlogService {
    List<Blog> getAllBlogs();

    void insertBlog(Blog blog);
}
