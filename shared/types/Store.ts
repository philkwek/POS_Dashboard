export interface StoreItemType {
    attributes: Array<String>;
    variants: Array<StoreItemVariantType>;
    basePrice: Number;
    description: string;
    imageURL: string;
    isActive: boolean;
    name: string;
}

export interface StoreItemVariantType {
    name: string;
    priceModifier: Number;
    stock: Number;
}