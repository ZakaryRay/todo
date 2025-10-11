import React from "react";
import TodoTask from "../Components/TodoTask";

const Acceuil = () => {
    return (
        <div className="p-10 ">
            <button className="py-2 px-5 bg-amber-500 text-xl rounded-xl transition active:scale-95  inset-shadow-amber-700 inset-shadow-sm active:duration-150 shadow-2xl">
                Add +
            </button>
            <TodoTask />
        </div>
    );
};

export default Acceuil;
