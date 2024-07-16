import Link from 'next/link';


export default function WelcomeCard() {
  return (
    <div className="p-4 bg-white  border border-gray-200 rounded-lg shadow-sm mb-4">
      <h2 className="text-xl font-bold text-gray-900 mb-2">
        DEV Community is a community of 1,721,044 amazing developers
      </h2>
      <p className="text-gray-600 mb-4">
        We re a place where coders share, stay up-to-date and grow their careers.
      </p>
      <div className="space-y-2">
        <Link href="/create-account" className="block w-full text-center py-2 px-4 hover:bg-indigo-700 hover:text-white hover:underline text-indigo-700 border border-indigo-600 rounded-md transition duration-300">
            Create account
        </Link>
        <Link href="/login" className="block w-full text-center py-2 px-4 hover:underline hover:bg-indigo-100 text-gray-700 rounded-md transition duration-300">
            Log in
        </Link>
      </div>
    </div>
  );
};
