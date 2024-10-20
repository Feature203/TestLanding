import axios, { AxiosInstance } from "axios";

class Http {
    private readonly instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:8081/api/auth",
            timeout: 5000,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    public getInstance() {
        return this.instance;
    }
}

const http = new Http().getInstance();

export default http;
