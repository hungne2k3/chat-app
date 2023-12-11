import React from "react";
import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, Tooltip } from "antd";
import styled from "styled-components";
import Message from "./Message";

export default function ChatWindow() {
  const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 0 16px;
    border-bottom: 1px solid rgb(230, 230, 230);

    .header {
      &__info {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &__title {
        margin: 0;
        font-weight: bold;
      }

      &__des {
        font-size: 12px;
      }
    }
  `;

  const ButtonGroupStyle = styled.div`
    display: flex;
    align-items: center;
  `;

  const ContentStyle = styled.div`
    height: calc(100% - 56px);
    display: flex;
    flex-direction: column;
    padding: 11px;
    justify-content: flex-end;
  `;

  const WrapperStyle = styled.div`
    height: 100vh;
  `;

  const FromStyle = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 2px 2px 0;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 2px;

    .ant-form-item {
      flex: 1;
      margin-bottom: 0;
    }
  `;

  const MessageListStyle = styled.div`
    max-height: 100%;
    overflow-y: hidden;
  `;

  return (
    <WrapperStyle>
      <HeaderStyle>
        <div className="header__info">
          <h2 className="header__title">Room 1</h2>

          <span className="header__des">Day la Room 1</span>
        </div>

        <ButtonGroupStyle>
          <Button icon={<UserAddOutlined />} type="text">
            Mời
          </Button>

          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>

            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>

            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>

            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>

            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyle>
      </HeaderStyle>

      <ContentStyle>
        <MessageListStyle>
          <Message
            text="Test"
            displayName="Hung"
            photoURL={null}
            createdAt={1545446464654}
          />

          <Message
            text="Test"
            displayName="Hung"
            photoURL={null}
            createdAt={1545446464654}
          />

          <Message
            text="Test"
            displayName="Hung"
            photoURL={null}
            createdAt={1545446464654}
          />
        </MessageListStyle>

        <FromStyle>
          <Form.Item>
            <Input
              placeholder="Nhập tin nhắn..."
              bordered={false}
              autoComplete="off"
            />
          </Form.Item>

          <Button type="primary">Gửi</Button>
        </FromStyle>
      </ContentStyle>
    </WrapperStyle>
  );
}
