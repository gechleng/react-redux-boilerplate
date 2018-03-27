import React, { Component } from 'react';
import moment from 'moment';
import { Form, Icon, Input, Button, Menu, Select, DatePicker } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class ProductForm extends Component {
  render() {
    const { product, categories, category, handleSetStateProduct, edit, handleSubmitProduct, handleSetStateCategory } = this.props;
    console.log(category)
    console.log(categories)
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

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleSubmitProduct}
            >
              { edit ? 'Edit' : 'Save'}
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default ProductForm;