import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookCartApi, IBookDetailsApi, ICarts } from "../../types";

const initialState: ICarts = {
 cart: [],
 total: 0,
 isLoading: true,
};

const cardsReducer = createSlice({
 name: "cart",
 initialState,
 reducers: {
  addCart: (state, { payload }: PayloadAction<IBookCartApi>) => {
   state.cart = [
    { ...payload },
    ...state.cart.filter((item) => item.isbn13 !== payload.isbn13),
   ];
  },

  removeCart: (state, { payload }: PayloadAction<IBookDetailsApi>) => {
   state.cart = state.cart.filter((item) => item.isbn13 !== payload.isbn13);
  },

  increaseAmount: (state, { payload }: PayloadAction<IBookCartApi>) => {
   const cart = state.cart.find((item) => item.isbn13 === payload.isbn13);

   if (cart) {
    cart.amount = cart.amount + 1;
   }
  },

  decreaseAmount: (state, { payload }: PayloadAction<IBookCartApi>) => {
   const cart = state.cart.find((item) => item.isbn13 === payload.isbn13);

   if (cart) {
    cart.amount = cart.amount - 1;
   }
  },
 },
});

export default cardsReducer.reducer;

export const { addCart, removeCart, decreaseAmount, increaseAmount } =
 cardsReducer.actions;
