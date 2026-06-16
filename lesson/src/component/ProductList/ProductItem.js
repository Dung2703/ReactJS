function ProductItem(props) {
    const { item } = props;
    console.log(item);

    return (
        <>
            <div className="product-item"  >
                <img className="product-img" style={{ width: "100px" }} src={item.img} alt={item.title} />
                <div className="product-title">{item.title}</div>
                <div className="product-price">price: {item.price}$</div>
            </div>
        </>
    )
}

export default ProductItem;