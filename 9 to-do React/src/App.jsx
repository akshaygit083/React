import { useEffect } from "react";
import { useState } from "react";

function App() {
  // const [title, setTitle] = useState('') .......or line 7
  // const [des, setDes] = useState('') ..........or line 7
  const [allTodo, setAllTodo] = useState([]);
  const [singleTodo, setSingleTodo] = useState({ title: "", des: "" });

  function handleBtn() {
    if (!singleTodo.title || !singleTodo.des) {
      return;
    }
    // setAllTodo((prevValue) => [...prevValue, singleTodo]); ....or line 11
    setAllTodo([...allTodo, singleTodo]); // Print tosdo in page
    saveTodoLocalStorage([...allTodo, singleTodo]); // save todo to local storage
    setSingleTodo({ title: "", des: "" }); // Clear input fields
  }

  function deleteTodo(i) {
    const updatedTodos = allTodo.filter((_, index) => index !== i);
    setAllTodo(updatedTodos);
    saveTodoLocalStorage(updatedTodos);
  }

  function saveTodoLocalStorage(data) {
    localStorage.setItem("todos", JSON.stringify(data));
  }

  function getTodoFromLocalStorage() {
    let data = JSON.parse(localStorage.getItem("todos")) || [];
    setAllTodo(data);
  }

  useEffect(() => {
    getTodoFromLocalStorage();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-cyan-300 flex-col gap-8">
      <div className="flex flex-col gap-8 shadow-2xl w-[30rem] rounded-xl p-4 bg-cyan-400 items-center">
      <h1 className="text-3xl font-bold ">To Do App</h1>
        <div>
          <input className="w-[27rem] font-medium text-lg p-2 rounded-xl outline-none"
            type="text"
            placeholder="Title..."
            value={singleTodo.title}
            onChange={(e) =>
              setSingleTodo((prevValue) => ({
                ...prevValue,
                title: e.target.value,
              }))
            }
          />
          <br />
          <br />
          <input className="w-[27rem] font-medium text-lg p-2 rounded-xl outline-none"
            type="text"
            placeholder="Description"
            value={singleTodo.des}
            onChange={(e) =>
              setSingleTodo((prevValue) => ({
                ...prevValue,
                des: e.target.value,
              }))
            }
          />
          <br />
          <br />
          <button onClick={handleBtn} className="bg-cyan-600 hover:bg-cyan-700 text-white text-base font-medium py-1 px-3 rounded-2xl shadow-xl">Add ToDo</button>
        </div>

        <div className="w-[30rem]">
          {allTodo.map((data, i) => (
            <div key={i} className="bg-sky-300 py-2 px-4 flex justify-between mt-3 shadow-2xl">
              <div className="flex gap-4"><p>{i + 1}</p>
              <h1>{data.title}</h1>
              <h2>{data.des}</h2></div>
              <div><button onClick={() => deleteTodo(i)} className="bg-sky-600 text-white px-3 py-1 rounded-2xl hover:bg-sky-700 shadow-xl">Delete</button></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
