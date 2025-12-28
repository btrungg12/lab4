import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Dashboard = () => {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <h3>Recent Posts</h3>
      <ul>
        {posts && posts.slice(0, 10).map(post => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <Link to={`/dashboard/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;