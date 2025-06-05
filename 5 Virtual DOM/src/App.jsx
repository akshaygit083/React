import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Alice");

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => setName("Bob")}>Change Name</button>

      <p>
        Initial
        Render:.................................................................... <br />
        React creates a Virtual DOM with:
        <h2>Hello, Alice!</h2>
        It renders this to the real DOM. After
        Click:....................................................................... <br />
        When you click the button, name changes to "Bob". React creates a new
        Virtual DOM:
        <h2>Hello, Bob!</h2>
        It compares the old Virtual DOM with the new one using a process called
        diffing. <br /> React sees that only the text inside the.{" "}
        <h2> tag changed.</h2>
        It updates only that part in the real DOM — efficient and fast!
      </p>
    </div>
  );
}

export function Greet() {
  return (
    <h1
      style={{
        backgroundColor: "lime",
        padding: "20px",
        marginTop: "30px",
        width: "20%",
        textAlign: "center",
      }}
    >
      Hey... Buddy!
    </h1>
  );
}

export default App;
