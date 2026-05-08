import { apiClient } from "@/lib/apiClient";
import { User } from "../types";

export type LoginPayload = {
    email:string;
    password:string;
}

export type RegisterPayload = {
    name:string;
    email:string;
    password:string;
}

export type AuthResponse = {
    user: User;
    token?:string;
}

export async function login(payload:LoginPayload){
    return apiClient<AuthResponse>("/login", {
        method: "POST",
        body: JSON.stringify(payload)
    })
}

export async function register(payload:RegisterPayload){
    return apiClient<AuthResponse>("/register", {
        method: "POST",
        body: JSON.stringify(payload)
    })
}

export async function getMe() {
  return apiClient<User>("/me");
}

export async function logout() {
  return apiClient("/logout", {
    method: "POST",
  });
}