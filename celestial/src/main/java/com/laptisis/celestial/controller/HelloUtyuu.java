package com.laptisis.celestial.controller;

import java.io.Serializable;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloUtyuu {

    
    public class HelloResponse implements Serializable {
        private static final long serialVersionUID = 1L;
        private String lyricText;
        private String language;

        public HelloResponse(String lyricText, String language) {
            this.lyricText = lyricText;
            this.language = language;
        }

        public String getLyricText() {
            return this.lyricText;
        }

        public String getLanguage() {
            return this.language;
        }
    }

    @GetMapping("/index")
    @CrossOrigin(origins = "http://localhost:3000") // 允许从 http://localhost:3000 这个域进行跨域请求
    public HelloResponse index() {

        return new HelloResponse("""
            あなたの宇宙を分解だ 蛍火が消える前に\n你的宇宙在逐渐分解 在萤火消失之前\n\n僕はそっと僕はそっと 望遠鏡を向けた\n我悄悄地 静静地 用望远镜看着\n\nあなたの宇宙の終点は 誰の声も届かないよ\n你的宇宙终点处 谁的声音都传达不到\n\n僕はずっと僕はずっと 目を開け続けた\n我一直在 一直在 睁开着眼睛\n\n
        """, "Japanese");
    }

}
