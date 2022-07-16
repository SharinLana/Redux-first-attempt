import { createSlice } from '@reduxjs/toolkit';

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: {
    selectedCategory: 'SEAFOOD',
  },
    reducers: {
      filterCategory: (state, action) => {
        state.selectedCategory = action.payload;
      }
    },
  })

  export const getSelectedCategory = state => state.dishes.selectedCategory; //dishes was taken from name: 'dishes'
  export const { filterCategory } = dishesSlice.actions;
  
  export default dishesSlice.reducer;
  