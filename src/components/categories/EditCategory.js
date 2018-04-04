import React from 'react';
import { Modal } from 'antd';

import CategoryForm from './CategoryForm';

const EditCategory = ({
  category,
  handleSubmit,
  handleSetState,
  visible,
  toggoleModal
}) =>
  <div>
    <Modal title="Edit Category"
      visible={visible}
      onOk={handleSubmit}
      confirmLoading={false}
      onCancel={toggoleModal}
    >
      <CategoryForm
        handleSetState={handleSetState}
        category={category}
      />
    </Modal>
  </div>

export default EditCategory;
