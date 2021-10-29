import TR from ".";
export function getArticle(title: string) {
  return TR.post({
    url: "/posts/1",
    data: {
      title,
    },
  });
}

interface allPosts {
  articleInfoLists: [];
}
export function getAllPosts() {
  return TR.get<allPosts>({
    url: "/posts",
  });
}
