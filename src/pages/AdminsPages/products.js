import React from "react";
import {
    Datagrid,
    List,
    Show,
    Create,
    Edit,
    Filter,
    SimpleShowLayout,
    SimpleForm,
    ReferenceField,
    ReferenceInput,
    TextField,
    TextInput,
    ShowButton,
    EditButton,
    DeleteButton,
    RichTextField,
    SelectInput,
    BooleanField,
    ImageField,
    BooleanInput,
    ArrayField,
    ImageInput, SimpleFormIterator, ArrayInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const ProductTitle = ({ record }) => (
    <span>Product {record ? `"${record.title}"` : ''}</span>
);


const ProductsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="title" alwaysOn />
    </Filter>
);

export const ProductsList = (props) => (
    <List {...props} filters={<ProductsFilter />}>
        <Datagrid>
            <TextField source="title" />
            <ReferenceField label="Category" source="categoryID" reference="Categories">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="price" />
            <TextField source="sort" />
            <TextField source="material" />
            <BooleanField source="availability"/>

            <ShowButton label="" />
            <EditButton label="" />
            <DeleteButton label="" redirect={false}/>
        </Datagrid>
    </List>
);

export const ProductShow = (props) => (
    <Show {...props} title={<ProductTitle/>}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField label="Category" source="categoryID" reference="Categories">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="price" />
            <TextField source="sort" />
            <TextField source="material" />
            <BooleanField source="availability"/>
            <ArrayField source="sizes">
                <Datagrid>
                    <TextField source="size" />
                </Datagrid>
            </ArrayField>
            <ImageField source="image.src" title="title" label="Image"/>
            <RichTextField source="description" />
        </SimpleShowLayout>
    </Show>
);

const productDefaultValue = () => (
    {
       type: 'good'
    }
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm initialValues={productDefaultValue}>
            <TextInput source="title" />
            <ReferenceInput label="Category" source="categoryID" reference="Categories">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <RichTextInput source="description" />
            <TextInput source="price" />
            <TextInput source="sort" />
            <TextInput source="material" />
            <BooleanInput source="availability"/>
            <ArrayInput source="sizes" >
                <SimpleFormIterator>
                    <TextInput source="size" label="Размер"/>
                </SimpleFormIterator>
            </ArrayInput>
            <ImageInput source="image" label="Related pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

export const ProductEdit = (props) => (
    <Edit {...props} title={<ProductTitle/>}>
        <SimpleForm>
            <TextInput source="title" />
            <ReferenceInput label="Category" source="categoryID" reference="Categories">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <RichTextInput source="description" />
            <TextInput source="price" />
            <TextInput source="sort" />
            <TextInput source="material" />
            <BooleanInput source="availability"/>
            <ArrayInput source="sizes" >
                <SimpleFormIterator>
                    <TextInput source="size" label="Размер"/>
                </SimpleFormIterator>
            </ArrayInput>
            <ImageInput source="image" label="Related pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);