import firebase from "firebase";
import "firebase/auth"

import {firebaseConfig} from "./config";


class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

    async logIn(email, password){
        return await firebase.auth().signInWithEmailAndPassword(email, password).catch(e => console.log(e));
    }

    async logOut(){
        return await firebase.auth().signOut().catch(e => console.log(e));
    }

    async getUserState(){
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        });
    }


    async getProducts(){
        let productsArray = [];
        const products = await firebase.firestore().collection('Products').get();
        products.forEach(doc => {
            productsArray.push({id: doc.id, ...doc.data()});
        });
        return productsArray;
    }

    async getProductById(id){
        const product = await firebase.firestore().collection('Products').doc(id).get();
        return product.data();
    }

    async getCategories(){
        let categoriesArray = [];
        const categories = await firebase.firestore().collection('Categories').get();
        categories.forEach(doc => {
            categoriesArray.push({id: doc.id, ...doc.data()});
        });
        return categoriesArray;
    }

    async getCategoryByTitle(title){
        let category = await firebase.firestore().collection('Categories').where('title', '==', title).get();
        console.log(category);
        return category;
    }

    async getServices(){
        let servicesArray = [];
        const services = await firebase.firestore().collection('Services').get();
        services.forEach(doc => {
            servicesArray.push({id: doc.id, ...doc.data()});
        });
        return servicesArray;
    }

    async getPrices(){
        let pricesArray = [];
        const prices = await firebase.firestore().collection('Prices').get();
        prices.forEach(doc => {
            pricesArray.push({id: doc.id, ...doc.data()});
        });
        return pricesArray;
    }
}

export default new Firebase();



