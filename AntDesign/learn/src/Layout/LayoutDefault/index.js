import { Layout } from "antd"
import Card from "../../Components/CardItem"
import './LayoutDefault.css'

const { Content, Sider } = Layout

function LayoutDefault() {
    return (
        <>
            <Layout className="layout-default">
                <header className="header">
                    header
                </header>
                <Layout>
                    <Sider className="sider">
                        Sider
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