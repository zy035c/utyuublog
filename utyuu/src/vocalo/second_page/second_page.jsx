import React, { useState, useEffect } from "react";

import { getSelfIntro } from "apis/api";

import "./second_page.css";

const SecPage = () => {
  return (
    <div id="indexPage2" className="relative flex flex-row h-screen w-screen">
      <SelfIntroduction />
      <SelfInfoColumn />
    </div>
  );
};

const SelfIntroduction = () => {
  const [selfIntro, setSelfIntro] = useState([]);

  useEffect(() => {
    (async () => {
      let text = await getSelfIntro();
      //   data = data.split/\n/g, '<br>');
      const paras = text.split("\n");
      setSelfIntro(paras);
    })();
  }, []);

  return (
    <div className="flex relative w-fit h-fit pr-48">
      <BookmarkDeco />
      <div className="relative intro-text-bg select-text h-fit flex flex-col mb-12 px-7 py-3 justify-center items-center">
        <div className="intro-text-div w-full h-fit">
          {selfIntro.map((line, _) => {
            return (
              <div className={`flex mx-1 my-1`} style={{ minWidth: "42px" }}>
                <p className="flex select-text text-animation self-intro-text flex-grow">
                  {line}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SelfInfoColumn = () => {
  return (
    <div
      className="flex flex-col items-center absolute 
     self-info-column top-0 right-0 justify-start bg-repeat"
      style={{
        backgroundImage: "url('/title_music/self-intro-column-texture.png')",
      }}
    >
      <img
        className="my-avatar left-1/2"
        src="/title_music/myavatar.png"
        alt="my avatar"
      ></img>
      <MyName />
    </div>
  );
};

const BookmarkDeco = () => {
  return (
    <div className="absolute right-2 top-48 flex w-fit h-fit flex-row">
      <div className="relative z-30 h-8 w-24 bg-orange-500 bookmark-deco"></div>
      <div className="relative flex mx-4 z-30 h-8 w-fit bg-orange-500 items-center bookmark-timestamp">
        <p className="relative text-center px-4">
          2024-03-26
        </p>
      </div>
    </div>
  );
};

const MyName = () => {
  return (
    <div className="flex flex-col w-full py-2 my-names justify-center items-center">
      <p>utyuu</p>
      <p style={{ fontSize: "0.7em" }}>re:boot ...</p>

      <div className="flex flex-1 w-full text-start">
        <p className="text-start p-4 px-10 intro-column-text">
          曹植在洛水边上写赋的时候看到的仙女可能是历史上最早的二次元奇装异服。再想象一下亚瑟王的湖中仙女又何妨？直到今天東浩紀的数据库理论还在carry。
          <br />
          <br />
          很容易可以想象，相比古代那种抽象的春宫图，二次元程度的hypersexuality简直就是降维打击。你就拿这个考研魏国干部？
          <br />
          <br />
          但是高端的食材，往往只需要最简单的烹饪方式。天不生雪之下雪乃，黑长直万古如长夜。可远观不可亵玩。她的任何工口本我都觉得完全不成立。请跟我一起读一下下面的角色名：Yukinoshita
          Yuki、Yuigahama Yui、Hayama
          Yayato。虽然是恶趣味，但是雪之下真的是很好的名字，一看就是高岭之花那种。
          <br />
          <br />
          有人说大老师很中二，我说那是你识人不明，遇人不淑。你看他们，搞一个校园祭，各种策划文书协调沟通处理得蛮好的。入职阿里直接一年升p6了，向上管理画大饼，事后爆雷甩锅玩得飞起。总算是知道日本为什么没有互联网行业只有SIer了。两个人婚后直接移民美国，多少上个Senior
          Staff.
          <br />
          <br />
          - 看到Rust是编程界原神。
          <br />
          - 认为Rust是编程界uzi史上最大冲击波。
          <br />
          - 结果最后定睛一看，还是编程界原神。
          <br />
          <br />
          您能教教我&lt;Box&gt;怎么用吗？没有参加过acm等竞赛的我，生而为这个专业真是抱歉。饿死事小，失节事大嘛。不会珂多莉树、状压dp、register
          inline卡常，没有跟二次元少年班一起卷竞赛，不会注意力涣散地证明不等式，就算饿死，从外边跳下去，也不应该写你们家一行代码嘛。
          <br />
          我已经受够繁文缛节了。这种专业，我不要也罢！
          <br />
          <br />
          喜欢我们常量左值引用右值引用裸指针static_cast再转回smart
          pointer移动语义完美转发吗。集美们这就是我们c++，真是cc又++鸭。
          <br />
          <br />
          我摊牌了。和lead一起写golang。err !=
          nil很多余，但是因为有golang在，所以不多余。golang最好了。我愿称之为c--。是的还在mygo还在mygo没有倒。但是我没看过。
          <br />
          <br />
          反正我写过lisp也没有觉得fp有多么仙气飘飘。
          <br />
          <br />
          你知道吗，纯函数就像二次元一样。如果你是主角，那么你大概率怎么作死都不会死。而且你还会赢下去。是一个有努力就有回报的世界。
          <br />
          <br />
          我们都知道二次元是假的。
          <br />
          <br />
          但这并不影响じん是我的爹。如果你不感同身受，那么是因为你不懂得他们的含金量。就把tele
          +
          plexi系的声音，和混音里怎么摆才能做到那种紧凑的嗡嗡嗡soundscape，这些问题搞清楚，工作量可能不亚于一个博导带着几个什么青椒民工，发几篇sci，才能搞清楚。如果有这方面的期刊，我将带领我们走向胜利。
          <br />
          <br />
          需要痛骂音乐界没有开源精神。打个rogue-like别人会在网上分享build。软件可以开源出readme。但是你让术力口皮把工程文件分享下来，乃至Cubase一键clone，各个插件的preset自由开源，那真的是不要命了。有个小朋友问我为什么。我说我也不知道。你知道的话欢迎和我讨论。
          <br />
          <br />
          我跟我前女友说，星铁又在消费过世主播。她说卡芙卡只是人名而已。好吧，我们春靴也一样消费过世主播。就像有一天我突然发现Celery是芹菜的意思，于是发现原来每天都在黄浦江边写字楼25层的落地窗边上，讨论芹菜的性能优化。这下大厨王刚了。
          <br />
          <br />
          我是坚定的林少华anti。虽然除了弹子球是看的英文版以外，其他的都是看的出自他之手。也没有一般的小说里那么戏剧性。就是某一天开始意识到，没有必要去读了。很有印象的包括博尔赫斯、卡夫卡、莫言的《檀香刑》。阿城很喜欢。刘慈欣、江南、韩寒啥的网红作家我也很喜欢。的确有个作家梦。
          <br />
          <br />
          说到这里插播一个小故事。我曾经在上海某所大学上过一个文学课。然后后来下课的时候我跟老师聊了一下会，大概就是提到对铁西三剑客很感兴趣。结果后来在课上老师似乎（我都记得不清楚，您可权当我自吹自擂）对全班说中文系的学生都没什么人再好好阅读。反而是有些“特殊”（我不是那个学校的学生）的学生阅读得比较深，总之有些惋惜之意。
          <br />
          <br />
          那个时候的我反射弧长度堪比猎户座旋臂，而且处于奇怪的麻木，可能是水雷触发元素反应被削韧了，走路一卡一卡的。我的性格如此，不是谁的锅。总之，我啥都没有想。
          <br />
          <br />
          现在看来我觉得，俗话说，我是很装逼。有点在天上没下来的感觉，跟人打交道也很紧张。老师那是多珍贵的资源啊。
          <br />
          <br />
          今天我觉得，不读那些书好过读。当然这话里有自暴自弃的irony味道。这好比位格不够，又提前窥视了过多的禁忌知识，很容易就会受到外神污染。那这结果就是承受不住高维知识的真相，内爆了。你如果过早看清，很容易陷入虚无主义。诚然，任何老板给你画大饼，你都已经格温不受影响；但是你离抑郁可能真的不远了。
          <br />
          <br />
          所以我是反向速通玩家。正常人是一阶段天天我宿舍，跟同学打apex双锤骷髅海，二阶段幡然醒悟找实习考研考公升职加薪，三阶段王阳明心学曾国藩家书尼采海德格尔胡塞尔，在饭桌上指点人性。
          <br />
          <br />
          我觉得我初中就在三阶段。文学理论没少看，意指能指符号网络，宛如法师吟唱咒语：
          <br />
          <br />
          古娜拉黑暗之神...错了，不是这个。
          <br />
          <br />
          masterpiece, best quality...错了，也不是这个。
          <br />
          <br />
          『慈悲為懷的地母神呀，請將神聖的光輝，賜予在黑暗中迷途的我等...』还是不对啊。
          <br />
          <br />
          『先验知识是那些不依赖于经验而获得的知识。它是普遍的和必然的，因为它来自于人类理性的先天结构。先验知识包括时间、空间、范畴等概念...』
          <br />
          看满离。
          <br />
          <br />
          现在我已经在一阶段了。
          <br />
          号练废了，xdm。
          <br />
          <br />
          个人的一点浅见是，那些东西很大程度上，是你有单间办公室了才适合去钻研的。可以给自己增加谈资，也可以用来疗愈内心。你都principal
          senior vice
          president技术专家buff叠满了，终于有privilege去看不实用的书了。还没有打上这个段位的您，别被忽悠瘸了。
          <br />
          <br />
          有一天你在匝道上用枪指着我。镇压执行系统，支配者启动。用户权限认证，公安执行官，狡嚙慎也。犯罪指数，over
          300。执行模式，lethal，destroy。将对象完全排除。请注意。
          <br />
          <br />- Yes, indeed. It is called Lothric. Wait. No, it is called
          Drangleic. <br />
          从如蜜传火到了辉石镇盖多勒就停下了的unkindled
          <br />
          <br />
          - Dear oh dear, what was it? The hunt? The blood? Or the horrible
          dream? <br />
          A corpse, should be left well alone. <br />
          Signed and sealed, 拿好变形手杖，加入狩猎。
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default SecPage;
