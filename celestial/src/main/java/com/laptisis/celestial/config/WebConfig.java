package com.laptisis.celestial.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:3000") // 允许的来源域名
            .allowedMethods("GET", "POST", "PUT", "DELETE") // 允许的 HTTP 方法
            .allowCredentials(true); // 允许携带凭证（例如 Cookie）
    }
}
