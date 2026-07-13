import { Dropdown, Button } from "antd"
import { BellOutlined } from "@ant-design/icons"

function Noti() {
    const item = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
            ),
        },
    ]
    return (
        <>
            <Dropdown
                menu={{ items: item }} trigger={'click'}
                dropdownRender={(menu) => (
                    <>
                        <div className="dropdown">Test</div>
                    </>
                )}
            >
                <Button type="text" icon={<BellOutlined />}></Button>
            </Dropdown>
        </>
    )
}

export default Noti