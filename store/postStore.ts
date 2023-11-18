import { create } from "zustand";
import { Post } from "../types"



type PostStore = {
  posts: Post[];
  add: (post: Post) => void
}


export const usePostStore = create<PostStore>()((set) => ({
  posts: [],
  add: (post: Post) => set((state) => ({
    posts: [...state.posts, post],
  })),
}))

