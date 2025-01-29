// src/app/user/[id]/page.tsx
import connectDB from "@/lib/mongodb";
import { User } from "@/models/User";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

import { notFound } from "next/navigation";
import { UserProfileProps } from "@/types/types";

async function getUser(id: string) {
   await connectDB();
   const user = await User.findById(id);

   if (!user) {
      notFound();
   }

   return JSON.parse(JSON.stringify(user));
}

export default async function UserProfile({ params }: UserProfileProps) {
   const { id } = await params;
   const user = await getUser(id);

   return (
      <div className='container mx-auto p-6'>
         <Card>
            <CardHeader>
               <CardTitle>{user.name}</CardTitle>
               <CardDescription>{id}</CardDescription>
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
      </div>
   );
}
