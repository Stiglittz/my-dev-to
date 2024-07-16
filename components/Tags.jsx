

const tags = [
    'webdev', 'javascript', 'beginners', 'programming', 'tutorial',
    'react', 'python', 'devops', 'ai', 'productivity',
    'aws', 'opensource', 'node', 'learning', 'typescript',
    'css', 'java', 'news', 'career', 'linux',
    'html', 'database', 'machinelearning', 'security', 'discuss',
    'api', 'testing', 'frontend', 'php', 'design'
  ];

export default function Tags () {
    return (
        <div className="py-4 px-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-950">Popular Tags</h2>
            <div className="max-h-64 overflow-y-auto pr-2 space-y-2">
                {tags.map((tag) => (
                    <a 
                        key={tag} 
                        href={`/t/${tag}`}
                        className="block h-10 p-2 text-mdtext-gray-900 hover:bg-indigo-100 hover:text-indigo-700 hover:underline rounded-md"
                    >
                        #{tag}
                    </a>
                ))}
            </div>
        </div>
    )
}
