import React from 'react';
import ProductForm from './ProductForm';

const EditProduct = ({product, category, categories, edit=false, handleSetStateCategory, handleSetStateProduct, handleEditProduct}) =>
  <div style={{backgroundColor: '#d9f2e6', padding: 10, marginBottom: 10}}>
    <h1>Edit Pruduction</h1>
    <ProductForm
      handleSetStateCategory={handleSetStateCategory}
      handleSetStateProduct={handleSetStateProduct}
      handleSubmitProduct={handleEditProduct}
      categories={categories}
      category={category}
      product={product}
      edit={edit}
    />
  </div>
export default EditProduct;
