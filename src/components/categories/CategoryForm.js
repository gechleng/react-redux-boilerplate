import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

const CategoryForm = ({handleSubmit, category, handleSetState, edit=false}) =>
  <div>
    <Form layout="inline">
      <FormItem>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="name"
          value={category.name}
          onChange={ text => handleSetState('name', text.target.value)}
        />
      </FormItem>

      <FormItem>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="note"
          value={category.note}
          onChange={ text => handleSetState('note', text.target.value)}
        />
      </FormItem>

      <FormItem>
        <Button
          type="primary"
          htmlType="submit"
          disabled={false}
          onClick={handleSubmit}
        >
          { edit ? 'Edit' : 'Save'}
        </Button>
      </FormItem>
    </Form>
  </div>


export default CategoryForm;
