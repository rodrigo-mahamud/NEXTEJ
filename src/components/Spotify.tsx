import { getRandomTrack } from "@/actions/actions";
import { Track } from "@/types/types";

export default async function SpotifyDemo() {
   const track = (await getRandomTrack()) as Track;

   return (
      <div className='w-full'>
         <div className='space-y-4'>
            <img src={track.imageUrl} alt={`${track.name} cover`} className='w-full h-64 object-cover rounded-lg' />
            <div className='space-y-1'>
               <h3 className='text-xl font-semibold'>{track.name}</h3>
               <p className='text-muted-foreground'>{track.artist}</p>
               <p className='text-muted-foreground text-sm'>{track.album}</p>
               <p className='text-muted-foreground text-sm'>{track.duration}</p>
            </div>
         </div>
      </div>
   );
}
