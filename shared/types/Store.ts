export interface StoreItemType {
    id: string;
    attributes: Array<String>;
    variants: Array<StoreItemVariantType>;
    basePrice: number;
    description: string;
    imageURL: string;
    productImageUrl: string;
    additionalImages: Array<string>;
    isActive: boolean;
    name: string;
}

export interface StoreItemVariantType {
    name: string;
    priceModifier: number;
    stock: number;
}

export type StoreItemVariantCombinedType = StoreItemType & {
    selectedVariant?: StoreItemVariantType;
};