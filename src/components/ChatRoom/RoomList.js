import React from "react";
import { Button, Collapse, Typography } from "antd";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

export default function RoomList() {
  // override thi k dung .div nhu cac file khac: &&& là mức độ ưu tiên cao
  const PanelStyle = styled(Panel)`
    &&& {
      .ant-collapse-header,
      p {
        color: #fff;
      }

      .ant-collapse-content-box {
        padding: 0 40px;
      }

      .add-room {
        color: #fff;
      }
    }
  `;
  const LinkStyle = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: #000;
  `;

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyle header="Danh Sach Cac Phong" key={"1"}>
        <LinkStyle>Room 1</LinkStyle>
        <LinkStyle>Room 2</LinkStyle>
        <LinkStyle>Room 3</LinkStyle>
        <Button className="add-room" type="text" icon={<PlusSquareOutlined />}>
          Thêm Phòng
        </Button>
      </PanelStyle>
    </Collapse>
  );
}
