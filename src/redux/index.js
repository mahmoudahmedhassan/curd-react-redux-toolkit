import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import axios from 'axios';
const URL = 'http://localhost:4000/posts';
 
// fetching

export const fetchPosts = createAsyncThunk('post/fetchPosts',
  // async (_, thunkAPI) => {
  //   // const { rejectWithValue } = thunkAPI;

  //   // try {
  //   //   const res = await fetch(URL);
  //   //   const data = await res.json();
  //   //   return data

  //   // } catch (err) {
  //   //   return rejectWithValue(err.message)
  //   // }
  // }
 
  //===== anther answer ====

  axios.get(URL).then((response) => {
     return response
   }).catch((error) => {
    return(error.message)
   })
    
)

//  insert Post

export const insertPost = createAsyncThunk("post/insertPost",

  async (insertData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(insertData),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      })
      const data = await res.json();
      return data

    } catch (err) {
      return rejectWithValue(err.message)
    }
  }

  // axios.post(URL,insertData).then((response) => {
  //   return response
  // }).catch((error) => {
  //  return(error.message)
  // })


)

//  delele Post

export const deletePost =createAsyncThunk('post/deletePost',
  async (id,thunkAPI)=>{
 
    const { rejectWithValue } = thunkAPI;

    try {
        await fetch(`http://localhost:4000/posts/${id}`,{
        method: 'DELETE',
        headers: {'Content-type': 'application/json; charset=UTF-8' }
      })
       return id

    } catch (err) {
      return rejectWithValue(err.message)
    }
  })

  //  edit Post

export const editPost =createAsyncThunk('post/editPost',
async (editdata,thunkAPI)=>{
  const { rejectWithValue } = thunkAPI;
  console.log("editdata : "+editdata);
 
  try {
 
     const res =await fetch(`http://localhost:4000/posts/${editdata.id}`,{
      method: 'PUT',
      body: JSON.stringify(editdata),

      headers: {'Content-type': 'application/json; charset=UTF-8' }
    })
    const data = await res.json();
    return data

  } catch (err) {
    return rejectWithValue(err.message);
  }
})
 
 const initialState = {
  posts:localStorage.getItem('updatapost')?
  JSON.parse(localStorage.getItem('updatapost')):
   [],
  loading: false,
  error: false,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: {

    //***************** fetch *****************

    [fetchPosts.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //***************** inser *****************

    [insertPost.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [insertPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
      state.loading = false;
      toast.info("You Added A New Post",{
        position:'bottom-left'
      })

    },
    [insertPost.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // ***************** delete *****************
    
    [deletePost.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts=state.posts.filter(post => post.id !== action.payload)
      state.loading = false;
      toast.error("You Deleted A Post",{
        position:'bottom-left'
      })
     },
    [deletePost.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    
    // ***************** edit *****************
    
    [editPost.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },

    [editPost.fulfilled]: (state, action) => {
      state.posts.forEach((post) =>{
        if(post.id === action.payload.id){
          post.title = action.payload.editTitle;
          post.description =action.payload.editDescription;
          toast.success("You UpDate Your Post 👌",{
            position:'bottom-left'
          })
      }})
      
       localStorage.setItem("updatapost", JSON.stringify(state.posts));

       state.loading = false;
    },
    [editPost.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
})

export default postSlice.reducer