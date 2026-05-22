import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StoreItemVariantCombinedType } from "@pos-dashboard/shared";

export interface CartItemData {
  item: StoreItemVariantCombinedType;
  quantity: number;
}

interface CartStore {
  items: CartItemData[];
  addItem: (newItem: CartItemData) => void;
  removeItem: (productId: string, variantName?: string) => void;
  updateQuantity: (productId: string, variantName: string | undefined, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (newItem) =>
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (cartItem) =>
              cartItem.item.id === newItem.item.id &&
              cartItem.item.selectedVariant?.name === newItem.item.selectedVariant?.name
          );

          if (existingItemIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += newItem.quantity;
            return { items: updatedItems };
          }

          return { items: [...state.items, newItem] };
        }),
      removeItem: (productId, variantName) =>
        set((state) => ({
          items: state.items.filter(
            (cartItem) =>
              !(
                cartItem.item.id === productId &&
                cartItem.item.selectedVariant?.name === variantName
              )
          ),
        })),
      updateQuantity: (productId, variantName, quantity) =>
        set((state) => ({
          items: state.items.map((cartItem) =>
            cartItem.item.id === productId &&
            cartItem.item.selectedVariant?.name === variantName
              ? { ...cartItem, quantity }
              : cartItem
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "shopping-cart-storage",
    }
  )
);
