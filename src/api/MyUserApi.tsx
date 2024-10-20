import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type createUserRequest = {
  auth0Id: string;
  email: string;
};

/**
 * Creates a new user in the database.
 * @description This is a mutation that creates a new user in the database. It takes in a user object and sends a POST request to the API.
 */
export const useCreateMyUser = () => {
  const createMyUserRequest = async (user: createUserRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Error creating user");
    }
    if (response.ok) {
      console.log("User created");
    }
  };

  const {
    isError,
    isLoading,
    isSuccess,
    mutateAsync: createUser,
  } = useMutation(createMyUserRequest);

  return {
    isError,
    isLoading,
    isSuccess,
    createUser,
  };
};
