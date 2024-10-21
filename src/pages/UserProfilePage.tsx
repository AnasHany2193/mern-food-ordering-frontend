import { useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

/**
 * User Profile Page
 * @description User Profile Page Component that displays the user profile form and updates the user profile
 */
const UserProfilePage = () => {
  const { updateUser, isLoading } = useUpdateMyUser();

  return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
};

export default UserProfilePage;
