import { TabsNavigator } from "./tabs";
import { NavigationContainer } from "@react-navigation/native";

export const RootNavigationContainer = () => {
    return (
        <NavigationContainer>
            <TabsNavigator />
        </NavigationContainer>
    );
};
