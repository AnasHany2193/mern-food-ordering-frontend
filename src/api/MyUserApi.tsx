import { toast } from "sonner";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";

import { User } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Gets the user from the database.
 * @description This function is used to get the user from the database. It sends a GET request to the API.
 */
export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyUserRequest = async (): Promise<User> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) throw new Error("Error getting user");

    return response.json();
  };

  const { isLoading, data: currentUser } = useQuery(
    "fetchCurrentUser",
    getMyUserRequest,
    {
      onError: (error: Error) => {
        toast.error("Error getting user", {
          description: error.message,
        });
      },
    }
  );

  return { isLoading, currentUser };
};

/**
 * Creates a new user in the database.
 * @description This function is used to create a new user in the database. It takes in a user object and sends a POST request to the API.
 */

type createUserRequest = {
  auth0Id: string;
  email: string;
};

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

  const { isLoading, mutateAsync: createUser } =
    useMutation(createMyUserRequest);

  return {
    isLoading,
    createUser,
  };
};

/**
 * Updates a user in the database.
 * @description This function is used to update a user in the database. It takes in a user object and sends a PUT request to the API.
 */

type updateUserRequest = {
  name: string;
  city: string;
  country: string;
  addressLine1: string;
};

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

  const { isLoading, mutateAsync: updateUser } = useMutation(
    updateMyUserRequest,
    {
      onSuccess: () => {
        toast.success("User profile updated!");
      },
      onError: (error: Error) => {
        toast.error("Error updating user", {
          description: error.message,
        });
      },
    }
  );

  return { isLoading, updateUser };
};
