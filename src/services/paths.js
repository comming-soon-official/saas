import { getCurrentUser } from "./auth.service";
const CurrentUserID = getCurrentUser()?.id;

export const home = `/`;
export const dashboard = `/${CurrentUserID}/dashboard`;
export const login = `/login`;
export const signup = `/signup`;
export const tags = `/${CurrentUserID}/tags`;
export const report = `/report${CurrentUserID}`;
