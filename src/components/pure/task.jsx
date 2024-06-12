import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { useEffect, useState } from "react";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import { green, red } from "@mui/material/colors";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete }) => {
    const [completed, setCompleted] = useState(task.completed);

    useEffect(() => {
        console.log("Trabajo creado");
        return () => {
            console.log(`Trabajo: ${task.name} esta terminada`);
        };
    }, [task]);

    const handleToggleClick = () => {
        complete(task);
        setCompleted(!completed);
    };

    /**
     * Comprobar de que nivel es la entrega
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.normal:
                return (
                    <h6>
                        <span style={{ color: "" }}>{task.level}</span>
                    </h6>
                );
            case LEVELS.bajo:
                return (
                    <h6>
                        <span style={{ color: "" }}>{task.level}</span>
                    </h6>
                );
            case LEVELS.urgente:
                return (
                    <h6>
                        <span style={{ color: "red" }}>{task.level}</span>
                    </h6>
                );
            case LEVELS.conApuro:
                return (
                    <h6>
                        <span style={{ color: "yellow" }}>{task.level}</span>
                    </h6>
                );
            default:
                break;
        }
    }

    return (
        <div
            style={{
                background: "#262F93",
                border: "2px solid white",
                color: "white",
                fontSize: "1.2rem",
                padding: "1rem",
                borderRadius: "2rem",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                marginBottom: "1rem",
            }}
        >
            <p>
                <strong>Cliente: </strong> {task.name}
            </p>
            <p>
                <strong>Descripción:</strong> {task.description}
            </p>
            <p>
                <strong>Trabajo:</strong> {task.job}
            </p>
            <p
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "-2.5rem",
                }}
            >
                <strong>Nivel: </strong>
                <span style={{ marginLeft: "0.5rem", fontSize: "1.6rem" }}>
                    {taskLevelBadge()}
                </span>
            </p>
            <p>
                <strong>Día de entrega:</strong> {task.dayFinish}
            </p>
            <p>
                <strong>Hora de entrega:</strong> {task.hourFinish}
            </p>
            <p
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "-.7rem 0",
                }}
            >
                <strong>Entrega: </strong>
                {completed ? (
                    <ToggleOnIcon
                        sx={{
                            fontSize: "3.5rem",
                            color: green[500],
                            marginLeft: "1rem",
                        }}
                        onClick={handleToggleClick}
                    />
                ) : (
                    <ToggleOffIcon
                        sx={{
                            fontSize: "3.5rem",
                            color: red[500],
                            marginLeft: "1rem",
                        }}
                        onClick={handleToggleClick}
                    />
                )}
            </p>
        </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
};

export default TaskComponent;
