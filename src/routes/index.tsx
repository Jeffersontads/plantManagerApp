import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack.routes';


// centralizamos dentro de uma container de navegacao
const Routes = () => (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
)

export default Routes;