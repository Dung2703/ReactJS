import { Button } from "antd";
import { useState } from "react"
import { BorderRightOutlined, SyncOutlined, ArrowsAltOutlined } from "@ant-design/icons"

function ButtonInfo() {
    const [spin, setSpin] = useState(false)
    const handleClick2 = () => {
        setSpin(true);
    }

    const [rotate, setRotate] = useState(0)
    const handleClick3 = () => {
        setRotate(45);
    }
    const [loading, setLoading] = useState(false)
    const handleClick = () => {
        setLoading(true);
    }
    return (
        <>
            <Button
                onClick={handleClick}
                type="primary"
                loading={loading}
                disabled={loading}
                size="large">
                Info
            </Button>

            <Button
                icon={<BorderRightOutlined />}
                type="primary" shape="circle">
            </Button>

            <Button
                onClick={handleClick2}
                icon={<SyncOutlined spin={spin} />}
                type="primary" >
                Button
            </Button>

            <Button icon={<ArrowsAltOutlined rotate={rotate} />}
                onClick={handleClick3}>


            </Button>
        </>
    )
}

export default ButtonInfo