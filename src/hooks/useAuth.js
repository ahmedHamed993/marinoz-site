import { useState, useEffect } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null; // Default value if localStorage is not available
  });

  const [id, setId] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("userId");
    }
    return null; // Default value if localStorage is not available
  });

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure the code runs only in a browser

    const updateAuth = () => {
      setToken(localStorage.getItem("token"));
      setId(localStorage.getItem("userId"));
    };

    // Listen for the storage event to detect changes in other tabs/windows
    window.addEventListener("storage", updateAuth);

    return () => {
      window.removeEventListener("storage", updateAuth);
    };
  }, []);

  return { token, id };
};
