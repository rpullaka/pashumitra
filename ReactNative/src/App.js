"use strict";

import AppNavigator from "./AppNavigator";
import React,{Component} from "react";

class App extends Component {

    render() {
        return (
            <AppNavigator store={this.props.store} />
            );
    }
}

export default App;
