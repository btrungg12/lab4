import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const PostDetail = () => {
  const { postId } = useParams(); 
  
  const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  if (loading) return <div>Loading details...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/dashboard">Back to Dashboard</Link>
      <hr />
      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <small>Post ID: {postId}</small>
        </article>
      )}
    </div>
  );
};

export default PostDetail;