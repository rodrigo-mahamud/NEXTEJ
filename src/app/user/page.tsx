import connectDB from "@/lib/mongodb";
import { User } from "@/models/User";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IUser } from "@/types/types";

export const dynamic = "force-dynamic"; // Force SSR

async function getUsers() {
   await connectDB();
   const users = await User.find({});
   return JSON.parse(JSON.stringify(users));
}

export default async function UserList() {
   const users = await getUsers();

   return (
      <div className='container mx-auto p-6'>
         <h1 className='text-3xl font-bold mb-6'>Users (SSR Example)</h1>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {users.map((user: IUser) => (
               <Card key={user._id}>
                  <CardHeader>
                     <CardTitle>{user.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className='text-gray-600'>{user.bio}</p>
                     <Link href={`/user/${user._id}`} className='text-blue-500 hover:underline'>
                        View Profile
                     </Link>
                  </CardContent>
               </Card>
            ))}
         </div>
      </div>
   );
}
