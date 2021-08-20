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
    DeleteButton, RichTextField, ImageField, ImageInput, Filter,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";


const ServiceTitle = ({ record }) => (
    <span>Service {record ? `"${record.title}"` : ''}</span>
);

const ServicesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="title" alwaysOn />
    </Filter>
);

export const ServicesList = (props) => (
    <List {...props} filters={<ServicesFilter/>}>
        <Datagrid>
            <TextField source="title" />

            <ShowButton label="" />
            <EditButton label="" />
            <DeleteButton label="" redirect={false}/>
        </Datagrid>
    </List>
);

export const ServiceShow = (props) => (
    <Show title={<ServiceTitle/>} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <RichTextField source="description" />
            <ImageField source="image.src" title="title" label="Image"/>
        </SimpleShowLayout>
    </Show>
);

const serviceDefaultValue = () => (
    {
        type: 'service'
    }
);


export const ServiceCreate = (props) => (
    <Create {...props} >
        <SimpleForm initialValues={serviceDefaultValue}>
            <TextInput source="title" />
            <RichTextInput source="description" />
            <ImageInput source="image" label="Related pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

export const ServiceEdit = (props) => (
    <Edit  title={<ServiceTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <RichTextInput source="description" />
            <ImageInput source="image" label="Related pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);