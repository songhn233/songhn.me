/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

// extrends for dark mode global function
interface Window {
  __theme: string;
  __setTheme: (theme: string) => void;
}