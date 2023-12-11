import React from "react";
import { Row, Col, Typography, Button } from "antd";
import firebase, { auth } from "../../components/firebase/config";

function Login() {
  const { Title } = Typography;

  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handleFbLogin = async () => {
    const data = await auth.signInWithPopup(fbProvider);
    console.log({ data });
  };

  return (
    <Row justify="center" style={{ height: 800 }}>
      <Col span={8}>
        <Title style={{ textAlign: "center" }} level={3}>
          Chat App
        </Title>

        <Button style={{ width: "100%", marginBottom: 5 }}>
          Đăng Nhập Bằng Google
        </Button>

        <Button style={{ width: "100%" }} onClick={handleFbLogin}>
          Đăng Nhập Bằng Facebook
        </Button>

        <Title style={{ textAlign: "left" }} level={5}>
          Demo by: Nguyen Manh Hung
        </Title>
      </Col>
    </Row>
  );
}

export default Login;
