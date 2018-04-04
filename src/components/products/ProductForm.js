import React, { Component } from 'react';
import moment from 'moment';
import { Form, Icon, Input, Button, Menu, Select, DatePicker } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class ProductForm extends Component {
  render() {
    const {
      product,
      categories,
      category,
      handleSetStateProduct,
      handleSetStateCategory,
      isValid
    } = this.props;

    console.log(isValid)
    return (
      <div>
        <Form layout="inline">
          <Select firstActiveValue={category} style={{ width: 120 }} onChange={ text => handleSetStateCategory(text) }>
            {
              categories.map(
                category => <Option value={category.id}>{category.name}</Option>
              )
            }
          </Select>
          <FormItem>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="name"
              value={product.name}
              onChange={ text => handleSetStateProduct('name', text.target.value)}
            />
          </FormItem>

          <FormItem>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="price"
              value={product.price}
              onChange={ text => handleSetStateProduct('price', text.target.value)}
            />
          </FormItem>

          <FormItem>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="note"
              value={product.note}
              onChange={ text => handleSetStateProduct('note', text.target.value)}
            />
          </FormItem>

          <FormItem>
            <DatePicker
              onChange={(date) => handleSetStateProduct('expire_date', date._d)}
              value={moment(product.date)}
            />
          </FormItem>
        </Form>
        { isValid && <p style={{color: 'red'}}>You miss something!!!</p>}
      </div>
    )
  }
}

export default ProductForm;
