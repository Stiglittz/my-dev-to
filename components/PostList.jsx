import MainPost from './layout/MainPost';

export default function PostList({ posts }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {posts.map((post) => (
        <MainPost key={post.id} post={post} />
      ))}
    </div>
  );
};