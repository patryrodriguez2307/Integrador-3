import AlertSuccessForm from "@/components/alerts/AlertSuccessForm";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useContext, useState } from "react";
import useShoppingCartForm from "./shopping-cart-form/useShoppingCartForm";
import "./shopping-cart.scss";

const ShoppingCart = () => {
    const { shoppingCartContext, productsContext } = useContext(AppContext);
    const { shoppingCart, addArticle, subtractArticle, removeArticle, clearCart } = shoppingCartContext;
    const { updateProduct, fetchProducts } = productsContext;

    const { formik, isSubmitDisabled } = useShoppingCartForm();

    const [ openAlert, setOpenAlert ] = useState(false);

    const handleCancel = () => {
        clearCart();
        formik.resetForm();
    };

    const handleBuy = async () => {
        for (const article of shoppingCart.articles) {
            await updateProduct(article.id, { stock: article.stock - article.quantity });
        }
        await fetchProducts();
        setOpenAlert(true);
        handleCancel();
    };

    return (
        <div className="shopping-cart">
            <Text variant="h2">Carrito</Text>

            <Table>
                <TableHead>
                    <TableRow className="table__head">
                        <TableCell>ID</TableCell>
                        <TableCell>Producto</TableCell>
                        <TableCell align="right">Cant.</TableCell>
                        <TableCell align="right">Precio</TableCell>
                        <TableCell align="right">Importe</TableCell>
                        <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shoppingCart.articles?.map((article)=>(
                        <TableRow key={article.id} className="table__body">
                            <TableCell>{article.name}</TableCell>
                            <TableCell align="right">{article.quantity}</TableCell>
                            <TableCell align="right">${article.price?.toFixed(2)}</TableCell>
                            <TableCell align="right">${article.amount?.toFixed(2)}</TableCell>
                            <TableCell align="center">
                                <Button size="small" onClick={() => addArticle(article.id, 1)}>➕</Button>
                                <Button size="small" onClick={() => subtractArticle(article.id, 1)}>➖</Button>
                                <Button size="small" color="error" onClick={() => removeArticle(article.id)}>Eliminar</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="table__footer">
                <Text variant="p">Total unidades: {shoppingCart.totalQuantity}</Text>
                <Text className="table__total" variant="p">Total: ${shoppingCart.totalAmount?.toFixed(2)}</Text>
            </div>

            <div className="shopping-cart__actions">
                <Button variant="outlined" color="error" onClick={handleCancel} className="btn__cancel">Cancelar</Button>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitDisabled()}
                    onClick={handleBuy}
                    className="btn__buy" >
                        Comprar
                </Button>
            </div>

            <AlertSuccessForm
                open={openAlert}
                onClose={() => setOpenAlert(false)}
                message="¡Compra realizada con éxito!"/>

        </div>
    );
};

export default ShoppingCart;