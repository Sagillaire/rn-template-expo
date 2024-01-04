import { TProductsProps } from "../../models";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { SafeAreaView, Text, View } from "react-native";

export const ProductsView = ({}: TProductsProps) => {
    return (
        <SafeAreaView style={GlobalStyles.safeArea}>
            <View style={GlobalStyles.container}>
                <Text>Products</Text>
            </View>
        </SafeAreaView>
    );
};
