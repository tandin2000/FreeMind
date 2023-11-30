
import {  Flex, Col, Row, } from 'antd';

const boxStyle: React.CSSProperties = {
    width: '100%',
    height: '80vh',
    borderRadius: 6,
    border: '1px solid #40a9ff',
  };

const boxStyle2: React.CSSProperties = {
width: '100%',
height: '20vh',
borderRadius: 6,
border: '1px solid #40a9ff',
};

export const ChatBoxMain = (props: any) => {
    return(
        <>
            <Flex style={boxStyle} justify={'center'} align={'center'}>
            <Row>
                <Col span={12} >
                    hi
                </Col>
            </Row>
            </Flex>

            <Flex style={boxStyle} justify={'center'} align={'center'}>
            <Row>
                <Col span={12} >
                    hi
                </Col>
            </Row>
            </Flex>

        </>
    )
}

const style = () => {

}