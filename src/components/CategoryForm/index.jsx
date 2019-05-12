import React from 'react';
import TextInput from '../TextInput';
import { Field } from '../Form';
import UploadIcon from '../UploadIcon';

const CategoryEditor = () => (
  <>
    <Field>
      {/* TODO: Add max length */}
      <TextInput
        placeholder="Введите имя категории"
      />
    </Field>
    <Field>
      <UploadIcon />
    </Field>
  </>
);

export default CategoryEditor;
