import "./Cart.scss";
import { useState } from "react";


function Cart() {
    const unitPrice = 100000;
    // let quantity = 2;

    const [quantity, setQuantity] = useState(1);

    const handleChange = (e) => {
        const updateQuantity = parseInt(e.target.value);
        console.log(updateQuantity);
        setQuantity(updateQuantity);
    }
    return (
        <>
            <table className="cart">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Áo thun</td>
                        <td><input type="number" defaultValue={quantity} min={1} onChange={handleChange} /></td>
                        <td>{unitPrice}</td>
                        <td>{unitPrice * quantity}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Cart