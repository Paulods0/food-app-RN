import { createSelector, createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      const newBasket = [...state.items]
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.log(
          `Can't remove product ${action.payload.id} as it's not in the basket`
        )
      }
      state.items = newBasket
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items

export const selectBasaketItemById = (state, id) =>
  state.basket.items.filter((item) => item.id == id)

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0)

export const items = (state) => state.basket.items

export const memoizedSelectBasketTotal = createSelector([items], (items) => {
  items.reduce((total, item) => (total += item.price), 0) // Função de transformação
})

export default basketSlice.reducer
