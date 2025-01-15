import React from "react";
import EditUserInfo from "./components/edit-user-info/EditUserInfo";
import UserContentTabs from "./components/user-content-tabs/UserContentTabs";
const Profile = () => {
  return (
    <div>
      <EditUserInfo />
      <UserContentTabs />
    </div>
  );
};

export default Profile;
