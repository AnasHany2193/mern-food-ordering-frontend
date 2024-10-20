import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  return (
    <div className="p-4 m-4 rounded-lg bg-gray-50">
      <h2 className="text-2xl font-bold">User Profile</h2>
      <p className="py-1 text-sm text-gray-500">
        View and change your profile information here
      </p>
      <UserProfileForm />
    </div>
  );
};

export default UserProfilePage;
