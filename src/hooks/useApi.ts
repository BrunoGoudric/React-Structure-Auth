import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        //Exemplo de como pode ir o login
        return {
            user: { id: 3, name: "Bruno", email: "bruno@teste.com.br"},
        }
        const response = await api.post('/validate', {token});
        return response.data;
    },
    signIn: async (email: string, password: string) => {
        //Exemplo de como pode vir o resultado do Signin
        return {
            user: { id: 3, name: "Bruno", email: "bruno@teste.com.br"},
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiZDEzNGEyOGQtMGI4MS00ZWJkLTlkMWQtNzFmMTNkYzM3MDQwIiwibmFtZSI6IkJydW5vIiwibGFzdC1uYW1lIjoiU2lsdmEiLCJlbWFpbCI6ImJydW5vQHRlc3RlLmNvbS5iciJ9LCJpYXQiOjE3MDk1NzEwNTUsImV4cCI6MTcwOTU3MTM1NX0.aKMjifFOZuZSwBKZDSBVc9VoulVA8aVQxDpgRLx6jSc"
        }
        const response = await api.post('/signin', {email, password});
        return response.data;
    },
    logout: async () => {
        return { status: true }
        const response = await api.post('/logout');
        return response.data;
    }
})