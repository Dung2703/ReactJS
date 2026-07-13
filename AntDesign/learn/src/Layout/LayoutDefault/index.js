import { Layout } from "antd"
import Card from "../../Components/CardItem"
import './LayoutDefault.css'
import Noti from '../../Components/CardItem/Noti/index'
import MenuSider from "../../Components/CardItem/MenuSider"

const { Content, Sider } = Layout

function LayoutDefault() {
    return (
        <>
            <Layout className="layout-default">
                <header className="header">
                    <Noti />
                </header>
                <Layout>
                    <Sider className="sider">
                        <MenuSider />
                    </Sider>
                    <Content className="content">
                        <Card />
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default LayoutDefault