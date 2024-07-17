
export default function CoverImageUploader({ imageUrl, setImageUrl }) {

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);
  };
  

  return (
    <div className="mb-8">
      <label className="block text-sm font-medium text-gray-700">
        Cover image URL
      </label>
      <div className="mt-1">
        <input
          type="text"
          value={imageUrl}
          onChange={handleImageUrlChange}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="https://example.com/image.jpg"
        />
      </div>
    </div>
  );
}