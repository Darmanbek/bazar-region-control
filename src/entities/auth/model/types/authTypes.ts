export interface ILoginForm {
    email: string;
    password: string;
}

export interface IUserForm {
    name: string;
    email: string;
    password: string;
}

export interface IUserResponse {
    id: number;
    name: string;
    email: string;
}

export interface LoginResponse {
    user: IUserResponse;
    access_token: string;
    token_type: string;
}
