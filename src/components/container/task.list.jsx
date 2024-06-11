// import { useEffect, useState } from "react";
// import { LEVELS, DAYS } from "../../models/levels.enum";
// import { Task } from "../../models/task.class";
// import TaskComponent from "../pure/task";

// const TaskListComponent = () => {
//     const defaultTask = new Task(
//         [
//             "Ayrton",
//             "Bici vairo 26 roja",
//             "Revisar ambas ruedas",
//             false,
//             LEVELS.normal,
//             DAYS.lunes,
//             "12:30",
//         ],
//         [
//             "Tato",
//             "Bici vairo 26 negra",
//             "Revisar cambios y frenos",
//             false,
//             LEVELS.conApuro,
//             DAYS.martes,
//             "10:45",
//         ]
//     );

//     //Estado del componente
//     const [tasks, setTasks] = useState([defaultTask]);
//     const [loading, setLoading] = useState(true);

//     //Control del ciclo de vida del componente
//     useEffect(() => {
//         console.log("Modificacion de tarea");
//         setLoading(false);
//         return () => {
//             console.log("Desaparecio la tarea");
//         };
//     }, [tasks]);

//     return (
//         <div>
//             <div
//                 style={{
//                     background: "skyblue",
//                     padding: "1rem 2rem",
//                     borderRadius: "1rem",
//                 }}
//             >
//                 <h3>Trabajos:</h3>
//                 <TaskComponent task={defaultTask}></TaskComponent>
//             </div>
//             {/* APlicar un For/Map para renderizar una lista de trabajos */}
//         </div>
//     );
// };

// export default TaskListComponent;

import { useEffect, useState } from "react";
import { LEVELS, DAYS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import { TaskForm } from "../pure/forms/taskForm";

const TaskListComponent = () => {
    const defaultTasks = [
        new Task(
            "Ayrton",
            "Bici vairo 26 roja",
            "Revisar ambas ruedas",
            false,
            LEVELS.normal,
            DAYS.lunes,
            "12:30"
        ),
        new Task(
            "Tato",
            "Bici vairo 26 negra",
            "Revisar cambios y frenos",
            false,
            LEVELS.conApuro,
            DAYS.martes,
            "10:45"
        ),
        new Task(
            "Sandra",
            "Bici Volta 29 blanca",
            "Direccion",
            true,
            LEVELS.normal,
            DAYS.miercoles,
            "11:00"
        ),
        new Task(
            "Luis",
            "Bici colner 29 negra",
            "Caja",
            false,
            LEVELS.conApuro,
            DAYS.jueves,
            "10:45"
        ),
        new Task(
            "Nicolas",
            "Bici 16 rosa",
            "Revisar ambas ruedas, cambiar direccion, ver la caja, sacar rueditas, limpiar cadena",
            false,
            LEVELS.bajo,
            DAYS.viernes,
            "12:30"
        ),
        new Task(
            "Trinidad",
            "Rueda de moto",
            "Pinchadura",
            false,
            LEVELS.urgente,
            DAYS.sabado,
            "10:45"
        ),
    ];

    //Estado del componente
    const [tasks, setTasks] = useState(defaultTasks);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log("Modificacion de tarea");
        setLoading(false);
        return () => {
            console.log("Desaparecio la tarea");
        };
    }, [tasks]);

    return (
        <div
            style={{
                background: "#0579B6",
                padding: "1rem 3rem",
                borderRadius: "2rem",
                color: "white",
                fontSize: "2rem",
            }}
        >
            <h3>TRABAJO:</h3>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1rem",
                }}
            >
                {tasks.map((task, index) => (
                    <TaskComponent key={index} task={task} />
                ))}
            </div>
            <TaskForm />
        </div>
    );
};

export default TaskListComponent;
