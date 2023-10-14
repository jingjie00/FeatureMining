import { createSlice } from '@reduxjs/toolkit';

export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    loading: false,
    accountLoading: false,
    isMobile: false,
    alert: [],
    balance: 0,
    locale: 'en',
    selected: null,
    loginShow: false,
    registerShow: false,
    gameExternalURL: '',
    promoShow: false,
    mobileMenuSelected: null,
    forgotPasswordShow: false,
    activeProviderSelected: null,
  },
  reducers: {
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setAccountLoading: (state, action) => ({
      ...state,
      accountLoading: action.payload,
    }),
    setIsMobile: (state, action) => ({
      ...state,
      isMobile: action.payload,
    }),
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
    setBalance: (state, action) => ({
      ...state,
      balance: action.payload,
    }),
    setLocale: (state, action) => ({
      ...state,
      locale: action.payload,
    }),
    setSelected: (state, action) => ({
      ...state,
      selected: action.payload,
    }),
    setLoginShow: (state, action) => ({
      ...state,
      loginShow: action.payload,
    }),
    setRegisterShow: (state, action) => ({
      ...state,
      registerShow: action.payload,
    }),
    setGameExternalURL: (state, action) => ({
      ...state,
      gameExternalURL: action.payload,
    }),
    setPromoShow: (state, action) => ({
      ...state,
      promoShow: action.payload,
    }),
    setMobileMenuSelected: (state, action) => ({
      ...state,
      mobileMenuSelected: action.payload,
    }),
    setForgotPasswordShow: (state, action) => ({
      ...state,
      forgotPasswordShow: action.payload,
    }),
    setActiveProviderSelected: (state, action) => ({
      ...state,
      activeProviderSelected: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
const { reducer: setting, actions } = settingSlice;
export const SettingActions = actions;
export default setting;
