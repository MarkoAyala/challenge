import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  text: 'hola',
}

export const fetchText = createAsyncThunk(
    "text/GetText",
    async (date) => {
      try{
        const response = (await axios(`/iecho?text=${date}`)).data;
        return response;
      }catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log('Unexpected error', err);
        }
      }
    }
  );

export const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(fetchText.fulfilled, (state, action) => {
        state.text = action.payload;
      });
    },
  });

// Action creators are generated for each case reducer function

export default textSlice.reducer