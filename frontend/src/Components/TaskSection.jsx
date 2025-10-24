import React from "react";
import TaskCard from "./TaskCard";
import Task from "./Task";

const TodoTask = () => {
    return (
        <div className="flex flex-col w-[60%] m-auto my-20">
            <h1 className="text-2xl">Todo</h1>
            <div className="bg-[#E5E5E5] shadow-xl shadow-[#949494] rounded min-h-80">
                <Task />
            </div>
        </div>
    );
};

export default TodoTask;
