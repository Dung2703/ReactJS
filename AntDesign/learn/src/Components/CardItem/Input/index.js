import { Input, Col, Row, Button, Checkbox, Space } from "antd"
import { useState } from "react"

function Bookroom() {
    const [data, setData] = useState({});
    const handleChange = (e) => {
        const object = {
            ...data,
            [e.target.name]: e.target.value
        };
        setData(object)
    }

    const handleClick = () => {
        console.log("Submit to server", data)
    }

    const handleChangeCheckbox = (e) => {
        const object = {
            ...data,
            service: e
        };
        setData(object)
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

                <Col span={12}>
                    <p>Service</p>
                    <Checkbox.Group onChange={handleChangeCheckbox}>
                        <Space.Compact orientation="vertical">
                            <Checkbox value="A">A</Checkbox>
                            <Checkbox value="B">B</Checkbox>
                            <Checkbox value="C">C</Checkbox>
                            <Checkbox value="D">D</Checkbox>
                        </Space.Compact>
                    </Checkbox.Group>
                </Col>

                <Col span={24}>
                    <Button type="primary" onClick={handleClick}>Book Room</Button>
                </Col>
            </Row>
        </>
    )
}

export default Bookroom