"use client";

import { useEffect, useState } from "react";
import { IUser } from "@/types/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function UserProfile({ params }: { params: { id: string } }) {
   const [user, setUser] = useState<IUser | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch(`/api/user/${params.id}`)
         .then((res) => res.json())
         .then((data: IUser) => {
            setUser(data);
            setLoading(false);
         });
   }, [params.id]);

   if (loading) {
      return <div>Loading...</div>;
   }

   return (
      <div className='container mx-auto p-6'>
         {user && (
            <Card>
               <CardHeader>
                  <CardTitle>{user.name}</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className='space-y-4'>
                     <p>
                        <strong>Email:</strong> {user.email}
                     </p>
                     <p>
                        <strong>Role:</strong> {user.role}
                     </p>
                     <p>
                        <strong>Bio:</strong> {user.bio}
                     </p>
                     <p>
                        <strong>Last Login:</strong> {new Date(user.lastLogin).toLocaleString()}
                     </p>
                  </div>
               </CardContent>
            </Card>
         )}
      </div>
   );
}
