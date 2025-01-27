declare global {
   // eslint-disable-next-line no-var
   var mongoose:
      | {
           promise: Promise<typeof mongoose> | null;
           conn: typeof mongoose | null;
        }
      | undefined;
}
