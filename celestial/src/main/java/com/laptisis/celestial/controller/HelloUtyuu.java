package com.laptisis.celestial.controller;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloUtyuu {
    
    public class HelloResponse implements Serializable {

        private class LyricLine {
            private String lyricText;
            private String language;
            private float startTime;
            private float endTime;

            public LyricLine(String lyricText, String language) {
                this.lyricText = lyricText;
                this.language = language;
            }
            
            public LyricLine(String lyricText, String language, float startTime, float endTime) {
                this.lyricText = lyricText;
                this.language = language;
                this.startTime = startTime;
                this.endTime = endTime;
            }

            public String getLyricText() {
                return this.lyricText;
            }

            public String getLanguage() {
                return this.language;
            }
        }

        private static final long serialVersionUID = 1L;
        private List<LyricLine> lyrics;
        private String songTitle;

        public HelloResponse(String songTitle) {
            this.lyrics = new ArrayList<LyricLine>();
            this.songTitle = songTitle;
        }

        public void addLyricLine(String lyricText, String language) {
            this.lyrics.add(new LyricLine(lyricText, language));
        }

        public void addLineBreak() {
            this.lyrics.add(new LyricLine("\n", "LineBreak"));
        }

        public List<LyricLine> getLyrics() {
            return this.lyrics;
        }

        public String getSongTitle() {
            return this.songTitle;
        }
    }

    private HelloResponse QbyMota() {
        var x = new HelloResponse("Q - ぽわぽわP, 鏡音リン");
        x.addLyricLine("さよならを数えた 思い浮かぶ君の手", "Japanese");
        x.addLyricLine("細數次次離別 心頭憶起你的雙手", "Chinese");
        // x.addLineBreak();

        x.addLyricLine("瞼に乗る雫を 鮮明に覚えてた", "Japanese");
        x.addLyricLine("滴落眼瞼上的水滴 至今依然記憶鮮明", "Chinese");


        x.addLyricLine("「今」の忘れ方を この歌のさ 答えを", "Japanese");
        x.addLyricLine("請將忘記「當下」的辦法 請將這首歌的答案", "Chinese");


        x.addLyricLine("明日の歩き方を 僕達に教えてよ", "Japanese");
        x.addLyricLine("請將走向明天的方法 告訴我們吧", "Chinese");

        return x;
        // さよならを数えた
        // 細數次次離別
        // 思い浮かぶ君の手
        // 心頭憶起你的雙手
        // 瞼に乗る雫を
        // 滴落眼瞼上的水滴
        // 鮮明に覚えてた
        // 至今依然記憶鮮明
        // 「今」の忘れ方を
        // 請將忘記「當下」的辦法
        // この歌のさ　答えを
        // 請將這首歌的　答案
        // 明日の歩き方を
        // 請將走向明天的方法
        // 僕達に教えてよ
        // 告訴我們吧
    }

    @GetMapping("/index")
    @CrossOrigin(origins = "http://localhost:3000") // 允许从 http://localhost:3000 这个域进行跨域请求
    public HelloResponse index() {
        // var x = new HelloResponse("宇宙分解 - はるまきごはん feat.初音ミク");
        // x.addLyricLine("あなたの宇宙を分解だ 蛍火が消える前に", "Japanese");
        // // x.addLineBreak();
        // x.addLyricLine("你的宇宙在逐渐分解 在萤火消失之前", "Chinese");
        // x.addLineBreak();
        // // x.addLineBreak();
        // x.addLyricLine("僕はそっと僕はそっと 望遠鏡を向けた", "Japanese");
        // // x.addLineBreak();
        // x.addLyricLine("我悄悄地 静静地 用望远镜看着", "Chinese");
        // x.addLineBreak();
        // // x.addLineBreak();
        // x.addLyricLine("あなたの宇宙の終点は 誰の声も届かないよ", "Japanese");
        // // x.addLineBreak();
        // x.addLyricLine("你的宇宙终点处 谁的声音都传达不到", "Chinese");
        // x.addLineBreak();
        // // x.addLineBreak();
        // x.addLyricLine("僕はずっと僕はずっと 目を開け続けた", "Japanese");
        // // x.addLineBreak();
        // x.addLyricLine("我一直在 一直在 睁开着眼睛", "Chinese");

        // System.out.println(
        // """
        //     あなたの宇宙を分解だ 蛍火が消える前に\n你的宇宙在逐渐分解 在萤火消失之前\n\n僕はそっと僕はそっと 望遠鏡を向けた\n我悄悄地 静静地 用望远镜看着\n\nあなたの宇宙の終点は 誰の声も届かないよ\n你的宇宙终点处 谁的声音都传达不到\n\n僕はずっと僕はずっと 目を開け続けた\n我一直在 一直在 睁开着眼睛\n\n
        // """);
        return QbyMota();
    }

}
