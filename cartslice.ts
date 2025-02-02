import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; type: "increment" | "decrement" }>
    ) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        if (action.payload.type === "increment") {
          item.quantity += 1;
        } else if (action.payload.type === "decrement" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    },
  },
});

export const { add, remove, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
