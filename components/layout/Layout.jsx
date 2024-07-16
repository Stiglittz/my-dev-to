import NavBar from './NavBar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import PostList from '../PostList';
/* import { mockPosts } from '@/data/mockPosts'; */
import PostFilter from '../PostFilter';
/* import PostsCreated from './posts/PostsCreated' */

export default function Layout({ children, posts }) {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(630px,_1fr)_330px]  gap-4 pt-4">
          <aside className="hidden lg:block">
            <LeftSidebar />
          </aside>
          <main className="min-w-0">
            <PostFilter />
            <PostList posts={posts} />
          </main>
          <aside className="hidden lg:block">
            <RightSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};
