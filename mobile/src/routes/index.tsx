import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Movies } from '../pages';
import { theme } from '../styles';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MovieFlix" component={Home} />
            <Stack.Screen name="Movies" component={Movies} />
        </Stack.Navigator>
    );
}

export default Routes;