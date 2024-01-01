import ImageGrid from "./image_grid";


const Vocallection = () => {

    return (
        <ImageGrid folderPath={"./collection"} useScaling={true} tileSize={140}/>
    )
};

export default Vocallection;