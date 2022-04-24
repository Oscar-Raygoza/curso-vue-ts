/// <reference types="vite/client" />

/*
  ### IntelliSense

  By default, Vite provides type definition for `import.meta.env`. 
  While you can define more custom env variables in `.env.[mode]` files, 
  you may want to get TypeScript IntelliSense for user-defined env variables 
  which prefixed with `VITE_`. <-- !Important!

  To achieve, you can create an `env.d.ts` in `src` directory, then augment `ImportMetaEnv` like this:

  interface ImportMetaEnv {
    VITE_APP_TITLE: string
    // more env variables... 
  }
*/
interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_BASE_BACKEND_URL?: string;
  // more env variables...
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
