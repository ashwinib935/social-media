import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useUsers } from "../../context/UsersProvider";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./SearchedUserModal.css";
function SearchedUserModal({ searchValue }) {
  const { allUser } = useUsers();
  const navigate = useNavigate();
  const serchUser = allUser.filter((user) =>
    user.username.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="searchUserModal-container flex flex-col gap-4 w-full p-4 z-40 rounded-md border border-darkGrey sticky top-0 -mt-1.2">
      {serchUser.length > 0 ? (
        serchUser.map((user) => (
          <div
            key={user._id}
            className="flex items-start gap-2 cursor-pointer"
            onClick={() => {
              navigate(`/profile/${user.username}`);
            }}
          >
            <div>
              <UserAvatar user={user} />
            </div>

            <div className="flex flex-col grow -mt-0.5">
              <span className="text-sm">{user.fullName}</span>
              <span className="text-sm text-lightGrey -mt-1">
                @{user.username}
              </span>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>No user found</p>
        </div>
      )}
    </div>
  );
}

export default SearchedUserModal;
