import { MainStack } from "./main";
import { NavigationContainer } from "@react-navigation/native";

export const RootNavigationContainer = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
};
