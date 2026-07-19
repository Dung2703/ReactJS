import { Input, Col, Row, Button } from "antd"
import { useState } from "react"

function Bookroom() {
    const [data, setData] = useState({});
    const handleChange = (e) => {
        const object = {
            ...data,
            [e.target.name]: e.target.value
        };
        setData(object)
        console.log(object)
    }

    const handleClick = () => {
        console.log("Submit to server", data)
    }
    return (
        <>
            <h2>Book Room</h2>
            <Row gutter={[20, 20]}>
                <Col span={24}>
                    <p>Name</p>
                    <Input name="fullName" placeholder="Tran Van A" onChange={handleChange} />
                </Col>
                <Col span={12}>
                    <p>Phone Number</p>
                    <Input name="phoneNumber" placeholder="0123456789" onChange={handleChange} />
                </Col>
                <Col span={12}>
                    <p>Email</p>
                    <Input name="email" placeholder="abc@email.com" onChange={handleChange} />
                </Col>
                <Col span={24}>
                    <Button type="primary" onClick={handleClick}>Book Room</Button>
                </Col>
            </Row>
        </>
    )
}

export default Bookroom