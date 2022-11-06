import { createSlice } from "@reduxjs/toolkit";
import tuitsArray from '../tuits/tuits-array.json';


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
    name: 'tuitsArray',
    initialState: tuitsArray,
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
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
        const tuitIndex = state.findIndex((tuitsArray) => tuitsArray._id === action.payload._id)
        state[tuitIndex].liked = true;
        state[tuitIndex].likes = parseInt(state[tuitIndex].likes) + 1;
        },

        unlikeTuit(state, action) {
        const tuitIndex = state.findIndex((tuitsArray) => tuitsArray._id === action.payload._id)
        state[tuitIndex].liked = false;
        state[tuitIndex].likes = parseInt(state[tuitIndex].likes) - 1;
        },
        
     }});
     
export const {createTuit, deleteTuit, likeTuit, unlikeTuit} = tuitsArraySlice.actions;

export default tuitsArraySlice.reducer;

