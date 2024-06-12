import "./App.css";

import TaskListComponent from "./components/container/task.list";

import Logo from "./assets/LogoBici.png";

function App() {
    return (
        <div style={{ display: "flex" }}>
            {/* <img
                src={Logo}
                alt="Logo Bicicleteria Wal-Mar"
                style={{
                    marginRight: "1rem",
                    borderRadius: "2rem",
                }}
            /> */}
            <TaskListComponent />
        </div>
    );
}

export default App;
