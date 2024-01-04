import { TProductProps } from "../../models";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { SafeAreaView, Text, View } from "react-native";

export const ProductView = ({}: TProductProps) => {
    return (
        <SafeAreaView style={GlobalStyles.safeArea}>
            <View style={GlobalStyles.container}>
                <Text>Product</Text>
            </View>
        </SafeAreaView>
    );
};
