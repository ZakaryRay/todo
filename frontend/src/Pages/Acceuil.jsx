import React from "react";
import TaskSection from "../Components/TaskSection";
import { Link } from "react-router-dom";

const Acceuil = () => {
    return (
        <div className="p-10  bg-gradient-to-b from-[#D9D9D9] to-[#ADADAD]">
            <TaskSection />
            <TaskSection />
        </div>
    );
};

export default Acceuil;
