import React, { Component } from 'react';
import { Table, Icon, Divider, Button, Input } from 'antd';
const Search = Input.Search;

export default class ProductList extends Component {
  render() {
    const { data, handleSeleteProduct, handleDeleteProduct, handleSearchProduct } = this.props;
    const columns = [{
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },{
     title: 'Note',
     dataIndex: 'note',
     key: 'note',
   }, {
     title: 'Expire',
     dataIndex: 'expire_date',
     key: 'expire_date',
   }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button onClick={()=> handleDeleteProduct(record)}>
            <Icon type="delete" />
          </Button>
          <Divider type="vertical" />
          <Button onClick={ () => handleSeleteProduct(record) }>
            <Icon type="edit" />
          </Button>
        </span>
      ),
    }];

    return (
      <div>
        <Search
          style={{marginBottom: 10}}
          placeholder="search category ID"
          onSearch={value => handleSearchProduct(value)}
          enterButton
        />
        <Table
          columns={columns}
          dataSource={data}
          onChange={(pagination, filters, sorter) => console.log('pagination',pagination, 'filters',filters, 'sorter', sorter)}
        />
      </div>
    )
  }
}
