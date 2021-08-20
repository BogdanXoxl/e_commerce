import React from "react";
import {
    Datagrid,
    List,
    Show,
    Create,
    Edit,
    SimpleShowLayout,
    SimpleForm,
    ReferenceInput,
    TextField,
    TextInput,
    ShowButton,
    EditButton,
    DeleteButton,
    SelectInput, Filter
} from "react-admin";

const CategoryTitle = ({ record }) => (
    <span>Category {record ? `"${record.title}"` : ''}</span>
);

const CategoryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="title" alwaysOn />
    </Filter>
);

export const CategoriesList = (props) => (
    <List {...props} filters={<CategoryFilter/>}>
        <Datagrid>
            <TextField source="title" />

            <ShowButton label="" />
            <EditButton label="" />
            <DeleteButton label="" redirect={false}/>
        </Datagrid>
    </List>
);

export const CategoryShow = (props) => (
    <Show title={<CategoryTitle/>}{...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
        </SimpleShowLayout>
    </Show>
);


export const CategoryCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);

export const CategoryEdit = (props) => (
    <Edit title={<CategoryTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);