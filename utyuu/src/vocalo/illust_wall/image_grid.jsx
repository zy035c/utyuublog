import React, { useState, useEffect, useRef } from "react";
import "./image_grid.css";
const { v4: uuidv4 } = require("uuid");

const AlbumCover = ({ image, tileSize }) => {
  const album_name = image.split(".")[0].split("/").pop();

  const albumCoverRef = useRef(null);
  const divStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div
      style={{
        width: `${tileSize}px`,
        height: `${tileSize}px`,
      }}
    >
      <div
        ref={albumCoverRef}
        style={divStyle}
        className={`Vcl_cover vocaloid-${album_name}`}
      ></div>
    </div>
  );
};

const moveElementsToEnd = (arr, count) => {
  if (count <= 0) {
    // 非法的移除数量，或者移除数量大于数组长度
    console.error("Invalid count value");
    return arr;
  }
  if (count > arr.length) {
    count = arr.length;
  }
  // 从数组开头移除指定数量的元素
  const removedElements = arr.splice(0, count);
  // 将移除的元素添加到数组末尾
  arr.push(...removedElements);
  console.log("Moved " + removedElements.length + " elems to end.");
  return arr;
};

const ImageGrid = ({ folderPath, useScaling, tileSize }) => {
  const [imageList, setImageList] = useState([]);
  const [wallWidth, setWallWidth] = useState(15); // 初始值，你可以根据需要调整
  const [illustPerRow, setIllustPerRow] = useState(3);
  const [key, setKey] = useState(0);
  const componentRef = useRef(null);

  /* Here you define the time of scrolling over 1 row */
  const scrollerTime = 3000;

  useEffect(() => {
    // 读取文件夹中的所有图片
    const importAll = (r) => r.keys().map(r);
    const images = importAll(
      require.context("./collection", false, /\.(png|jpe?g|svg|webp)$/)
    );
    // 设置图片列表
    console.log(`Loaded ${images.length} album covers.`);
    setImageList(images);
  }, [folderPath]);

  useEffect(() => {
    // 辅助函数：获取 translateY 值
    const getTranslateYValue = (element) => {
      const transformStyle = window
        .getComputedStyle(element)
        .getPropertyValue("transform");
      const matrixString = String(transformStyle);
      const match = matrixString.match(/[-+]?\d*\.?\d+/g);
      if (match && match.length >= 6) {
        return parseFloat(match[5]);
      }
      return -tileSize;
    };

    // Calc position: waterfall anim
    const updateFreq = 20;

    const moveDownInterval = setInterval(() => {
      if (componentRef.current) {
        // 获取当前 translateY 值
        const currentTranslateY = getTranslateYValue(componentRef.current);
        // console.log("Current pos: " + currentTranslateY);
        if (currentTranslateY <= -tileSize) {
          return;
        }
        // 将元素向下位移dist
        const dist = updateFreq * (tileSize / scrollerTime);
        componentRef.current.style.transform = `translateY(${
          currentTranslateY - dist
        }px)`;
      }
    }, updateFreq);
    // 清除定时器，以避免内存泄漏
    return () => clearInterval(moveDownInterval);
  }, [tileSize]);

  useEffect(() => {
    const what = setInterval(() => {
      const newList = moveElementsToEnd(imageList, illustPerRow);
      setImageList(newList);
      setKey(key + 1);
      // componentRef.current.style.transform = `translateY(0px)`;
    }, scrollerTime); // View image_grid.css `.image-grid-infinite-scroll`
    // and you'll see a 7 secs there!!

    return () => clearInterval(what);
  }, [illustPerRow, imageList, key]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth % tileSize === 0) {
        setIllustPerRow(windowWidth / tileSize);
        return;
      }
      const newWidth = (windowWidth / tileSize + 1) * tileSize;
      setIllustPerRow(windowWidth / tileSize + 1);
      setWallWidth(newWidth);
      console.log("Recalc wall width to be " + wallWidth);

      // Fill image list
      const windowHeight = window.innerHeight;
      const rowNum = Math.ceil(windowHeight / tileSize) + 1;
      const colNum = Math.ceil(windowWidth / tileSize);
      const fullIllustNum = rowNum * colNum;
      if (imageList.length < fullIllustNum) {
        setImageList((prev) => {
          return prev.concat(prev.slice(0, fullIllustNum - prev.length));
        });
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tileSize, wallWidth, imageList]);

  return (
    <div className="bg-black">
      <div className="album-cover-wall">
        <div
          style={{
            width: `${wallWidth}px`,
            minHeight: "100vh",
            transform: "translateY(0)",
            overflow: "hidden",
          }}
          key={key}
          ref={componentRef}
        >
          <div className="flex flex-wrap">
            {imageList.map((image, _) => (
              <AlbumCover
                key={uuidv4()}
                image={image}
                useScaling={useScaling}
                tileSize={tileSize}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
