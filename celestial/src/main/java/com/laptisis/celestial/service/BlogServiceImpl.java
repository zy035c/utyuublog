package com.laptisis.celestial.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.laptisis.celestial.mapper.BlogMapper;
import com.laptisis.celestial.model.Blog;

@Service
public class BlogServiceImpl implements BlogService {

    @Autowired
    private BlogMapper blogMapper;

    @Override
    public List<Blog> getAllBlogs() {
        return blogMapper.getAllBlogs();
    }

    @Override
    public void insertBlog(Blog blog) {
        blogMapper.insertBlog(blog);
    }
}