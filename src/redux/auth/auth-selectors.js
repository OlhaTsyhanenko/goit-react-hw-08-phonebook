const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getEmail = state => state.auth.user.email;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getEmail,
    getIsFetchingCurrentUser
};

export default authSelectors;