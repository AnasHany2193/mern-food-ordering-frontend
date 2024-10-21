import { UserRoundX } from "lucide-react";

import Loader from "@/components/Loader";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";

/**
 * User Profile Page
 * @description User Profile Page Component that displays user profile information and allow users to update their profile
 */
const UserProfilePage = () => {
  const { currentUser, isLoading: isGettingUser } = useGetMyUser();
  const { updateUser, isLoading: isUpdatingUser } = useUpdateMyUser();

  if (isGettingUser) return <Loader />;

  if (!currentUser)
    return (
      <div className="flex justify-center gap-3">
        <UserRoundX color="red" />
        <span>Unable to load user profile</span>
      </div>
    );

  return (
    <UserProfileForm
      onSave={updateUser}
      currentUser={currentUser}
      isLoading={isUpdatingUser}
    />
  );
};

export default UserProfilePage;
