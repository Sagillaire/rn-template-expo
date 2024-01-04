import { MainStack } from "./main"
import { ShopStack } from "./shop"
import { Entypo, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()
const getFocusColor = (focused: boolean) => focused ? '#0abde3' : '#576574'

export const TabsNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
            tabBarActiveTintColor: '#0abde3'
        }}>
            <Tab.Screen name="MainStack" component={MainStack} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused }) => <Ionicons name="home" size={24} color={getFocusColor(focused)} />
            }} />
            <Tab.Screen name="ShopStack" component={ShopStack} options={{
                tabBarLabel: 'Shop',
                tabBarIcon: ({ focused }) => <Entypo name="shop" size={24} color={getFocusColor(focused)} />
            }} />
        </Tab.Navigator>
    )
}
