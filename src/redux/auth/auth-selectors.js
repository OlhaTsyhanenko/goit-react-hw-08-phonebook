const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getEmail = state => state.auth.user.email;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getEmail,
};

export default authSelectors;