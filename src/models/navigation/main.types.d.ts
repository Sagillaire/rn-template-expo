import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type TRootStackParamList = {
    Home: undefined;
    About: IAboutParams;
};

export interface IAboutParams {
    name: string;
}

export type THomeProps = NativeStackScreenProps<TRootStackParamList, 'Home'>
export type TAboutProps = NativeStackScreenProps<TRootStackParamList, 'About'>