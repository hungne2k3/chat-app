import React from "react";
import { Row, Col } from "antd";
import UserInfor from "./userInfor";
import RoomList from "./RoomList";
import styled from "styled-components";

/*
 - Biên dịch như sau:
 => Khi mà component chayj đến đoanj code này, sẽ biên dịch ra 1 thẻ div tương ứng trên Key Dom 
*/

export default function Sidebar() {
  const SlidebarStyle = styled.div`
    background: linear-gradient(#be4d71, #d9308d);
    color: #fff;
    height: 100vh;
  `;
  return (
    <SlidebarStyle>
      <Row>
        <Col span={24}>
          <UserInfor />
        </Col>

        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </SlidebarStyle>
  );
}
