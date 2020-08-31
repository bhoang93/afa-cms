import React from "react";

const Profile = ({ profile }) => {
  return (
    <div className="profile">
      <img className="profile__image" src={profile.image} alt={profile.name} />
      <div className="profile__container">
        <div
          dangerouslySetInnerHTML={{
            __html: profile.body,
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
