import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-[calc(100vh-6.5rem)] w-full place-items-center">
      <div className="flex flex-col items-center justify-center gap-6 rounded-lg p-8 shadow-2xl">
        <h1 className="text-2xl font-bold">404</h1>
        <p className="text-lg">This page could not be found.</p>
        <Link
          href="/"
          className="mt-4 inline-block rounded bg-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
