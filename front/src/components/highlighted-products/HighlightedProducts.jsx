import { Text } from "@/components/texts";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../buttons";
import "./highlighted-products.scss";

const HighlightedProducts = () => {

    const navigate = useNavigate();

    const handleGoTo = () => {
        navigate("/products");

    };

    return (
        <div className="highlighted-products__container">
            <Text variant="h2" className="highlighted-products__title">Especiales de esta semana...</Text>
            <div className="highlighted-products__space">
                <div className="highlighted-products__item">
                    <img className="highlighted-products__image" src={"/images/products/cupcake-darkchocolate.jpg"} alt="cupcake-darkchocolate" />
                    <ButtonPrimary className="product-name-btn" onClick={handleGoTo}>Darkchocolate</ButtonPrimary>
                </div>
                <div className="highlighted-products__item">
                    <img className="higlighted-products__image" src={"/images/products/cupcake-Emperatriz.jpg"} alt="cupcake-Emperatriz" />
                    <ButtonPrimary className="product-name-btn" onClick={handleGoTo}>Emperatriz</ButtonPrimary>
                </div>
                <div className="highlighted-products__item">
                    <img className="higlighted-products__image" src={"/images/products/cupcake-love.jpg"} alt="cupcake-love" />
                    <ButtonPrimary className="product-name-btn" onClick={handleGoTo}>Love</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default HighlightedProducts;