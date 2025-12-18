import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  // Link Render mới toanh của Trung
  const API = 'https://backend-v2-final.onrender.com/api/users';

  const load = () => fetch(API).then(res => res.json()).then(setUsers);
  useEffect(() => { load(); }, []);

  const add = (e) => {
    e.preventDefault();
    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: e.target.name.value, email: e.target.email.value })
    }).then(() => { load(); e.target.reset(); });
  };

  return (
    <div style={{ padding: '30px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Project 1 - Them Use</h1>
      <form onSubmit={add} style={{ marginBottom: '20px' }}>
        <input name="name" placeholder="Nhập tên..." required style={{ marginRight: '10px' }} />
        <input name="email" placeholder="Nhập email..." required style={{ marginRight: '10px' }} />
        <button type="submit" style={{ cursor: 'pointer' }}>Thêm Mới</button>
      </form>
      <table border="1" style={{ margin: '0 auto', width: '50%' }}>
        <thead><tr><th>Tên</th><th>Email</th></tr></thead>
        <tbody>
          {users.map(u => <tr key={u._id}><td>{u.name}</td><td>{u.email}</td></tr>)}
        </tbody>
      </table>
    </div>
    //kich no
  );
}
export default App;