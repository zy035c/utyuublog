package com.laptisis.celestial.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.laptisis.celestial.model.Blog;

@Mapper
public interface BlogMapper {
    List<Blog> getAllBlogs();

    void insertBlog(Blog blog);
}
