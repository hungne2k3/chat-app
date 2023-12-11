import { Avatar, Typography } from "antd";
import React from "react";
import styled from "styled-components";

export default function Message({ text, displayName, createdAt, photoURL }) {
  const WrapperStyle = styled.div`
    margin-bottom: 10px;

    .author {
      margin-left: 5px;
      font-weight: bold;
    }

    .date {
      margin-left: 10px;
      font-size: 12px;
      color: #a7a7a7;
    }

    .content {
      margin-left: 30px;
    }
  `;

  return (
    <WrapperStyle>
      <div>
        <Avatar src={photoURL}>A</Avatar>
        {/* đoạn text này sẽ hiển thị nội dung của người đã gửi message */}
        <Typography.Text className="author">{displayName}</Typography.Text>

        {/* Hiển thị thời gian */}
        <Typography.Text className="date">{createdAt}</Typography.Text>
      </div>

      <div>
        <Typography.Text className="content">{text}</Typography.Text>
      </div>
    </WrapperStyle>
  );
}
