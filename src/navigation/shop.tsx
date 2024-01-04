import { screenOptions, screenOptionsShop } from "./screenOptions";
import { TShopStackParamList } from "../models";
import { CategoriesView, ProductView, ProductsView } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const ShopStack = () => {
    const Stack = createNativeStackNavigator<TShopStackParamList>();

    return (
        <Stack.Navigator initialRouteName='Categories' screenOptions={screenOptionsShop}>
            <Stack.Screen name='Categories' component={CategoriesView} />
            <Stack.Screen name='Products' component={ProductsView} />
            <Stack.Screen name='Product' component={ProductView} />
        </Stack.Navigator>
    );
};
