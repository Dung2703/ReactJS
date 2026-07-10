import { Row, Col } from 'antd'
import './Grid.css'

function Grid() {
    return (
        <>
            <Row gutter={[10, 20]}>
                <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={24}>
                    <div className='Box'>Col 1</div>
                </Col>
                <Col xxl={4} xl={4} lg={3} md={6} sm={12} xs={24}>
                    <div className='Box'>Col 2</div>
                </Col>
                <Col xxl={8} xl={8} lg={9} md={6} sm={12} xs={24}>
                    <div className='Box'>Col 3</div>
                </Col>
                <Col xxl={10} xl={10} lg={9} md={6} sm={12} xs={24}>
                    <div className='Box'>Col 4</div>
                </Col>
            </Row>
        </>
    )
}

export default Grid