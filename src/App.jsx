import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./slices/counterSlice";
import { addName, deleteName, updateName } from "./slices/nameSlice";

function App() {
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
  const nameList = useSelector((state) => state.name.value);
  const dispatch = useDispatch();
  // console.log(editId+1);

  const handleAddName = () => {
    const value = name.trim();
    if (!value) {
      window.alert("please enter name");
      setName("");
      return;
    }

    const isChecked = nameList.find((d) => d == name);
    if (isChecked) {
      window.alert("name already exist");
    } else {
      console.log("clcik");
      console.log("name", name);
      dispatch(addName(name));
    }
    setName("");
  };

  const handleUpdate = () => {
    const updateValue = { id: editId, name: name };
    dispatch(updateName(updateValue));
    setName("");
    setEditId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteName(id));
  };

  const handleEdit = (id) => {
    const userData = nameList.find((d, i) => i == id);
    setEditId(id);
    setName(userData);
  };

  return (
    <>
      <section style={{ backgroundColor: "#ADD8E6" }}>
        <section
          className="layout"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "200px",
          }}
        >
          <div>
            <div className="search-input">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Enter the Name"
              />
              {editId !== null ? (
                <button onClick={handleUpdate}>Update</button>
              ) : (
                <button onClick={handleAddName}>add</button>
              )}
            </div>
          </div>

          <div style={{ marginTop: "10px" }}>
            {nameList?.length > 0 ? (
              nameList?.map((data, i) => {
                return (
                  <div
                    key={`${i}-${data}`}
                    className="name-tab"
                    style={{ display: "flex" }}
                  >
                    <div className="name-section">
                      <p>{data}</p>
                    </div>
                    <div className="btn">
                      <button
                        className="upt"
                        disabled={editId !== null ? true : false}
                        onClick={() => handleEdit(i)}
                      >
                        update
                      </button>
                      <button
                        className="del"
                        disabled={editId !== null ? true : false}
                        onClick={() => handleDelete(i)}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <div>
                  <p>No Name available</p>
                </div>
              </>
            )}
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
