import Head from 'next/head';
import Link from 'next/link';
import CoverImageUploader from '../components/posts/CoverImageUploader'
import TagsSelector from '../components/posts/TagsSelector'
import PostEditor from '../components/posts/PostEditor'
import PublishButton from '@/components/posts/PublishButton';
import usePostCreation from '@/hooks/usePostCreation';


export default function CreatePost() {
  
  const {
    title,
    setTitle,
    content,
    setContent,
    imageUrl,
    setImageUrl,
    tags,
    handleTagChange,
    isSubmitting,
    setIsSubmitting,
    handlePublish
  } = usePostCreation();

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Create Post - DEV Community</title>
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">DEV</span>
              <img className="h-8 w-auto" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="DEV" />
            </Link>
            <h1 className="ml-4 text-xl font-semibold text-gray-900">Create Post</h1>
          </div>
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <form onSubmit={handlePublish}>
          <CoverImageUploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
          <PostEditor title={title} setTitle={setTitle} content={content} setContent={setContent} />
{/*           <TagsSelector selectedTags={tags} onTagChange={handleTagChange} />
 */}        <div>
          <PublishButton isSubmitting={isSubmitting} handlePublish={handlePublish} />
          </div>
        </form>
      </main>
    </div>
  );
}