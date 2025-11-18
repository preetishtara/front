import React from "react";
import { useAuth } from "../authHelper";

const LoginButton = () => {
  const { login, accounts } = useAuth();

  return accounts && accounts.length > 0 ? (
    <div className="mb-6 text-green-400 font-semibold">
      Signed in as {accounts[0].username}
    </div>
  ) : (
    <button
      onClick={login}
      className="mb-8 px-8 py-3 rounded-full bg-black border-2 border-purple-400 text-white font-semibold text-lg shadow-md hover:bg-purple-700 hover:border-white transition"
    >
      Login to Microsoft
    </button>
  );
};

export default LoginButton;
