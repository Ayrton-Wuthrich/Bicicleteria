import "./App.css";
import { Father } from "./components/container/father";
import TaskListComponent from "./components/container/task.list";
import { Ejemplo } from "./hooks/ejemplo";
import { Ejemplo2 } from "./hooks/ejemplo2";
import MiComponenteConContexto from "./hooks/ejemplo3";
import { Ejemplo4 } from "./hooks/ejemplo4";

function App() {
    return (
        <div>
            {/* <TaskListComponent /> */}
            {/* <Ejemplo /> */}
            {/* <Ejemplo2 /> */}
            {/* <MiComponenteConContexto /> */}
            {/* <Ejemplo4 nombre="Ayrton Wuthrich">
                { /* Todo lo que hay aqui, es tratado como props.children }
                <h3>Contenido del props.children</h3>
            </Ejemplo4> */}
            <Father />
        </div>
    );
}

export default App;
