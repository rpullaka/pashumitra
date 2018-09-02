import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StyleProvider, Root } from "native-base";
import App from "../App";
import configureStore from "./configureStore";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

const { store, persistor } = configureStore();

export default class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Root>
              <App />
            </Root>
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}
