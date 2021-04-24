import React, { useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
        }}
    >
{/* aqui definimos como vai ser a navegacao do app criamo uma pilha de navegacao*/}

        <stackRoutes.Screen
            name="Welcome" //quando alguem chamar por este nome de tela
            component={Welcome}//mostra esta tela e por ai vai
        />

        <stackRoutes.Screen
            name="UserIdentification"
            component={UserIdentification}
        />

        <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;