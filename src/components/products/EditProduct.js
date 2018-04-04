import React from 'react';
import { Modal } from 'antd';

import ProductForm from './ProductForm';

const EditProduct = ({
  product,
  category,
  categories,
  visible,
  handleSubmit,
  handleSetStateCategory,
  handleSetStateProduct,
  handleEditProduct,
  toggoleModal
}) =>
  <div>
    <Modal title="Create Category"
      visible={visible}
      onOk={handleSubmit}
      confirmLoading={false}
      onCancel={toggoleModal}
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

export default EditProduct;
