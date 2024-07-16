import Link from 'next/link';

export default function DiscussCard() {

  const discussions = [
    { title: 'Remote vs Office vs Hybrid? 📍', comments: 5 },
    { title: 'Portfolio or no portfolio? 🗂️', comments: 9 },
    { title: 'If Programming Languages Were People: The Office Edition', comments: 3 },
    { title: 'What do you think of the look and feel?', comments: 2 },
    { title: 'The Evolution of Drilling Rigs: Innovations and Contributions by Unidrill', isNew: true }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-4">
      <h2 className="text-xl font-bold text-gray-600 pl-4 pt-4">#discuss</h2>
      <p className="pl-4 pb-4 text-xs text-gray-600 border-b border-gray-200">
        Discussion threads targeting the whole community
      </p>
      {discussions.map((discussion, index) => (
        <Link href="#" key={index} className="block p-4 border-b border-gray-200 last:border-b-0">
            <h3 className="font-medium text-gray-700 hover:text-blue-800">{discussion.title}</h3>
            <div className="flex items-center mt-1">
              {discussion.comments && (
                <span className="text-sm text-gray-500">{discussion.comments} comments</span>
              )}
              {discussion.isNew && (
                <span className="ml-2 px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                  New
                </span>
              )}
            </div>
        </Link>
      ))}
    </div>
  );
};
