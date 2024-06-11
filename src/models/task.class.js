import { LEVELS, DAYS } from "./levels.enum";

export class Task {
    name = " ";
    /* Nombre del dueño de la bicicleta */
    description = "";
    /* Descripcion de la bicicleta que entro para reparar, MARCA, COLOR, RODADO, DETALLES SI TIENE */
    job = "";
    /* Descripcion del trabajo a realizar */
    completed = false;
    /* Si esta false no se termino el arreglo, si es true ya esta lista */
    level = LEVELS.normal;
    /* Diferentes niveles que requiere el trabajo, ejemplo: "Urgente", "Con apuro", "Normal", "Bajo" */
    dayFinish = DAYS.lunes;
    /* Si se le dijo para que dia esta lista */
    hourFinish = "Hora del dia";
    /* Hora del dia que se le dijo para retirar */

    constructor(
        name,
        description,
        job,
        completed,
        level,
        dayFinish,
        hourFinish
    ) {
        this.name = name;
        this.description = description;
        this.job = job;
        this.completed = completed;
        this.level = level;
        this.dayFinish = dayFinish;
        this.hourFinish = hourFinish;
    }
}
