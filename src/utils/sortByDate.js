export const sortByDate = (posts, activeSort) => {
  if (activeSort === "latest") {
    return [...posts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }
  if (activeSort === "trending") {
    return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
  }
};
