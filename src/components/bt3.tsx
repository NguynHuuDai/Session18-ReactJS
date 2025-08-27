import React, { useState, useCallback } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = useCallback(
    function (e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log({ email, password });
    },
    [email, password]
  );

  return (
    <form onSubmit={handleSubmit}>
      <h2>Đăng nhập</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>) {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <label>Mật khẩu:</label>
        <input
          type="password"
          value={password}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>) {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
