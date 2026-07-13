import { Menu } from 'antd'
import { PlusCircleTwoTone, PauseOutlined, QuestionOutlined } from "@ant-design/icons"
import { Children } from 'antd'

function MenuSider() {
    const items = [
        {
            label: 'Menu 1',
            icon: <PlusCircleTwoTone />,
            key: "menu-1",
            children: [
                {
                    label: 'Menu 1-1',
                    key: "menu-1-1"
                },
                {
                    label: 'Menu 1-2',
                    key: "menu-1-2"
                },
                {
                    label: 'Menu 1-3',
                    key: "menu-1-3"
                },
            ]
        },
        {
            label: 'Menu 2',
            icon: <PauseOutlined />,
            key: "menu-2",
            children: [
                {
                    label: 'Menu 2-1',
                    key: "menu-2-1"
                },
                {
                    label: 'Menu 2-2',
                    key: "menu-2-2"
                },
                {
                    label: 'Menu 2-3',
                    key: "menu-2-3"
                },
            ]
        },
        {
            label: 'Menu 3',
            icon: <QuestionOutlined />,
            key: "menu-3",
            children: [
                {
                    label: 'Menu 3-1',
                    key: "menu-3-1"
                },
                {
                    label: 'Menu 3-2',
                    key: "menu-3-2"
                },
                {
                    label: 'Menu 3-3',
                    key: "menu-3-3"
                },
            ]
        },
    ]
    return (
        <>
            <Menu
                mode="inline"
                defaultOpenKeys={["menu-1"]}
                defaultSelectedKeys={["menu-2-1"]}
                items={items}
            />
        </>
    )
}

export default MenuSider