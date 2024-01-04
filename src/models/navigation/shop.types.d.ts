import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type TShopStackParamList = {
    Categories: undefined;
    Products: undefined
    Product: undefined;
};

export type TCategoriesProps = NativeStackScreenProps<TShopStackParamList, 'Categories'>
export type TProductsProps = NativeStackScreenProps<TShopStackParamList, 'Products'>
export type TProductProps = NativeStackScreenProps<TShopStackParamList, 'Product'>