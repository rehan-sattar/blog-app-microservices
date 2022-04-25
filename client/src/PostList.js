import { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:4000/posts');
    setPosts(response.data);
  };

  const renderedPost = Object.values(posts).map((post) => {
    return (
      <div className='card' style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
        <div className='card-body'>
          <h3>{post.title}</h3>
        </div>
      </div>
    );
  });

  return <div className='d-flex flex-row flex-wrap justify-content-between'>{renderedPost}</div>;
};

export default PostList;
