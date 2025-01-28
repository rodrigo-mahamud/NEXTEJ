"use server";

import { revalidatePath } from "next/cache";

export async function revalidate(path: string) {
   try {
      revalidatePath(path);
      return {
         success: true,
         message: `Route ${path} revalidated successfully`,
         revalidatedPath: path,
      };
   } catch (error) {
      console.error("Error revalidating:", error);
      return {
         success: false,
         message: `Failed to revalidate route ${path}`,
         revalidatedPath: path,
      };
   }
}
