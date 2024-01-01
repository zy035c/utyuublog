import ImageGrid from "./image_grid";


const Vocallection = () => {

    return (
        <ImageGrid folderPath={"./collection"} useScaling={true} tileSize={120}/>
    )
};

export default Vocallection;