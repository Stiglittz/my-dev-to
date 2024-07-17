const popularTags = [
    'webdev', 'javascript', 'beginners', 'programming', 'tutorial',
    'react', 'python', 'devops', 'ai', 'productivity',
    'aws', 'opensource', 'node', 'learning', 'typescript',
    'css', 'java', 'news', 'career', 'linux',
    'html', 'database', 'machinelearning', 'security', 'discuss',
    'api', 'testing', 'frontend', 'php', 'design'
  ];
  
  export default function TagSelector({ selectedTags, onTagChange }) {
    return (
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select up to 4 tags
        </label>
        <div className="flex flex-wrap gap-2">
          {popularTags.map(tag => (
            <button
              key={tag}
              type="button"
              onClick={() => onTagChange(tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                selectedTags.includes(tag)
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    );
  }