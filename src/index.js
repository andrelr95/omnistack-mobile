import React from 'react';
import { View } from 'react-native';
import { YellowBox } from 'react-native';

import Routes from './routes';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

const App = () => <Routes />;

export default App;
