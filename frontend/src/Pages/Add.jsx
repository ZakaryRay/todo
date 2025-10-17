import React from "react";

const Add = () => {
    return (
        <div className="p-10">
            <form className="bg-blue-500 p-10 mx-auto w-200">
                <div className="flex flex-col">
                    <label htmlFor="nameOfTask">What you need to do?</label>
                    <input className="bg-blue-600 rounded-xl outline-0 p-1" type="text" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="descOfTask">Add details</label>

                    <textarea
                        className="bg-blue-600 rounded-xl outline-0 p-1"
                        name="desc"
                        id="desc"
                        placeholder="150 character max."></textarea>
                </div>
            </form>
        </div>
    );
};

export default Add;
