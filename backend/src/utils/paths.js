import path from "path";


const ROOT_PATH = path.resolve();


const paths = {
    root: ROOT_PATH,
    src: path.join(ROOT_PATH, "src"),
    public: path.join(ROOT_PATH, "public"),
    data: path.join(ROOT_PATH, "src", "data"),
    images: path.join(ROOT_PATH, "public", "images"),
    imagesProducts: path.join(ROOT_PATH, "public", "images", "products"),
};

export default paths;