export const likedByLoggedInUser = (post, user) => {
  return post?.likes.likedBy.find(
    (likeUser) => likeUser.username === user.username
  );
};
