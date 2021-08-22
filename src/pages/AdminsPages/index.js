import React from "react";
import {Admin, Resource} from "react-admin";
import {
    FirebaseDataProvider,
    FirebaseAuthProvider
} from "react-admin-firebase";

import { firebaseConfig as config } from '../../firebase/config';
import CustomLoginPage from "./LoginForm";

import {ProductCreate, ProductEdit, ProductsList, ProductShow} from "./products";
import {CategoriesList, CategoryCreate, CategoryEdit, CategoryShow} from "./categories";
import {ServiceCreate, ServiceEdit, ServiceShow, ServicesList} from "./services";
import {PriceCreate, PriceEdit, PriceShow, PricesList} from "./prices";
import {OrderEdit, OrderShow, OrdersList} from "./orders";



const options = {
    logging: true,
}
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

const AdminPage = () => {
    return (
        <Admin
            loginPage={CustomLoginPage}
            dataProvider={dataProvider}
            authProvider={authProvider}
        >
            <Resource
                name="Orders"
                list={OrdersList}
                show={OrderShow}
                edit={OrderEdit}
            />
            <Resource
                name="Products"
                list={ProductsList}
                show={ProductShow}
                create={ProductCreate}
                edit={ProductEdit}
            />
            <Resource
                name="Categories"
                list={CategoriesList}
                show={CategoryShow}
                create={CategoryCreate}
                edit={CategoryEdit}
            />
            <Resource
                name="Services"
                list={ServicesList}
                show={ServiceShow}
                create={ServiceCreate}
                edit={ServiceEdit}
            />
            <Resource
                name="Prices"
                list={PricesList}
                show={PriceShow}
                create={PriceCreate}
                edit={PriceEdit}
            />
        </Admin>
    );
}

export default AdminPage;
