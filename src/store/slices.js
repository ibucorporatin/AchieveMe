import {createSlice} from '@reduxjs/toolkit';

export const firstLaunchSlice = createSlice({
  name: 'firstLaunch',
  initialState: {
    isFirstLaunch: true,
  },
  reducers: {
    setNotFirstLaunch: (state) => {
      state.isFirstLaunch = false;
    },
  },
});

export const {setNotFirstLaunch} = firstLaunchSlice.actions;

export const getFirstLaunch=(state)=>state.firstLaunch.isFirstLaunch
