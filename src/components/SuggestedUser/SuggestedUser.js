import React from "react";
import { useNavigate } from "react-router";
import { useUsers } from "../../context/UsersProvider";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./SuggestedUser.css";
function SuggestedUser() {
  const userProfile = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("encodedToken");
  const { allUser, followUser } = useUsers();
  const navigate = useNavigate();
  const userData = allUser?.find(
    (dbUser) => dbUser.username === userProfile.username
  );

  const filteredUser = allUser
    ?.filter((dbUser) => dbUser.username !== userData?.username)
    ?.filter(
      (eachUser) =>
        !userData?.following.find((item) => item.username === eachUser.username)
    );

  return (
    <>
      {filteredUser.length > 0 ? (
        <div className="flex flex-col justify-center gap-4 m-2.5 mt-0 px-4 py-3  rounded-md h-max w-full sticky top-[85px] suggested-container">
          <div className="text-lg font-bold tracking-wide">Suggested Users</div>
          {filteredUser.map((user, index) => (
            <div
              className="flex items-start gap-2 cursor-pointer"
              key={user._id}
              onClick={() => {
                navigate(`/profile/${user.username}`);
              }}
            >
              <UserAvatar user={user} />
              <div className="flex flex-col grow -mt-0.5">
                <span className="text-sm">{user.fullName}</span>
                <span className="text-sm text-lightGrey -mt-1">
                  {user.username}
                </span>
              </div>
              <button
                className="text-sm py-1 px-4 rounded-full btn-follow"
                fdprocessedid="xtv2yh"
                onClick={(e) => {
                  e.stopPropagation();
                  followUser(user._id, token);
                }}
              >
                Follow
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default SuggestedUser;
