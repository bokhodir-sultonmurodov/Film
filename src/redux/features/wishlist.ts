import { createSlice } from '@reduxjs/toolkit'

interface WishlistItem {
  id: string | number
}
interface WishlistState {
  value: WishlistItem[]
}
const localStorageWishlist = localStorage.getItem("wishlist");
const initialState:WishlistState = {
  value: localStorageWishlist? JSON.parse(localStorageWishlist) : [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist:(state, action)=>{
      const index = state.value.findIndex(item => item.id === action.payload.id)
      if(index < 0){
        state.value.push(action.payload)
      }else{
        state.value = state.value.filter((item) => item.id !== action.payload.id)
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value))
    },
    removeWishlist: (state, action) => {
  state.value = state.value.filter(item => item.id !== action.payload.id);
  localStorage.setItem("wishlist", JSON.stringify(state.value));
}

  },
})

export const { toggleWishlist,removeWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer