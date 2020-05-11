const getToken = () => {
    if (localStorage.getItem('token')) {
        return localStorage.getItem('token');
    } else {
        return '';
    }
}

const AuthHelper = {
    isAuthenticated: () => {
        const token = getToken();
        if (token.length<1) return false;
        const expire = Number(localStorage.getItem('expire'));
        const expireDate = new Date(expire * 1000);
        return expireDate > new Date();
    },
    readToken: () => {
        getToken();
    },
    saveToken: (token, expiresIn) => {
        localStorage.setItem('token', token);
        localStorage.setItem('expire', expiresIn);
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('expire');
    }
}

export default AuthHelper;
