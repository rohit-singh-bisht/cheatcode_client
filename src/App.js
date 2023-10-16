import "./App.css";
import { useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:9000/signup", {
      method: "POST",
      body: JSON.stringify(userDetails),
    })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="App">
      <h2>Sign up</h2>
      <form>
        <div className="form__group">
          <p>Email</p>
          <input
            type="email"
            value={userDetails?.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form__group">
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={userDetails?.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form__group">
          <button onClick={handleClick}>REGISTER</button>
        </div>
      </form>
    </div>
  );
}

export default App;
