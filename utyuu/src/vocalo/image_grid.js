import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // 用于生成唯一的 key

let croppers = {}

const crop = (album_name) => {
    if (album_name in croppers) {
        return croppers[album_name];
    }
    return "";
};

const setCrop = (album_name, css) => {
    croppers[album_name] = css;
} 

const AlbumCover = ({image, key, useScaling, tileSize}) => {
    const album_name = image.split('.')[0].split('/').pop()
    console.log(album_name);

    if (useScaling) {
        return (
            <div>
                <img
                    className={`object-cover m-0 bg-no-repeat ${crop(album_name)}`}
                    style={{
                        width: `${tileSize}px`,
                        height: `${tileSize}px`,
                    }}
                    alt="~"
                    src={image}
                />
            </div>
        );

        
    } else {
        return (<></>);
    }
}

const ImageGrid = ({ folderPath, useScaling, tileSize }) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    // 读取文件夹中的所有图片
    const importAll = (r) => r.keys().map(r);
    const images = importAll(
      require.context("./collection", false, /\.(png|jpe?g|svg)$/)
    );
    // 设置图片列表
    setImageList(images);
  }, [folderPath]);

  setCrop("chair_for_two", "object-left")
  setCrop("Melt", "object-left h-full")


  console.log(`Loaded ${imageList.length} album covers.`);
  return (
    <div
      className={`flex flex-wrap justify-center items-center h-screen ${
        useScaling ? "bg-gray-200" : ""
      }`}
    >
      {imageList.map((image, index) => (
        <AlbumCover 
            image={image}
            key={index} 
            useScaling={useScaling} 
            tileSize={tileSize}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
 