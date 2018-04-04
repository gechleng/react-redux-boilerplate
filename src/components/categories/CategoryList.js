import React, { Component } from 'react';
import { Table, Icon, Divider, Button, Input } from 'antd';
const Search = Input.Search;

class CategoryList extends Component {
  render() {
    const { data, handleSelectCategory, handleDelete, handleSearch} = this.props;

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
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button onClick={()=> handleDelete(record)}>
            <Icon type="delete" />
          </Button>
          <Divider type="vertical" />
          <Button onClick={ () => handleSelectCategory(record) }>
            <Icon type="edit" />
          </Button>
        </span>
      ),
    }];

    return (
      <div style={{marginTop: 20}}>
        <Search
          style={{marginBottom: 10}}
          placeholder="search category ID"
          onSearch={value => handleSearch(value)}
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

export default CategoryList;
