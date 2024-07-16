import Link from 'next/link';

export default function RecentlyQueried() {
  const queries = [
    "Table CSS", "Software Engineer", "Personal Website", "NodeJs", "MySQL", "Programming", 
    "Discord", "React", "Graph", "Method vs Function", "Paywall Bypass", "Anonymous Function", 
    "JavaScript", "Download", "Documentation", "Angular", "Hostlistener", "Vscode", "Vim", 
    "&Nbsp Meaning", "Atom Text Editor", "Slack Screen Sharing", "Git Delete Local Branch", 
    "Working from Home", "Haiku Checker", "JavaScript Playground", "Git Commit Message Template", 
    "React Native Build APK"
  ];

  return (
    <div className="mb-6">
      <h3 className="text-sm  font-semibold mb-3 pl-4">recently queried</h3>
      <ul className="space-y-2 pl-6 border-b border-gray-400">
        {queries.map((query, index) => (
            <li key={index} className='hover:bg-white p-3'>
                <Link href="#" key={index} className="text-gray-700 hover:text-blue-800 text-md">
                    {query}
                </Link>
            </li>
        ))}
      </ul>
    </div>
  );
};
