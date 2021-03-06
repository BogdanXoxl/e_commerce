import React from "react";
import { Route, Switch} from "react-router-dom";
import Router from "./Router";
import AdminPage from "./pages/AdminsPages";

import store from "./redux/store";
import {Provider} from "react-redux";



const App = () => {
  return (
    <Switch>
        <Route path={["/admin", "/Orders","/Products", "/Categories", "/Services", "/Prices", "/AboutUs", "/login"]} component={AdminPage}/>
        <Provider store={store}>
            <Route component={Router}/>
        </Provider>
    </Switch>
  );
};


export default App;
