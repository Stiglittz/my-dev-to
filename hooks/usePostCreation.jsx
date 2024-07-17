import { useState } from 'react';
import { useRouter } from 'next/router';



export default function usePostCreation() {
  const [imageUrl, setImageUrl] = useState('')
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();


  const handleTagChange = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter(t => t !== tag));
    } else if (tags.length < 4) {
      setTags([...tags, tag]);
    }
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login')
        throw new Error('No authentication token found');
      }

      const userId = getUserIdFromToken(token);
      if (!userId) {
        throw new Error('Invalid token or user ID not found in token');
      }
      
      
      const postData = {
        title,
        body: content,
        image: imageUrl,
        userId,
        /* tags: tags, */
      };
      console.log('Sending data:', postData);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }, 
        body: JSON.stringify(postData)
      });

      const result = await response.json();
      console.log('Received response:', result);

      if (!result.success) {
        throw new Error(result.error || 'Failed to create post');
      }


    router.push('/?newPost=true')
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  function getUserIdFromToken(token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.id;
      /* const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded.id; */
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  return {
    title,
    setTitle,
    content,
    setContent,
    tags,
    handleTagChange,
    imageUrl,
    setImageUrl,
    isSubmitting,
    setIsSubmitting,
    handlePublish,
  };
}