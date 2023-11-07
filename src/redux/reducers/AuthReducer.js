import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../../api';

const INITIAL_STATE = {
  userData: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: '',
};

export const loginUser = createAsyncThunk(
  'loginUser',
  async ( paramData , thunkApi) => {
    try {
      const response = await api.post('/auth/login', paramData);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);
const AuthSlices = createSlice({
  name: 'Auth',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      (isLoading = false), (isSuccess = true);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.errorMessage = action.payload.message;
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default AuthSlices.reducer

