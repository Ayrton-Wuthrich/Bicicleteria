import PropTypes from "prop-types";
import { useRef } from "react";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

export const TaskForm = ({ add }) => {
    const nameRef = useRef(""); // CLIENTE
    const descriptionRef = useRef(""); // DESCRIPCION DE LA BICI
    const jobRef = useRef(""); // TRABAJO A REALIZAR
    const levelRef = useRef(LEVELS.normal); // NIVEL DE ESPERA
    const dayRef = useRef(""); // DIA DE FINALIZACION
    const hourRef = useRef(""); // HORA DE FINALIZACION

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            jobRef.current.value,
            false,
            levelRef.current.value,
            dayRef.current.value,
            hourRef.current.value
        );
        add(newTask);
    }

    return (
        <form
            onSubmit={addTask}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <input
                    ref={nameRef}
                    id="inputName"
                    type="text"
                    required
                    autoFocus
                    placeholder="Nombre del CLIENTE"
                />
                <input
                    ref={descriptionRef}
                    id="inputDescription"
                    type="text"
                    required
                    placeholder="Descripcion de la bici"
                />
                <input
                    ref={jobRef}
                    id="inputJob"
                    type="text"
                    required
                    placeholder="Trabajo a realizar"
                />
                <label htmlFor="selectLevel">Prioridad</label>
                <select
                    ref={levelRef}
                    defaultValue={LEVELS.normal}
                    id="selectLevel"
                >
                    <option value={LEVELS.normal}>Normal</option>
                    <option value={LEVELS.bajo}>Bajo</option>
                    <option value={LEVELS.conApuro}>Con apuro</option>
                    <option value={LEVELS.urgente}>Urgente</option>
                </select>
                <input
                    ref={dayRef}
                    id="inputDay"
                    type="dateTime"
                    required
                    placeholder="Dia de retiro"
                />
                <input
                    ref={hourRef}
                    id="inputHour"
                    type="text"
                    required
                    placeholder="Hora de retiro"
                />
            </div>
            <button type="submit" style={{ marginTop: "1rem" }}>
                Agregar trabajo
            </button>
        </form>
    );
};

TaskForm.prototype = {
    add: PropTypes.func.isRequired,
};
