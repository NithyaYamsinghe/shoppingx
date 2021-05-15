import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 10 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export default function listItem() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["item name"]}
        label="Item Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["description"]}
        rules={[{ required: true }]}
        label="Description"
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name={["quantity"]}
        label="Quantity"
        rules={[{ type: "number", min: 1, max: 99 }]}
        rules={[{ required: true, min: 1 }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        name={["Price"]}
        label="Item Price"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "age"]}
        label="Age"
        rules={[{ type: "number", min: 0, max: 99 }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={["user", "website"]} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "introduction"]} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
        <Button type="primary" htmlType="submit">
          List Item
        </Button>
      </Form.Item>
    </Form>
  );
}
