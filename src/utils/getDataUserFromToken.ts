import jwt_decode from "jwt-decode";
const token: any = localStorage.getItem("blog-token");

//@ts-ignore
export const dataUser = token ? jwt_decode(token).sub : null;
