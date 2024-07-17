import Layout from '@/components/layout/Layout'
import { useState, useEffect } from 'react';


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/posts`);
        const data = await response.json();
        if (data.success) {
          setPosts(data.data.posts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
    fetchPosts();
  }, []);
  return (
    <>
      <Layout posts={posts} />
    </>
  )
}