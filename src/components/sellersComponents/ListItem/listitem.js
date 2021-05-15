import React, { Component } from "react";
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

class ListItem extends Component {
  state = {
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  };

  onFinish = (values) => {
    console.log(values);
  };

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await this.getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    return (
      <Form
        {...layout}
        name="nest-messages"
        onFinish={this.onFinish}
        validateMessages={validateMessages}
      >
        <h1> List New Item</h1>
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

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
          <Upload
            action="*"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
            beforeUpload={() => false}
          >
            {fileList.length >= 4 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={this.handleCancel}
          >
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              console.log(this.getBase64(this.state.fileList[0].originFileObj));
            }}
          >
            List Item
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default ListItem;
