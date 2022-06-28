import Head from 'next/head';
import { useRouter } from 'next/router';
import { SVGProps, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function CrashPage() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <>
      <Head>
        <title>Not Found - Songhn Site</title>
      </Head>
      <Navbar />
      <main className="container flex flex-col items-center justify-center mx-auto">
        <NotFoundSvg className="w-full h-auto lg:w-1/2" />
        <h1 className="font-mono text-xl font-semibold lg:text-2xl">
          Ooops...
        </h1>
        <p className="mt-4 font-mono text-sm lg:text-xl">Something not work</p>
        <p className="font-mono text-sm lg:text-xl">
          will redirect to Home soon
        </p>
      </main>
    </>
  );
}

export const NotFoundSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200" {...props}>
      <path
        d="M799.74 308.73 413.61 595.22l286.48 386.13 386.13-286.48-286.48-386.14Z"
        fill="#3c2c5b"
        strokeWidth={4}
        stroke="#000"
      />
      <path
        d="m612.14 353.08 337.56 29.86c54.82 4.85 95.28 53.17 90.43 107.99l-29.86 337.56c-4.85 54.82-53.16 95.29-107.99 90.44l-337.55-29.86c-54.83-4.85-95.29-53.17-90.44-107.99l29.86-337.56c4.85-54.83 53.28-95.28 107.99-90.44Z"
        fill="#61ccff"
        strokeWidth={4}
        stroke="#000"
      />
      <path
        d="M1082.78 888.17c-46 43.79-136.99 133.07-255.13 151.3-118.14 18.23-145.78-39.28-95.7-82.36 53.05-45.6 192.88-65.21 279.82-51.19 86.93 14.03 119.06 45.21 110.07 74.84-11.73 38.88-119.22 109.76-250.85 76.53-131.62-33.22 4.84-174.3 66.73-202.67 57.22-26.2 95.3-15.87 92.23 25.35-3.4 46.73-70.9 183.27-222.12 228.33M1201.69 528.74c-99.22-20.42-227.77-73.43-268.48-210.69-40.71-137.25 53.13-178.17 135.75-46.88s119.59 314.72 78.9 328.01c-40.69 13.29-151.84-148.61-100.57-249.32 51.28-100.71 231.74-59.08 200.02 77.9-19.85 85.54-163.73 104.72-315.17-2.49-151.43-107.22 61.57-256.01 171.07-167.81 109.5 88.2 59.43 287.7-56.59 299.09-104.18 10.44-142.59-156.55-44.43-235.71"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <g
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M676.89 655.61H564.65l86.66-104.53v183.07M944.99 655.61H832.55l86.87-104.53v183.07M746.09 551.08h19.89c21.31 0 38.56 17.26 38.56 38.57v104.11c0 21.31-17.25 38.56-38.56 38.56h-19.89c-21.31 0-38.56-17.25-38.56-38.56V589.65c0-21.31 17.25-38.57 38.56-38.57Z" />
      </g>
      <path
        d="m541.37 192.27 64.65 21.45-63.1 12.78 5.36 50.74-34.55-42.07-40.93 36.6 22.78-55.78-61.35-5.99 61.25-14.74-24.85-48.16 46.92 34.34 30.52-47.02-6.7 57.85ZM1209.92 964.38c30.63 0 55.46-24.83 55.46-55.46 0-30.64-24.83-55.47-55.46-55.47-30.64 0-55.47 24.83-55.47 55.47 0 30.63 24.83 55.46 55.47 55.46Z"
        fill="#ed7ec4"
        strokeWidth={4}
        stroke="#000"
      />
      <path
        d="M389.15 956.91c17.64 12.58 42.13 8.48 54.71-9.15 12.58-17.64 8.48-42.13-9.15-54.71-17.64-12.58-42.13-8.48-54.71 9.16-12.58 17.63-8.48 42.12 9.15 54.7Z"
        fill="#ffc930"
        strokeWidth={4}
        stroke="#000"
      />
      <path
        d="M356.53 565.82c-12.55 0-22.71 10.17-22.71 22.71 0 12.54 10.16 22.71 22.71 22.71 12.54 0 22.7-10.17 22.7-22.71 0-12.54-10.16-22.71-22.7-22.71Z"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
