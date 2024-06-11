import { useState } from "react";

export const RegisterForm = () => {
    const initialData = [
        {
            user: "",
            name: "",
            phone: "",
            password: "",
        },
    ];

    const [data, setData] = useState(initialData);

    return <div></div>;
};
