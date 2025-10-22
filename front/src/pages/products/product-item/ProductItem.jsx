import { AlertDanger } from "@/components/alerts";
import { ButtonPrimary } from "@/components/buttons";
import { Skeleton } from "@/components/skeleton";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { CardActionArea, IconButton, Card as MuiCard } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./product-item.scss";

const ProductItem = (props) => {
    const {
        product,
        isLoading,
        className,
        onDeleteSuccess,
        ...restProps
    } = props;

    const navigate = useNavigate();
    const { shoppingCartContext, productsContext } = useContext(AppContext);
    const { addArticle, subtractArticle, removeArticle, stockAlert, setStockAlert } = shoppingCartContext;

    const { removeProduct } = productsContext;
    const classes = `product-item ${className ?? ""}`;

    const handleEditProduct = () => {
        navigate(`/products/${product.id}`);
    };

    const handleAddArticle = () => {
        addArticle(product.id, 1);
    };

    const handleSubtractArticle = () => {
        subtractArticle(product.id, 1);
    };

    const handleDeleteArticle = () => {
        const isConfirmed =window.confirm("Deseas borrar el producto?");
        if (isConfirmed){
            removeProduct(product.id);
            removeArticle(product.id);
            if (onDeleteSuccess) onDeleteSuccess(product.name);
        }

    };

    const getSourceImage = () => {
        return product.thumbnail === "default.jpg"
            ? `${API_URL_IMAGES}/${product.thumbnail}`
            : `${API_URL_IMAGES}/products/${product.thumbnail}`;
    };

    const renderActions = () => {
        if (!product.stock || product.stock === 0) {
            return (<Text variant="p">SIN STOCK</Text>);
        }

        return (
            <>
                <Skeleton className="product-item__actions--skeleton" isLoading={isLoading}>
                    <ButtonPrimary className="product-item__add" size="sm" onClick={handleAddArticle}>
                        <AddShoppingCartIcon />
                    </ButtonPrimary>
                </Skeleton>
                <Skeleton className="product-item__actions--skeleton" isLoading={isLoading}>
                    <ButtonPrimary className="product-item__remove" size="sm" onClick={handleSubtractArticle}>
                        <RemoveCircleOutlineIcon />
                    </ButtonPrimary>
                </Skeleton>
                <IconButton onClick={handleDeleteArticle} aria-label="delete">
                    <DeleteIcon />
                </IconButton>

            </>
        );
    };

    const getImageUrl = () => {
        if (product.thumbnail === "default.jpg") {
            return `${API_URL_IMAGES}/default.jpg`;
        }

        return `${API_URL_IMAGES}/products/${product.thumbnail}`;
    };

    return (
        <MuiCard className={classes} {...restProps}>
            <Skeleton className="product-item__image--skeleton" isLoading={isLoading}>
                <CardActionArea>
                    <img
                        className="product-item__image"
                        src={getSourceImage()}
                        alt="Imagen del producto"
                        onClick={handleEditProduct}/>
                </CardActionArea>
            </Skeleton>

            <div className="product-item__content">
                <Skeleton className="product-item__name--skeleton" isLoading={isLoading}>
                    <Text className="product-item__name" variant="h3">{product.name}</Text>
                </Skeleton>
                <Skeleton className="product-item__description--skeleton" isLoading={isLoading}>
                    <Text className="product-item__description" variant="p">{product.description}</Text>
                </Skeleton>
                <Skeleton className="product-item__price--skeleton" isLoading={isLoading}>
                    <Text className="product-item__price" variant="span">${product.price.toFixed(2)}</Text>
                </Skeleton>
            </div>

            <div className="product-item__actions">
                {renderActions()}
            </div>
            {stockAlert === true &&
            <AlertDanger
                open={stockAlert}
                onClose={() => setStockAlert(false)}
                message="SIN STOCK!!"/>
            }
        </MuiCard>
    );
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
    }),
    isLoading: PropTypes.bool.isRequired,
    className: PropTypes.string,
    onDeleteSuccess: PropTypes.func,
};

export default ProductItem;