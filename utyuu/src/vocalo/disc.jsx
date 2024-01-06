import ImageGrid from "./illust_wall/image_grid";
import TitleScreen from "./title_screen";

const Vocacollection = () => {
  return (
    <div>
      <div className="absolute inset-0 overflow-hidden z-0">
        <ImageGrid folderPath={"./collection"} tileSize={100} />
      </div>
      <div className="z-10">
        <TitleScreen />
      </div>
    </div>
  );
};

export default Vocacollection;
