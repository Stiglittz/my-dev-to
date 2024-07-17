/* import Image from 'next/image';
import Link from 'next/link';

export default function MainPost({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
      <div className="relative h-64 w-full">
        <Image
          src={post.coverImage}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Link href={'#'}>
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
          <div className="ml-3">
            <a href="#"><p className="font-medium text-gray-700 p-1 hover:bg-gray-100 hover:text-gray-900 rounded-md">{post.author.name}</p></a>
            <p className="text-xs pl-1 text-gray-500">{post.publishDate}</p>
          </div>
        </div>
        <Link href={`/post/${post.id}`} className="block">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600">
              {post.title}
            </h2>
        </Link>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-gray-500 hover:text-blue-600">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              {post.reactions}
            </span>
            <span className="flex items-center text-gray-500 hover:text-blue-600">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
              </svg>
              {post.comments}
            </span>
          </div>
          <div className="flex items-center">
            <span className="ml-2 text-xs text-gray-500 mr-5">{post.readTime} min read</span>
            <button className="flex items-center text-gray-500 hover:text-gray-700 p-2 hover:bg-indigo-50 rounded-md">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}; */


import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';


export default function MainPost({ post }) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    if (userInfo) {
      const { firstName } = JSON.parse(userInfo);
      setUserName(firstName);
    }
  }, []);

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
      {post.image && (
        <div className="relative h-64 w-full">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Link href={`/user/${post.user?.firstName}`}>
            <Image
              src={post.image || '/default-avatar.png'}
              alt={post.title}
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
          <div className="ml-3">
            <Link href={`/user/${post.user?.firstName}`}>
              <p className="font-medium text-gray-700 p-1 hover:bg-gray-100 hover:text-gray-900 rounded-md">
                {post.user?.firstName || 'Unknown User'}
              </p>
            </Link>
            <p className="text-xs pl-1 text-gray-500">
              {new Date(post.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
        <Link href={`/post/${post._id}`} className="block">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">{post.body.substring(0, 150)}...</p>
       {/*  <div className="mt-4">
          {post.tags && post.tags.map(tag => (
            <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div> */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-gray-700 hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              96 Reactions
            </span>
            <span className="flex items-center text-gray-700 hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
              </svg>
              11 Comments
            </span>
          </div>
          <div className="flex items-center">
            <span className="ml-2 text-xs text-gray-500 mr-5">{post.readTime} min read</span>
            <button className="flex items-center text-gray-500 hover:text-gray-700 p-2 hover:bg-indigo-50 rounded-md">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        </div>
        {/*<div className="flex items-center">
            <span className="ml-2 text-xs text-gray-500 mr-5">
              {new Date(post.updated_at).toLocaleDateString()}
            </span>
          </div> */}
      </div>
    </article>
  );
}