import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import { MainPage } from "./mainPage";

import { NavigationContainer } from "@react-navigation/native";



export function Drawer() {

    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Home"
                    component={MainPage}
                    options={{
                        drawerIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />
                    }}
                />
                <Drawer.Screen
                    name="Another page"
                    component={MainPage}
                    options={{
                        drawerIcon: ({ color, size }) => <MaterialIcons name="looks-two" size={size} color={color} />
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


