"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { revalidate } from "@/actions/revalidate";

interface RevalidateButtonProps {
   path: string;
   label?: string;
}

export function RevalidateButton({ path, label = "Revalidate" }: RevalidateButtonProps) {
   const [isLoading, setIsLoading] = useState(false);
   const { toast } = useToast();

   async function handleRevalidate() {
      setIsLoading(true);
      try {
         const result = await revalidate(path);

         toast({
            title: result.success ? "Success" : "Error",
            description: result.message,
            variant: result.success ? "default" : "destructive",
         });
      } catch (error) {
         toast({
            title: "Error",
            description: `Something went wrong while revalidating ${path} error:${error}`,
            variant: "destructive",
         });
      } finally {
         setIsLoading(false);
      }
   }

   return (
      <Button onClick={handleRevalidate} disabled={isLoading} variant='default'>
         {isLoading ? <>Revalidating...</> : label}
      </Button>
   );
}
