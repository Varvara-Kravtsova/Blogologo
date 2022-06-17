import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookCartApi, IBookDetailsApi, ICarts } from "../../types";

const initialState: ICarts = {
 cards: [],
 total: 0,
 isLoading: true,
};

const cardsReducer = createSlice({
 name: "cart",
 initialState,
 reducers: {
  addCart: (state, { payload }: PayloadAction<IBookCartApi>) => {
   state.cards = [
    { ...payload },
    ...state.cards.filter((item) => item.isbn13 !== payload.isbn13),
   ];
  },

  removeCart: (state, { payload }: PayloadAction<IBookDetailsApi>) => {
   state.cards = state.cards.filter((item) => item.isbn13 !== payload.isbn13);
  },

  increaseAmount: (state, { payload }: PayloadAction<IBookCartApi>) => {
   const cards = state.cards.find((item) => item.isbn13 === payload.isbn13);

   if (cards) {
    cards.amount = cards.amount + 1;
   }
  },

  decreaseAmount: (state, { payload }: PayloadAction<IBookCartApi>) => {
   const cards = state.cards.find((item) => item.isbn13 === payload.isbn13);

   if (cards) {
    cards.amount = cards.amount - 1;
   }
  },
 },
});

export default cardsReducer.reducer;

export const { addCart, removeCart, decreaseAmount, increaseAmount } =
 cardsReducer.actions;
