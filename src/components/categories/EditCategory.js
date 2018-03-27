import React from 'react';
import CategoryForm from './CategoryForm';

const EditCategory = ({category, handleSubmit, handleSetState}) =>
  <div style={{backgroundColor: '#ffecb3', padding: 10, marginBottom: 10}}>
    <h1>Edit Category</h1>
    <CategoryForm
      handleSubmit={handleSubmit}
      handleSetState={handleSetState}
      category={category}
      edit={true}
    />
  </div>

export default EditCategory;
