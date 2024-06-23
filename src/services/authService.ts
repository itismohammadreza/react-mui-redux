import { dispatch, getState } from "@redux/store/rootStore";
import { redirect } from "react-router-dom";
import { updateUser } from "@redux/slices/userSlice.ts";

const hasPermission = (input: string[] | string) => {
  if (!input || !input.length) {
    return true
  }
  const userPermissions = getState().user.permissions;
  if (Array.isArray(input)) {
    return userPermissions?.some(p => input.includes(p))
  }
  return userPermissions?.includes(input)
}

const logout = (returnPath?: string) => {
  let destination = "/auth/login";
  localStorage.removeItem('token');
  dispatch(updateUser(null));
  if (returnPath) {
    const params = new URLSearchParams();
    params.set("return", returnPath);
    destination = `${destination}?${params.toString()}`;
  }
  return redirect(destination);
}

const hasToken = () => {
  return !!localStorage.getItem('token');
}

export const authService = {
  hasPermission,
  logout,
  hasToken
}
