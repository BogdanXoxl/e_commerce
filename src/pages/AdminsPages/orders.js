import React from "react";
import {
    Datagrid,
    List,
    Show,
    Edit,
    SimpleShowLayout,
    SimpleForm,
    TextField,
    TextInput,
    ShowButton,
    EditButton,
    DeleteButton,
    EmailField,
    Filter,
    ReferenceField,
    BooleanField,
    ArrayField,
    ImageField,
    RichTextField,
    DateField,
    NumberField,
    BooleanInput, required
} from "react-admin";

const OrdersTitle = ({ record }) => (
    <span>Order {record ? `"${record.username}"` : ''}</span>
);

const OrdersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="title" alwaysOn />
    </Filter>
);

export const OrdersList = (props) => (
    <List {...props} filters={<OrdersFilter/>}>
        <Datagrid>
            <DateField source="date" showTime/>
            <TextField source="username" />
            <EmailField source="email" />
            <NumberField source="check" />
            <BooleanField source="status"/>

            <ShowButton label="" />
            <EditButton label="" />
            <DeleteButton label="" redirect={false}/>
        </Datagrid>
    </List>
);

export const OrderShow = (props) => (
    <Show title={<OrdersTitle/>}{...props}>
        <SimpleShowLayout>
            <BooleanField source="status"/>
            <TextField source="username" />
            <EmailField source="email" />
            <DateField source="date" showTime/>
            <TextField source="tel" label="Телефон"/>
            <NumberField source="check" label="Товаров на сумму:"/>
            <ArrayField source="cart.products" label="Товары">
                <Datagrid>
                    <ReferenceField source="id" reference="Products">
                        <TextField source="id" />
                    </ReferenceField>
                    <ReferenceField label="Category" source="categoryID" reference="Categories">
                        <TextField source="title" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="price" />
                    <TextField source="qty" />
                    <TextField source="sort" />
                    <TextField source="material" />
                    <BooleanField source="availability"/>
                    {/*<ArrayField source="sizes">*/}
                    {/*    <Datagrid>*/}
                    {/*        <TextField source="size" />*/}
                    {/*    </Datagrid>*/}
                    {/*</ArrayField>*/}
                    {/*<ImageField source="image.src" title="title" label="Image"/>*/}
                    {/*<RichTextField source="description" />*/}
                </Datagrid>
            </ArrayField>
            <ArrayField source="cart.services" label="Услуги">
                <Datagrid>
                    <ReferenceField source="id" reference="Services" label={"Title"}>
                        <TextField source="title" />
                    </ReferenceField>
                    <RichTextField source="description" />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);


export const OrderEdit = (props) => (
    <Edit title={<OrdersTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="username" validate={required()}/>
            <TextInput source="email" validate={required()}/>
            <TextInput source="tel" validate={required()}/>
            <BooleanInput source="status" validate={required()}/>
        </SimpleForm>
    </Edit>
);