import Banner from "@/components/banner/Banner";
import HighlightedProducts from "@/components/highlighted-products/HighlightedProducts";
import { useState } from "react";
import "./home.scss";

const Home = () => {
    const [ showHighlighted, setShowHighlighted ] = useState(false);

    const handleShowHighlightedProducts = () => {
        setShowHighlighted(true);
    };

    return (
        <div className="home">
            {!showHighlighted && <Banner onShowProducts={handleShowHighlightedProducts}/>}
            {showHighlighted && <HighlightedProducts />}

        </div>
    );
};

export default Home;