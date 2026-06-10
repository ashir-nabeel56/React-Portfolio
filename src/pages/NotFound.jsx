import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page" style={{ textAlign: 'center', padding: '120px 20px' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            border: 'none',
            padding: '12px 24px',
            borderRadius: '999px',
            background: '#0ea5e9',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Go Back
        </button>
        {/* <button
          onClick={() => navigate('/home')}
          style={{
            border: '1px solid #0ea5e9',
            padding: '12px 24px',
            borderRadius: '999px',
            background: 'transparent',
            color: '#0ea5e9',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Go Home
        </button> */}
      </div>
    </div>
  );
}

export default NotFound;
