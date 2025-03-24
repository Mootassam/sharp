import React from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "src/modules/auth/authSelectors";
import { i18n } from "../../../i18n";

function Team() {
  const currentUser = useSelector(authSelectors.selectCurrentUser);

  return (
    <div>
      <SubHeader title={`${i18n("profile.profile")}`} path="/profile" />

      <div className="profile__section">
        <label htmlFor=""></label>
        <div className="group__profile">
          <label htmlFor="">{i18n("profile.fullname")}:</label>
          <span>{currentUser?.fullName}</span>
        </div>

        <div className="group__profile">
          <label htmlFor="">{i18n("profile.email")}:</label>
          <span>{currentUser?.email}</span>
        </div>

        <div className="group__profile">
          <label htmlFor="">{i18n("profile.phonenumber")}:</label>
          <span>{currentUser?.phoneNumber}</span>
        </div>
        {currentUser?.username && (
          <div className="group__profile">
            <label htmlFor="">{i18n("profile.country")} :</label>
            <span>{currentUser?.username}</span>
          </div>
        )}

        <div className="group__profile">
          <label htmlFor="">{i18n("profile.Invitationcode")} :</label>
          <span>{currentUser?.invitationcode}</span>
        </div>
      </div>
    </div>
  );
}

export default Team;
