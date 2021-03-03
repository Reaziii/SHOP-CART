import React from 'react'
import ReactDom from 'react-dom'
import Homepage from './components/homepage/Homepage'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {create} from './persistor/cofigurestore'
let {store,persistor} = create();
ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Homepage/>
            </BrowserRouter>
        </PersistGate>
    </Provider>
    ,document.getElementById("root")
)