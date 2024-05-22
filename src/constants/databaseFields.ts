import { IDatabase } from '../interfaces/IDatabase';
import { FieldsData } from '../interfaces/IGenericFields';
import { inputValidation } from './validators';

export const databaseFields: FieldsData<IDatabase> = {
  id: {},
  name: {
    tableColumn: {
      label: 'Name',
      name: 'name',
      order: 1,
      format: 'string',
      isShown: true,
    },
    formField: {
      label: 'Name',
      name: 'name',
      order: 1,
      type: 'text',
      required: true,
      validator: inputValidation.english,
    },
  },
  url: {
    formField: {
      label: 'Url',
      name: 'url',
      order: 2,
      type: 'url',
      required: true,
      validator: inputValidation.url,
    },
  },
  username: {
    tableColumn: {
      label: 'Username',
      name: 'username',
      order: 2,
      format: 'string',
      isShown: true,
    },
    formField: {
      label: 'Username',
      name: 'username',
      order: 3,
      type: 'text',
      required: true,
      validator: inputValidation.english,
    },
  },
  password: {
    formField: {
      label: 'Password',
      name: 'password',
      order: 4,
      type: 'password',
      required: true,
      validator: inputValidation.password,
    },
  },
  type: {
    tableColumn: {
      label: 'Type',
      name: 'type',
      order: 3,
      format: 'string',
      isShown: true,
    },
    formField: {
      label: 'Type',
      name: 'type',
      order: 5,
      type: 'select',
      required: true,
      options: ['Snowflake', 'Trino', 'MySQL'],
    },
  },
};
