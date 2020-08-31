import React from "react";
import { Remarkable } from "remarkable";

const Profile = ({ profile }) => {
  const md = new Remarkable();

  return (
    <div className="profile">
      <img
        className="profile__image"
        src={"/img/" + profile.image.relativePath}
        alt={profile.name}
      />
      <div className="profile__container">
        <div
          dangerouslySetInnerHTML={{
            __html: md.render(profile.body),
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
