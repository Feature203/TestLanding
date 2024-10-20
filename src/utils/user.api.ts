import http from "./http";

const registerUser = (data: any) => {
    return http.post("/register", data);
};

export { registerUser };
