# Packages Used

_package.json_

<pre class="line-numbers"><code class="language-json">{
  "name": "StrapTaxiApp",
  "version": "8.2.0",
  "private": true,
  "devDependencies": {
    "babel-eslint": "^8.2.6",
    "eslint": "^5.3.0",
    "eslint-plugin-flowtype": "^2.50.0",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-jsx-a11y": "^6.1.1",
    "eslint-plugin-prettier": "^2.6.2",
    "eslint-plugin-react": "^7.11.1",
    "eslint-plugin-react-native": "^3.1.0",
    "flow-bin": "^0.79.0",
    "flow-typed": "^2.5.1",
    "husky": "^0.14.3",
    "jest": "^23.5.0",
    "jest-expo": "~27.0.0",
    "prettier": "^1.14.2",
    "react-native-scripts": "1.14.0",
    "react-test-renderer": "16.3.1"
  },
  "main": "./node_modules/react-native-scripts/build/bin/crna-entry.js",
  "scripts": {
    "start": "react-native-scripts start",
    "eject": "react-native-scripts eject",
    "android": "react-native-scripts android",
    "ios": "react-native-scripts ios",
    "test": " flow && jest && eslint .",
    "precommit": "yarn test"
  },
  "jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!(react-native|lottie-react-native|expo|react-native-maps|react-native-svg|react-native-branch|native-base-shoutem-theme|react-native-easy-grid|react-native-drawer|react-native-vector-icons|react-native-keyboard-aware-scroll-view|react-native-swiper|react-navigation|native-base|@expo|react-native-scrollable-tab-view|react-native-simple-modal|react-native-iphone-x-helper|react-native-router-flux)/)"
    ]
  },
  "dependencies": {
    "expo": "29.0.0",
    "lodash": "^4.17.4",
    "moment": "^2.19.1",
    "native-base": "2.7.2",
    "prop-types": "^15.6.0",
    "react": "16.3.1",
    "react-native": "0.55.4",
    "react-native-drawer": "https://github.com/GeekRishabh/react-native-drawer",
    "react-native-router-flux": "4.0.0-beta.27",
    "react-redux": "^5.0.7",
    "redux": "^4.0.0",
    "redux-logger": "^3.0.6",
    "redux-persist": "5.10.0",
    "redux-thunk": "2.3.0"
  }
}
</code></pre>
