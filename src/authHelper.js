import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

export function useAuth() {
  const { instance, accounts } = useMsal();

  const login = () => {
    if (accounts.length === 0) {
      instance.loginPopup(loginRequest).catch(console.error);
    }
  };

  const getToken = async () => {
    if (accounts.length === 0) return null;
    const response = await instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0],
    });
    return response.accessToken;
  };

  return { login, getToken, accounts };
}
