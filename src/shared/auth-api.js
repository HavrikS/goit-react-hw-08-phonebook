import axios from "axios";

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
});

const setToken = (token) => {
    if(token) {
        return instance.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.common.authorization = "";
}

export const signup = async user => {
    const { data } = await instance.post('users/signup', user);
    setToken(data.token);
    return data;
};

export const login = async user => {
    const { data } = await instance.post('users/login', user);
    setToken(data.token);
    return data;
};

export const logout = async () => {
    const { data } = await instance.post('users/logout');
    setToken();
    return data;
};

export const current = async token => {
    try {
        setToken(token);
        const { data } = await instance.get('users/current');
        return data;
    } catch (error) {
        setToken();
        throw error;
    }
};

export default instance;