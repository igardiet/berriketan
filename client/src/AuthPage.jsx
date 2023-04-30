import axios from 'axios';

export const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post('http://localhost:3027/authenticate', { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((err) => console.warn('error', err));
    props.onAuth({ username: value, secret: value });
  };
  return (
    <div className='background'>
      <form onSubmit={onSubmit} className='form-card'>
        <div className='form-title'>Welcome</div>
        <div className='form-subtitle'>Set username...</div>
        <div className='auth'>
          <div className='auth-label'>Username</div>
          <input className='auth-input' name='username' />
          <button className='auth-button' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
