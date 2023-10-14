import { configureStore } from '@reduxjs/toolkit';
import setting from './components/reducers/settingReducer';

export default configureStore({
  reducer: {
    setting,
  },
});
