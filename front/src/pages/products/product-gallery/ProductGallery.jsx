import { AlertSuccess } from "@/components/alerts";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import ProductItem from "../product-item/ProductItem";
import ProductNewItem from "../product-new-item/ProductNewItem";
import "./product-gallery.scss";

const ProductGallery = ({ searchBar }) => {
    const { productsContext } = useContext(AppContext);
    const { products, isLoading } = productsContext;

    let filteredProducts= products;

    if (searchBar.length >=3){
        filteredProducts = products.filter((product) => {
            const term = searchBar.toLowerCase();
            return (
                product.name.toLowerCase().includes(term) ||
                product.description.toLowerCase().includes(term)
            );
        });
    }
    const [ openAlert, setOpenAlert ] = useState(false);
    const [ deletedProduct, setDeletedProduct ] = useState("");
    const handleDeleteSuccess = (productName) => {
        setDeletedProduct(productName);
        setOpenAlert(true);
    };
    return (
        <div className="product-gallery">
            <ProductNewItem/>

            {filteredProducts.length === 0 ? (
                <Text variant="p" className="no-result">No se encontró el producto</Text>
            ) : (
                filteredProducts.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        isLoading={isLoading}
                        onDeleteSuccess={handleDeleteSuccess} />
                ))
            )};
            <AlertSuccess
                open={openAlert}
                onClose={() => setOpenAlert(false)}
                message={`El producto "${deletedProduct}" se ha eliminado correctamente `} />
        </div>
    );
};
ProductGallery.propTypes = {
    searchBar: PropTypes.string,

};

export default ProductGallery;