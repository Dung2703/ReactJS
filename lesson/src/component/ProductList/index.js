import { products } from "../../data/product.js";
import ProductItem from "./ProductItem.js";

function ProductList() {

    console.log(products);

    return (
        <>
            <div className="product-list">
                {products.map((item) => (
                    <ProductItem item={item} key={item.id} />
                ))}
            </div>
        </>
    )
}

export default ProductList;