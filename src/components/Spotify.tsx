import { getRandomTrack } from "@/actions/spotifyAction";
import { Track } from "@/types/types";
import Image from "next/image";

export default async function SpotifyDemo() {
   const track = (await getRandomTrack()) as Track;

   return (
      <div className='w-full'>
         <div className='space-y-4 relative'>
            <div className='aspect-square relative'>
               <Image
                  src={track.imageUrl}
                  alt={`${track.name} cover`}
                  fill
                  quality={35}
                  sizes='(max-width: 1200px) 55vw, 35vw'
                  className='w-full h-64 object-cover rounded-lg'
               />
            </div>

            <div className='space-y-1 '>
               <h3 className='text-xl font-semibold line-clamp-1'>{track.name}</h3>
               <p className='text-muted-foreground line-clamp-1'>{track.artist}</p>
               <p className='text-muted-foreground line-clamp-1 text-sm'>{track.album}</p>
               <p className='text-muted-foreground line-clamp-1 text-sm'>{track.duration}</p>
            </div>
         </div>
      </div>
   );
}
