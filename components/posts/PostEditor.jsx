
export default function PostEditor({ title, setTitle, content, setContent }) {

    const handleTitle = (e) => {
      setTitle(e.target.value);
    };

    const handleContent = (e) => {
      setContent(e.target.value)
    }

    return (
      <>
        <div className="mb-8">
          <input
            type="text"
            placeholder="New post title here..."
            value={title}
            onChange={handleTitle}
            className="w-full text-5xl font-bold border-none focus:ring-0 bg-transparent placeholder-gray-400"
          />
        </div>
        <div className="mb-8">
          <textarea
            placeholder="Write your post content here..."
            value={content}
            onChange={handleContent}
            className="w-full h-64 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </>
    );
  }