import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

package com.laptisis.celestial.controller;

@RestController
@RequestMapping("/api")
public class HelloUtyuu {
    
    @GetMapping("/index")
    public String index() {
        return """
            あなたの宇宙を分解だ 蛍火が消える前に\n
            你的宇宙在逐渐分解 在萤火消失之前\n\n
            僕はそっと僕はそっと 望遠鏡を向けた\n
            我悄悄地 静静地 用望远镜看着\n\n
            あなたの宇宙の終点は 誰の声も届かないよ\n
            你的宇宙终点处 谁的声音都传达不到\n\n
            僕はずっと僕はずっと 目を開け続けた\n
            我一直在 一直在 睁开着眼睛\n\n
        """;
    }

}
