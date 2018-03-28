import React from 'react';
import { Modal } from 'antd';

import CategoryForm from './CategoryForm';

const EditCategory = ({category, handleSubmit, handleSetState, visible, toggoleModal}) =>
  <div>
    <Modal title="Edit Category"
      visible={visible}
      onOk={handleSubmit}
      confirmLoading={false}
      onCancel={toggoleModal}
    >
      <CategoryForm
        handleSubmit={handleSubmit}
        handleSetState={handleSetState}
        category={category}
        edit={true}
      />
    </Modal>
  </div>

export default EditCategory;
