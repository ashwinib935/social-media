import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import React from "react";
import { useNavigate } from "react-router";
function FollowListModal({ followModal, setFollowModal }) {
  const navigate = useNavigate();
  return (
    <div className="bg-darkSecondary text-sm border border-darkGrey p-4 w-80 rounded overflow-y-auto mx-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl">{followModal.title}</div>
        <button
          className="hover:bg-dark h-min hover:rounded-full px-1 py-0.5"
          onClick={() => setFollowModal(false)}
        >
          <CloseOutlinedIcon />
        </button>
      </div>

      <div className="flex flex-col justify-center gap-4">
        {followModal.list.length ? (
          followModal.list.map((item) => (
            <div
              key={item._id}
              className="flex gap-2 cursor-pointer"
              onClick={() => {
                navigate(`/profile/${item.username}`);
                setFollowModal(false);
              }}
            >
              <div>
                <span className="user-avatar cursor-pointer select-none">
                  <img
                    src={item.profileAvatar}
                    alt={item.username}
                    className="h-8 w-8 rounded-full"
                  />
                </span>
              </div>

              <div className="flex flex-col -mt-0.5">
                <span>{item.fullName}</span>

                <span className="text-sm text-lightGrey -mt-1">
                  @{item.username}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div>Oops! No {followModal.title} found</div>
        )}
      </div>
    </div>
  );
}

export default FollowListModal;
