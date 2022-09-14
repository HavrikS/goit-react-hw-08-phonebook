const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

const getEmail = state => state.auth.user.email;

const getIsRefreshingUser = state => state.auth.isRefreshingUser;

const authSelectors = {
    getIsLoggedIn,
    getUser,
    getEmail,
    getIsRefreshingUser,
};

export default authSelectors;