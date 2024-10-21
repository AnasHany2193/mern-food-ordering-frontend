import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type createUserRequest = {
  auth0Id: string;
  email: string;
};

type updateUserRequest = {
  name: string;
  city: string;
  country: string;
  addressLine1: string;
};

/**
 * Creates a new user in the database.
 * @description This function is used to create a new user in the database. It takes in a user object and sends a POST request to the API.
 */
export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async (user: createUserRequest) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) throw new Error("Error creating user");
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

/**
 * Updates a user in the database.
 * @description This function is used to update a user in the database. It takes in a user object and sends a PUT request to the API.
 */
export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyUserRequest = async (updateUser: updateUserRequest) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    });

    if (!response.ok) throw new Error("Error updating user");
  };

  const {
    error,
    reset,
    isError,
    isLoading,
    isSuccess,
    mutateAsync: updateUser,
  } = useMutation(updateMyUserRequest);

  return { error, reset, isError, isLoading, isSuccess, updateUser };
};
