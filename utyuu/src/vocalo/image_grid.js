import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // 用于生成唯一的 key
import "./image_grid.css";

const AlbumCover = ({ image, useScaling, tileSize }) => {
  const album_name = image.split(".")[0].split("/").pop();
  const divStyle = {
    backgroundImage: `url(${image})`,
    // width: `${tileSize}px`,
    // height: `${tileSize}px`,
  };
  if (useScaling) {
    return (
      // <div style={divStyle} className={`bg-cover bg-no-repeat ${crop(album_name)}`}>
        <div style={divStyle} className={`Vcl_cover vocaloid-${album_name}`}>
        </div>
    );
  } else {
    return <></>;
  }
};

const ImageGrid = ({ folderPath, useScaling, tileSize }) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    // 读取文件夹中的所有图片
    const importAll = (r) => r.keys().map(r);
    const images = importAll(
      require.context("./collection", false, /\.(png|jpe?g|svg|webp)$/)
    );
    // 设置图片列表
    setImageList(images);
  }, [folderPath]);

  console.log(`Loaded ${imageList.length} album covers.`);
  if (useScaling) {
    return (
      <div
        // className={
        //   `flex flex-wrap justify-center items-center h-screen bg-gray-200"`
        // }
        className="container w-full h-full bg-gray-200"
      >
        <div className="flex flex-wrap">
          {imageList.map((image, index) => (
            <AlbumCover
              image={image}
              key={index}
              useScaling={useScaling}
              tileSize={tileSize}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ImageGrid;

