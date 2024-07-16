import Image from "next/image";

export default function DevCommunityCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-4">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <span className="font-bold text-gray-900">DEV Community</span>
            <button className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-md p-2 ">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM18 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </button>
        </div>
    <div className="relative w-full h-48">
        <Image
          src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
          alt="DEV Community survey"
          layout="fill"
          objectFit="cover"
        />
    </div>
    <div className="p-4">
      <p className="text-gray-800 font-semibold">
        <a href="#" className="text-indigo-700 underline hover:text-indigo-900">Fill out this survey</a> and help us moderate our community by becoming a tag moderator here at DEV.
      </p>
    </div>
  </div>
  );
};
