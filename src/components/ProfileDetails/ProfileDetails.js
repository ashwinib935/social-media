import LanguageIcon from "@mui/icons-material/Language";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { usePost } from "../../context/PostProvider";
import { useUsers } from "../../context/UsersProvider";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import FollowListModal from "../FollowListModal/FollowListModal";
import Loader from "../Loader/Loader";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./ProfileDetails.css";
function ProfileDetails({ currentUser }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [editModal, setEditModal] = useState(false);
  const [followModal, setFollowModal] = useState({
    show: false,
    title: "",
    list: [],
  });

  const { isLoading } = usePost();

  const { allUser, followUser, unFollowUser } = useUsers();

  const { logoutHandler } = useAuth();
  const authUser = allUser.find((dbUser) => dbUser.username === user.username);
  const userAlreadyFollowing = currentUser.followers.find(
    (follower) => follower.username === authUser.username
  );

  return (
    <div className="profile-details p-4 grid sm:grid-cols-[7rem_1fr] gap-3 border-b border-darkGrey">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="profile-image p-2">
            <UserAvatar user={currentUser} />
          </div>
          <div className="flex flex-col grow gap-3">
            <div>
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col">
                  <span className="font-bold text-xl">
                    {currentUser?.fullName}
                  </span>
                  <span className="text-sm text-lightGrey">
                    @{currentUser?.username}
                  </span>
                </div>

                <div className="flex items-center flex-col sm:flex-row gap-2">
                  {currentUser.id === user.id ? (
                    <>
                      <button
                        className="border border-primary rounded-full text-sm py-1 px-4 w-max"
                        onClick={() => setEditModal(true)}
                      >
                        Edit profile
                      </button>
                      <button
                        title="Logout"
                        className="ml-auto"
                        onClick={logoutHandler}
                      >
                        <LogoutIcon className="text-green" />
                      </button>
                    </>
                  ) : (
                    <button
                      className={`py-1 px-4 rounded-full text-sm ${
                        userAlreadyFollowing ? "btn-unfollow" : "btn-follow"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        userAlreadyFollowing
                          ? unFollowUser(currentUser._id)
                          : followUser(currentUser._id);
                      }}
                    >
                      {userAlreadyFollowing ? "Unfollow" : "Follow"}
                    </button>
                  )}
                </div>
              </div>
            </div>
            {(currentUser.website || currentUser.bio) && (
              <div>
                {currentUser.bio && <p>{currentUser.bio}</p>}

                {currentUser.website && (
                  <a
                    href={currentUser.website}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-primary"
                  >
                    <LanguageIcon className="text-green mr-1" />
                    {currentUser.website.slice(8)}
                  </a>
                )}
              </div>
            )}
            <div className="flex gap-6">
              <div
                className="hover:underline cursor-pointer"
                onClick={() => {
                  setFollowModal(() => ({
                    show: true,
                    title: "Following",
                    list: currentUser.following,
                  }));
                }}
              >
                <span className="font-bold">
                  {currentUser.following.length}
                </span>{" "}
                <span className="text-grey">Following</span>
              </div>
              <div
                className="hover:underline cursor-pointer"
                onClick={() =>
                  setFollowModal(() => ({
                    show: true,
                    title: "Followers",
                    list: currentUser.followers,
                  }))
                }
              >
                <span className="font-bold">
                  {currentUser.followers.length}
                </span>{" "}
                <span className="text-grey">Followers</span>
              </div>
            </div>
            {editModal ? (
              <div className="bg-[#00000080] top-0 left-0 fixed w-full h-full z-40 flex justify-center items-center">
                <EditProfileModal setEditModal={setEditModal} />
              </div>
            ) : null}

            {followModal.show ? (
              <div className="bg-[#00000080] top-0 left-0 fixed w-full h-full z-40 flex justify-center items-center">
                <FollowListModal
                  followModal={followModal}
                  setFollowModal={setFollowModal}
                />
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileDetails;
