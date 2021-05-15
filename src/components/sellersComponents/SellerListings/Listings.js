import React from "react";
import "./Listings.css";
import { Table, Input, Button, Space } from "antd";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { message } from "antd";
const { Paragraph } = Typography;

const data = [
  {
    key: "1",
    itemID: "123456",
    name: "T shirt",
    image: "https://picsum.photos/500",
    description:
      "A product description is the marketing copy used to describe a product's value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    quantity: "20",
    price: "Rs 2000.00",
  },
  {
    key: "2",
    itemID: "123456",
    name: "Slim Fit Polo T-shirt with Contrast Panels",
    image: "https://picsum.photos/500",
    description:
      "A product description is the marketing copy used to describe a product's value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    quantity: "20",
    price: "Rs 2000.00",
  },
  {
    key: "3",
    itemID: "123456",
    name: "Slim Fit Polo T-shirt with Contrast Panels",
    image: "https://picsum.photos/500",
    description:
      "A product description is the marketing copy used to describe a product's value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    quantity: "20",
    price: "Rs 2000.00",
  },
  {
    key: "4",
    itemID: "123456",
    name: "Slim Fit Polo T-shirt with Contrast Panels",
    image: "https://picsum.photos/500",
    description:
      "A product description is the marketing copy used to describe a product's value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    quantity: "20",
    price: "Rs 2000.00",
  },
  {
    key: "5",
    itemID: "123456",
    name: "Slim Fit Polo T-shirt with Contrast Panels",
    image: "https://picsum.photos/500",
    description:
      "A product description is the marketing copy used to describe a product's value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    quantity: "20",
    price: "Rs 2000.00",
  },
  {
    key: "6",
    itemID: "123456",
    name: "Slim Fit Polo T-shirt with Contrast Panels",
    image: "https://picsum.photos/500",
    description:
      "A product description is the marketing copy used to describe a product's value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.",
    quantity: "20",
    price: "Rs 2000.00",
  },
];

export default class ListingTable extends React.Component {
  state = {
    searchText: "",
    searchedColumn: "",
  };

  componentWillMount = () => {
    console.log(this.props.match.params.sortby);
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  handleDelete = () => {
    var r = window.confirm("Are you sure?");
    if (r === true) message.success("Item removed!");
    else message.error("Something went wrong!");
  };

  render() {
    const columns = [
      {
        title: "Item ID",
        dataIndex: "itemID",
        key: "itemID",

        ...this.getColumnSearchProps("itemID"),
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",

        ...this.getColumnSearchProps("name"),
      },
      {
        title: "Image",
        dataIndex: "image",
        key: "image",
        width: "7%",
        render: (image) => <img src={image} width="80px" />,
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        width: "35%",
        render: (description) => (
          <Paragraph
            ellipsis={{
              rows: 1,
              expandable: true,
            }}
          >
            {description}
          </Paragraph>
        ),
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
        width: "10%",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <a>Edit</a>
            <a>View</a>
            <a onClick={this.handleDelete}>Delete</a>
          </Space>
        ),
      },
    ];
    return (
      <Table
        bordered="true"
        pagination={{
          defaultPageSize: 5,
        }}
        scroll={{ x: 400 }}
        columns={columns}
        dataSource={data}
      />
    );
  }
}
