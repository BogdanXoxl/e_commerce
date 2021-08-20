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
    TextInput,
    ShowButton,
    EditButton,
    DeleteButton,
    SimpleFormIterator,
    ArrayInput,
    ArrayField, Filter
} from "react-admin";

const PriceTitle = ({ record }) => (
    <span>Price {record ? `"${record.title}"` : ''}</span>
);
const PricesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="title" alwaysOn />
    </Filter>
);

export const PricesList = (props) => (
    <List {...props} filters={<PricesFilter />}>
        <Datagrid>
            <TextField source="title" />

            <ShowButton label="" />
            <EditButton label="" />
            <DeleteButton label="" redirect={false}/>
        </Datagrid>
    </List>
);

export const PriceShow = (props) => (
    <Show title={<PriceTitle/>} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <ArrayField source="goods">
                <Datagrid>
                    <TextField source="size" label="Размер"/>
                    <TextField source="price" label="Цена"/>
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);


export const PriceCreate = (props) => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source="title" />
            <ArrayInput source="goods" >
                <SimpleFormIterator>
                    <TextInput source="size" label="Размер"/>
                    <TextInput source="price" label="Цена"/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);



export const PriceEdit = (props) => (
    <Edit title={<PriceTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <ArrayInput source="goods" >
                <SimpleFormIterator>
                    <TextInput source="size" label="Размер"/>
                    <TextInput source="price" label="Цена"/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);