import React from 'react';
import { Modal } from 'antd';

import CategoryForm from './CategoryForm';

const EditCategory = ({
  category,
  handleSubmit,
  handleSetState,
  visible,
  toggoleModal,
  loading,
  isValid
}) =>
  <div>
    <Modal title="Edit Category"
      visible={visible}
      onOk={handleSubmit}
      confirmLoading={false}
      onCancel={toggoleModal}
      confirmLoading={loading}
    >
      <CategoryForm
        isValid={isValid}
        handleSetState={handleSetState}
        category={category}
      />
    </Modal>
  </div>

export default EditCategory;
