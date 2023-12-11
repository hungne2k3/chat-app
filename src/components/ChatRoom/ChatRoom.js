import React from "react";
import { Row, Col } from "antd";
import ChatWindow from "./ChatWindow";
import Sidebar from "./Sidebar";

export default function ChatRoom() {
  return (
    <div>
      <Row>
        {/* Grip total is: 24 col */}
        <Col span={6}>
          <Sidebar />
        </Col>

        <Col span={18}>
          <ChatWindow />
        </Col>
      </Row>
    </div>
  );
}
