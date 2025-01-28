// app/actions/spotify.ts
"use server";

import { Track } from "@/types/types";
import { unstable_noStore as noStore } from "next/cache";
async function getAccessToken(): Promise<string> {
   const clientId = process.env.SPOTIFY_CLIENT_ID;
   const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
   const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

   if (!clientId || !clientSecret || !refreshToken) {
      throw new Error("Credenciales de Spotify faltantes");
   }

   try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
         method: "POST",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
         },
         body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refreshToken,
         }),
      });

      if (!response.ok) {
         throw new Error(`Error en la autenticación: ${response.status}`);
      }

      const data = await response.json();
      return data.access_token;
   } catch (error) {
      console.error("Error obteniendo access token:", error);
      throw new Error("Error en la autenticación con Spotify");
   }
}

export async function getRandomTrack(): Promise<Track> {
   noStore();
   try {
      const accessToken = await getAccessToken();
      const randomOffset = Math.floor(Math.random() * 50);

      const searchParams = new URLSearchParams({
         type: "track",
         q: "Daft Punk",
         offset: randomOffset.toString(),
         limit: "1",
         market: "ES",
      });

      const response = await fetch(`https://api.spotify.com/v1/search?${searchParams.toString()}`, {
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
         cache: "no-store",
      });

      if (!response.ok) {
         throw new Error(`Error en la búsqueda: ${response.status}`);
      }

      const data = await response.json();

      if (!data.tracks || !data.tracks.items || data.tracks.items.length === 0) {
         throw new Error("No se encontraron canciones");
      }

      const track = data.tracks.items[0];

      return {
         name: track.name,
         artist: track.artists[0].name,
         album: track.album.name,
         imageUrl: track.album.images[0].url,
         previewUrl: track.preview_url,
         duration: msToMinutesAndSeconds(track.duration_ms),
      };
   } catch (error) {
      console.error("Error obteniendo canción aleatoria:", error);
      throw new Error("Error al obtener una canción aleatoria");
   }
}

function msToMinutesAndSeconds(ms: number): string {
   const minutes = Math.floor(ms / 60000);
   const seconds = ((ms % 60000) / 1000).toFixed(0);
   return `${minutes}:${Number(seconds) < 10 ? "0" : ""}${seconds}`;
}
