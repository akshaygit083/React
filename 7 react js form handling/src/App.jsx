import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function formSubmit(e) {
    e.preventDefault();
    console.log({ email: email, Password: password });
    setEmail("");
    setPassword("");
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="Email" onChange={handleEmail} />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        />
        <br />
        <br />
        <button onClick={formSubmit}>Log In</button>
      </form>
    </div>
  );

  // another example of form filling
  // const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');

  //   const handleSubmit = (e) => {
  //     e.preventDefault(); // prevent page reload
  //     console.log('Submitted:', { name, email });
  //     // Optionally reset form
  //     setName('');
  //     setEmail('');
  //   };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         Name:
  //         <input
  //           type="text"
  //           value={name}
  //           onChange={(e) => setName(e.target.value)}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Email:
  //         <input
  //           type="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //       </label>
  //       <br />
  //       <button type="submit">Submit</button>
  //     </form>
  //   );
}

export default App;
