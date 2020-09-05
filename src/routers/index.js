import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from '../redux/store'
import General from '../pages/private/general'
import Search from '../pages/private/search'
import CreateNews from '../pages/private/create-news'
import UpdateNews from '../pages/private/update-news'
import Author from '../pages/private/author'
import Apresentation from '../pages/public/Apresentation'

const Stack = createStackNavigator()

export default function StackInitial() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="none"
                >
                    <Stack.Screen 
                        name="StackPublic" 
                        component={StackPublic}
                    />
                    <Stack.Screen 
                        name="StackPrivate" 
                        component={StackPrivate}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

function StackPublic() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Apresentation" 
                component={Apresentation}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

function StackPrivate() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="General" 
                component={General}
                options={{
                    headerTitle: 'Dashboard',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen 
                name="Search" 
                component={Search}
                options={{ 
                    headerTitleAlign: 'center',
                    headerTitle: 'Pesquisar'
                }}
            />
            <Stack.Screen 
                name="CreateNews" 
                component={CreateNews} 
                options={{
                    headerShown: false,
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                    ...TransitionPresets.ModalPresentationIOS, 
                }}
            />
            <Stack.Screen 
                name="UpdateNews" 
                component={UpdateNews} 
                options={{
                    headerShown: false,
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                    ...TransitionPresets.ModalPresentationIOS, 
                }}
            />
            <Stack.Screen 
                name="Author" 
                component={Author} 
                options={{
                    headerShown: false,
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                    ...TransitionPresets.ModalPresentationIOS, 
                }}
            />
        </Stack.Navigator>
    )
}