export interface OrderItemType {
    id: string;
    createdAt: any;
    customerName: string;
    customerNumber: number;
    purchasedItems: Array<PurchasedItemType>;
    receiptImageUrl: string;
    status: number;
    updatedBy: string;
}

export interface PurchasedItemType {
    cost: number;
    name: string;
    productId: string;
    quantity: number;
    variantId: string;
}

export type OrderItemVariantCombinedType = OrderItemType & PurchasedItemType;
