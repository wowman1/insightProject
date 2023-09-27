import React, { useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // 실제로는 서버에 사용자 인증을 요청하고, 인증이 성공하면 setLoggedIn(true)를 호출해야 합니다.
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
    }
  };

  return (
    <Container>
      {loggedIn ? (
        <Container>
          <h1>Welcome, {username}!</h1>
          <Button onClick={() => setLoggedIn(false)}>Logout</Button>
        </Container>
      ) : (
        <Container>
          <h1>과제98_베트남어 말뭉치 데이터</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
        </Container>
      )}
    </Container>
  );
}


export default Login;