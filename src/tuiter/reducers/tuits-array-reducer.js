import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits-array.json';

import {createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";

const initialState = {
   tuits: [],
   loading: false
}

const currentUser = {
    "userName": "NASA",
    "handle": "nasa",
    "avatarIcon": "nasa_logo.png",
   };
   
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "3h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsArraySlice = createSlice(
{
    name: 'tuits',
    initialState,
    extraReducers: {
      [findTuitsThunk.pending]:
         (state) => {
            state.loading = true
            state.tuits = []
      },

      [findTuitsThunk.fulfilled]:
         (state, { payload }) => {
            state.loading = false
            state.tuits = payload
      },

      [findTuitsThunk.rejected]:
         (state) => {
            state.loading = false
      },

      [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.tuits = state.tuits
        .filter(t => t._id !== payload)
      },

      [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push(payload)
      },


    },
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuits =>
                    tuits._id === action.payload);
            state.splice(index, 1);
        },

        createTuit(state, action) {
            state.unshift({
            ...action.payload,
            ...templateTuit,
            _id: (new Date()).getTime(),
            })
        },

        likeTuit(state, action) {
        const tuitIndex = state.findIndex((tuits) => tuits._id === action.payload._id)
        state[tuitIndex].liked = true;
        state[tuitIndex].likes = parseInt(state[tuitIndex].likes) + 1;
        },

        unlikeTuit(state, action) {
        const tuitIndex = state.findIndex((tuits) => tuits._id === action.payload._id)
        state[tuitIndex].liked = false;
        state[tuitIndex].likes = parseInt(state[tuitIndex].likes) - 1;
        },
        
     }});
     
export const {createTuit, deleteTuit, likeTuit, unlikeTuit} = tuitsArraySlice.actions;

export default tuitsArraySlice.reducer;

