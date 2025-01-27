"use client";
export default function ViewCounter({ slug }: { slug: string }) {
   const updateViews = async () => {
      await fetch(`/api/blog/${slug}/views`, { method: "POST" });
   };

   return <button onClick={updateViews}>Increment Views</button>;
}
