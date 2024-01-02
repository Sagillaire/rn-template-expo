import { THomeProps } from "../../models";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export const HomeView = ({ navigation }: THomeProps) => {
    return (
        <SafeAreaView style={GlobalStyles.safeArea}>
            <View style={GlobalStyles.container}>
                <Text>Home</Text>
                <TouchableOpacity onPress={() => navigation.navigate('About', { name: 'John Doe' })} style={GlobalStyles.btn}>
                    <Text style={GlobalStyles.btnText}>Go to about</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
