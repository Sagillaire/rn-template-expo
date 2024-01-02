import { screenOptions } from "./screenOptions";
import { TRootStackParamList } from "../models";
import { AboutView, HomeView } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const MainStack = () => {
    const Stack = createNativeStackNavigator<TRootStackParamList>();

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <Stack.Screen name='Home' component={HomeView} />
            <Stack.Screen name='About' component={AboutView} />
        </Stack.Navigator>
    );
};
