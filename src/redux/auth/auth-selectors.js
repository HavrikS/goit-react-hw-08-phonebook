const getIsLoggedIn = state => state.auth.isLogin;

const getUser = state => state.auth.user;

const getEmail = state => state.auth.user.email;



const authSelectors = {
    getIsLoggedIn,
    getUser,
    getEmail,
};

export default authSelectors;