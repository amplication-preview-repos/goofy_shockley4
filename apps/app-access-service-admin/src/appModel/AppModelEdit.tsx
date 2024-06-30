import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserAppAccessTitle } from "../userAppAccess/UserAppAccessTitle";

export const AppModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cookies" multiline source="cookies" />
        <TextInput label="name" source="name" />
        <TextInput label="url" source="url" />
        <ReferenceArrayInput
          source="userAppAccesses"
          reference="UserAppAccess"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserAppAccessTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
