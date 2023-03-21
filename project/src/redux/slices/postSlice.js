import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function () {
        const response = await fetch('https://63c9087e320a0c4c953f1dfd.mockapi.io/users')

        const data = await response.json()

        return data
    }
)


const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        readPostsCount: [],
        status: null,
        error: null,
    },
    reducers: {
        readPost(state,action){

           const findItem = state.readPostsCount.find(obj => obj.id == action.payload.id)

            if(findItem){
                console.log('Уже прочитано')
            } else {
                action.payload.read = true
                console.log(action.payload)
                state.readPostsCount.push(action.payload)
                console.log('Запушили:)')
            }
        },
        clearPosts(state){
            state.readPostsCount = []
            console.log('Очистили :)')
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {

        },
    },
})

export const {readPost, clearPosts} = postSlice.actions;


export default postSlice.reducer