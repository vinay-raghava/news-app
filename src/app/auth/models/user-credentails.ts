export interface UserCredentials extends LoginCredentials {
    email: string;
}

export interface LoginCredentials {
    password: string;
    username: string;
}
