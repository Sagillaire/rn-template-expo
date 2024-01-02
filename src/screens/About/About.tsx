import { TAboutProps } from "../../models";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export const AboutView = ({ navigation, route }: TAboutProps) => {
    const { name } = route.params || {};

    return (
        <SafeAreaView style={GlobalStyles.safeArea}>
            <View style={GlobalStyles.container}>
                <Text>About</Text>
                <Text>Welcome {name}!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={GlobalStyles.btn}>
                    <Text style={GlobalStyles.btnText}>Go to home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
