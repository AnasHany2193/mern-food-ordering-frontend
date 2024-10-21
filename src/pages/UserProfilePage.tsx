import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";

import Loader from "@/components/Loader";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

/**
 * User Profile Page
 * @description User Profile Page Component that displays the user profile form and updates the user profile
 */
const UserProfilePage = () => {
  const { currentUser, isLoading: isGettingUser } = useGetMyUser();
  const { updateUser, isLoading: isUpdatingUser } = useUpdateMyUser();

  if (isGettingUser) return <Loader />;

  return <UserProfileForm onSave={updateUser} isLoading={isUpdatingUser} />;
};

export default UserProfilePage;
