import React from 'react';
import {
  BooleanInput,
  Create,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source='text' validate={[required()]} label='Text' />
        <BooleanInput
          source='correct'
          validate={[required()]}
          label='Correct option'
        />
        <ReferenceInput source='challengeId' reference='challenges' />
        <TextInput source='imageSrc' label='Image URL' />
        <TextInput source='audioSrc' label='Audio URL' />
      </SimpleForm>
    </Create>
  );
};