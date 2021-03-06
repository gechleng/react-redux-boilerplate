import React from 'react';
import { Modal } from 'antd';

import CategoryForm from './CategoryForm';
const CreateCategory = ({
  category,
  handleSubmit,
  handleSetState,
  visible,
  toggoleModal,
  loading
}) =>
  <div>
    <Modal title="Create Category"
      visible={visible}
      onOk={handleSubmit}
      confirmLoading={false}
      confirmLoading={loading}
      onCancel={toggoleModal}
    >
      <CategoryForm
        handleSetState={handleSetState}
        category={category}
      />
    </Modal>
  </div>

export default CreateCategory;
