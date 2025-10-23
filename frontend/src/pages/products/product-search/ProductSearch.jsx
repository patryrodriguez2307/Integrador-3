import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import "./product-search.scss";

const ProductSearch = ({ searchBar, onChange, onClear }) => {
    return (
        <div className="product-search">
            <TextField
                value={searchBar}
                onChange={onChange}
                placeholder="Buscar producto..."
                size="small"
                className="searcher" />

            <Button variant="contained" onClick={onClear}>Borrar</Button>
        </div>
    );
};

ProductSearch.propTypes = {
    searchBar: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
};

export default ProductSearch;