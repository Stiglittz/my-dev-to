import Link from 'next/link';

export default function PostFilter() {
  return (
    <div className="mb-2">
      <nav className="flex">
        <Link href="#" className=" text-black hover:bg-white  hover:text-indigo-600 rounded-md p-3 font-bold text-lg">
          Relevant
        </Link>
        <Link href="#" className=" text-gray-500 hover:text-indigo-60 hover:bg-white rounded-md p-3 font-medium text-lg">
          Latest
        </Link>
        <Link href="#" className=" text-gray-500 hover:text-indigo-600 hover:bg-white rounded-md p-3 font-medium text-lg">
          Top
        </Link>
      </nav>
    </div>
  );
}