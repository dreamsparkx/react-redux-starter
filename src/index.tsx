import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// https://medium.com/@pppped/extend-create-react-app-with-airbnbs-eslint-config-prettier-flow-and-react-testing-library-96627e9a9672
// https://medium.com/@feralamillo/create-react-app-typescript-eslint-and-prettier-699277b0b913
// https://thomlom.dev/setup-eslint-prettier-react/
// https://dev.to/botreetechnologies/setting-up-husky-pre-commit-hook-with-eslint-prettier-and-lint-staged-for-react-and-react-native-d05
// https://dev.to/chuck_huey/setup-a-typescript-project-with-eslint-prettier-editorconfig-and-husky-13aa
// https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
