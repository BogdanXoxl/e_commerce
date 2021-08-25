import React from "react";
import {
    Datagrid,
    List,
    Show,
    Create,
    Edit,
    SimpleShowLayout,
    SimpleForm,
    TextField,
    ShowButton,
    EditButton,
    DeleteButton,
    required, RichTextField, NumberField
} from "react-admin";
import RichTextInput from "ra-input-rich-text";



export const AboutUsList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField source="id"/>

            <ShowButton label="" />
            <EditButton label="" />
            <DeleteButton label="" redirect={false}/>
        </Datagrid>
    </List>
);

export const AboutUsShow = (props) => (
    <Show{...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <RichTextField source="text" />
        </SimpleShowLayout>
    </Show>
);


export const AboutUsCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <RichTextInput source="text" validate={required()}/>
        </SimpleForm>
    </Create>
);

export const AboutUsEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <RichTextInput source="text" validate={required()}/>
        </SimpleForm>
    </Edit>
);