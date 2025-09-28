/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_API_URL: string;
  // add any other VITE_* vars here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
