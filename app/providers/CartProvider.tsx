import { CartItem, PizzaSize, Product } from "@/constants/types";
import React, { createContext, useContext, useMemo, useState } from "react";

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product, size: PizzaSize) => void;
  increase: (itemId: string) => void;
  decrease: (itemId: string) => void;
  total: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: PizzaSize) => {
    setItems((current) => {
      const existing = current.find(
        (ci) => ci.product_id === product.id && ci.size === size
      );

      if (existing) {
        return current.map((ci) =>
          ci.id === existing.id
            ? { ...ci, quantity: ci.quantity + 1 }
            : ci
        );
      }

      const newItem: CartItem = {
        id: `${product.id}-${size}`,
        product,
        product_id: product.id,
        size,
        quantity: 1,
      };
      return [newItem, ...current];
    });
  };

  const increase = (itemId: string) => {
    setItems((current) =>
      current.map((ci) =>
        ci.id === itemId ? { ...ci, quantity: ci.quantity + 1 } : ci
      )
    );
  };

  const decrease = (itemId: string) => {
    setItems((current) =>
      current
        .map((ci) =>
          ci.id === itemId ? { ...ci, quantity: ci.quantity - 1 } : ci
        )
        .filter((ci) => ci.quantity > 0)
    );
  };

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [items]);

  const value = useMemo(
    () => ({ items, addItem, increase, decrease, total }),
    [items, total]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
};

export default CartProvider;