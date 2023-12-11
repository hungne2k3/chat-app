import React from "react";
import { Avatar, Button, Typography } from "antd";
import styled from "styled-components";
// dùng auth để đăng xuất
import { auth } from "../firebase/config";

export default function UserInfor() {
  const WrapperStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82, 38, 83);

    .user-name {
      color: #fff;
      margin-left: 5px;
    }
  `;

  return (
    <WrapperStyle>
      <div>
        <Avatar>A</Avatar>
        <Typography.Text className="user-name">ABC</Typography.Text>
      </div>

      <Button
        ghost
        onClick={() => {
          auth.signOut();
        }}
      >
        Đăng Xuất
      </Button>
    </WrapperStyle>
  );
}
