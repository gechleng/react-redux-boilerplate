import React from 'react';
import CategoryForm from './CategoryForm';

const CreateCategory = ({category, handleSubmit, handleSetState}) =>
  <div style={{backgroundColor: '#ffecb3', padding: 10, marginBottom: 10}}>
    <h1>Create Category</h1>
    <CategoryForm
      handleSubmit={handleSubmit}
      handleSetState={handleSetState}
      category={category}
    />
  </div>

export default CreateCategory;
