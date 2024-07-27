import React from 'react';
import {
  Edit,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const ChallengeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source='question' validate={[required()]} label='Question' />
        <SelectInput
          source='type'
          choices={[
            { id: 'SELECT', name: 'SELECT' },
            { id: 'ASSIST', name: 'ASSIST' },
          ]}
          validate={[required()]}
          label='Type'
        />
        <ReferenceInput source='lessonId' reference='lessons' />
        <NumberInput source='order' validate={[required()]} label='Order' />
      </SimpleForm>
    </Edit>
  );
};
