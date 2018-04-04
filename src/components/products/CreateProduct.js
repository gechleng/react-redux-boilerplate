import React from 'react';
import { Modal } from 'antd';

import ProductForm from './ProductForm'

const CreateProduct = ({
  product,
  category,
  categories,
  visible,
  handleSetStateCategory,
  handleSetStateProduct,
  handleSubmit,
  toggoleModal,
  loading
}) =>
  <div>
    <Modal title="Create Product"
      visible={visible}
      onOk={handleSubmit}
      confirmLoading={false}
      onCancel={toggoleModal}
      confirmLoading={loading}
    >
      <ProductForm
        handleSetStateCategory={handleSetStateCategory}
        handleSetStateProduct={handleSetStateProduct}
        categories={categories}
        category={category}
        product={product}
      />
    </Modal>
  </div>

export default CreateProduct;
