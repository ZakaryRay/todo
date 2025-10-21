import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../Components/HomeButton";

const Add = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="p-10 bg-gradient-to-b from-[#D9D9D9] to-[#ADADAD]">
            <HomeButton />
            <form className=" p-10 mx-auto flex flex-col max-w-[800px] min-w-[300px] ">
                <div className="flex flex-col mt-10">
                    <label htmlFor="nameOfTask" className="m-auto thin text-4xl mb-4     ">
                        Title
                    </label>
                    <input
                        className="bg-gray-100 rounded-xl outline-0 p-4 inset-shadow-sm placeholder:text-center placeholder:text-2xl text-2xl"
                        type="text"
                        placeholder="Enter the title of the task"
                    />
                </div>
                <div className="flex flex-col mt-30">
                    <label htmlFor="descOfTask" className="m-auto thin text-4xl my-4">
                        Description
                    </label>

                    <textarea
                        className="bg-gray-100 h-[200px] rounded-xl outline-0 p-4 text-2xl inset-shadow-sm placeholder:text-center placeholder:text-2xl "
                        name="desc"
                        id="desc"
                        placeholder="Describe your task"></textarea>
                </div>
                <button
                    onClick={handleSubmit}
                    className="px-8 py-2 shadow-lg text-2xl mt-30 w-fit self-center bg-gradient-to-r rounded-xl  from-[#FFCC00] to-[#E29715] active:scale-95 text-white thin">
                    Add task
                </button>
            </form>
        </div>
    );
};

export default Add;
