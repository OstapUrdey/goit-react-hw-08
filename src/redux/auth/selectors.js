const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export default selectIsLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectIsLoading = (state) => state.auth.isLoading;