import { TCategoriesProps } from "../../models";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export const CategoriesView = ({ navigation }: TCategoriesProps) => {
    return (
        <SafeAreaView style={GlobalStyles.safeArea}>
            <View style={GlobalStyles.container}>
                <Text>Categories</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Products')}
                    style={[GlobalStyles.btn, GlobalStyles.btnShopColor]}>
                    <Text style={GlobalStyles.btnText}>Go to products</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
