import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const isLoading = false;
  const onSave = () => {};

  return <UserProfileForm onSave={onSave} isLoading={isLoading} />;
};

export default UserProfilePage;
