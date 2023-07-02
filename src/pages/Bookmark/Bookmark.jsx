import React, { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import Postcard from "../../components/Postcard/Postcard";
import Searchbar from "../../components/Searchbar/Searchbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SuggestedUser from "../../components/SuggestedUser/SuggestedUser";
import { usePost } from "../../context/PostProvider";
import { useUsers } from "../../context/UsersProvider";

function Bookmark() {
  const { bookmark, getAllBookmarks, getAllUsers, isLoading } = useUsers();
  const { posts } = usePost();
  useEffect(() => {
    getAllBookmarks();
    getAllUsers();
  }, []);
  const bookmarkPosts = posts?.filter((post) =>
    bookmark?.find((bookmarkpost) => bookmarkpost === post._id)
  );
  return (
    <div className="home-container">
      <div className="section sidebar-left-container">
        <Sidebar />
      </div>
      <div className="section middle-container">
        <div className="heading">
          <h1>Bookmark</h1>
        </div>
        {isLoading ? (
          <Loader />
        ) : bookmarkPosts ? (
          bookmarkPosts.length ? (
            [...bookmarkPosts]
              .reverse()
              .map((post) => <Postcard key={post.id} post={post} />)
          ) : (
            <div className="p-4 text-center">
              <p>No Bookmark post</p>
            </div>
          )
        ) : null}
      </div>
      <div className="section sidebar-right-container">
        <div className="hidden xl:block">
          <Searchbar />
          <SuggestedUser />
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
