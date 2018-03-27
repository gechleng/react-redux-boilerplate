import React from 'react';

import ProductForm from './ProductForm'

const CreateProduct = ({product, category, categories, edit=false, handleSetStateCategory, handleSetStateProduct, handleCreateProduct}) =>
  <div style={{backgroundColor: '#d9f2e6', padding: 10, marginBottom: 10}}>
    <h1>Create Pruduction</h1>
    <ProductForm
      handleSetStateCategory={handleSetStateCategory}
      handleSetStateProduct={handleSetStateProduct}
      handleSubmitProduct={handleCreateProduct}
      categories={categories}
      category={category}
      product={product}
      edit={edit}
    />
  </div>

export default CreateProduct;
