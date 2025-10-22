import { Text } from "@/components/texts";
import { useState } from "react";
import ProductGallery from "./product-gallery/ProductGallery";
import ProductSearch from "./product-search/ProductSearch";
import "./products.scss";

const Products = () => {
    const [ searchBar, setSearchBar ] = useState("");

    const handleChange = (e) => {
        setSearchBar(e.target.value);
    };

    const handleClear = () => {
        setSearchBar("");
    };

    return (
        <div className="products">
            <Text variant="h2" className="title">Nuestras Delicias</Text>
            <ProductSearch
                searchBar={searchBar}
                onChange={handleChange}
                onClear={handleClear} />
            <ProductGallery searchBar={searchBar} />
        </div>
    );
};

export default Products;