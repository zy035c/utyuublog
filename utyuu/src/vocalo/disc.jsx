import ImageGrid from "./illust_wall/image_grid";
import TitleScreen from "./title_screen";
import SecPage from "./second_page/second_page";

const Vocacollection = () => {
  return (
    <div>
      <div className="fixed inset-0 overflow-hidden z-0">
        <ImageGrid folderPath={"./collection"} tileSize={100} />
      </div>
      <div className="z-10">
        <TitleScreen />
      </div>
      <div className="">
        <SecPage />
      </div>
    </div>
  );
};

export default Vocacollection;
