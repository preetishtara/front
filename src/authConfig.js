import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "b63cfd2d-2f0f-40bc-bb94-bf13e9b1aa01",
    authority: "https://login.microsoftonline.com/3e895492-ad9e-4572-802c-7d0702719e0a",
    redirectUri: "http://localhost:3000", // Your app URL
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);

export const loginRequest = {
  scopes: ["Files.ReadWrite.All"], // Permissions for Graph API
};
