export interface IBlog {
   _id: string;
   title: string;
   slug: string;
   content: string;
   author: string;
   createdAt: Date;
   views: number;
}

export interface IUser {
   _id: string;
   name: string;
   email: string;
   bio: string;
   role: string;
   lastLogin: Date;
}
export interface BlogPostProps {
   params: Promise<{
      slug: string;
   }>;
}
export interface UserProfileProps {
   params: Promise<{
      id: string;
   }>;
}

// types/spotify.ts

export interface Track {
   name: string;
   artist: string;
   album: string;
   imageUrl: string;
   previewUrl: string | null;
   duration: string;
}

export type FetchStatus = "idle" | "loading" | "success" | "error";
