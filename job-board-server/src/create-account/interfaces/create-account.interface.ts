import { string } from "joi";

export interface CreateAccountInterface {
    username : string;
    password: string;
    confirmPassword : string;
}