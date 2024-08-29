import { getApi } from "../services/getApi";

interface PostType {
  id: number;
  iserId: number;
  title: string;
  body: string;
}

interface InitialStateType {
  posts: PostType[];
}

export const selectPosts = getApi.endpoints.getPostsByName.select("posts");
export const selectUser = (name: string) =>
  getApi.endpoints.getUserByName.select(name);
