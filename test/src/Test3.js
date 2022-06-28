import React from "react";
import Form from "./Form";

function Test3(props) {

    return (
        <div className="text-3xl ml-16">
            <div>
                You are on page 3.
            </div>
            <div className="mb-6">
                <a href="/">
                    <button className="bg-slate-300 rounded-lg p-5 hover:bg-slate-200">
                        Click me to go to page 1 (more random test stuff, just a cleaner page)
                    </button>
                </a>
            </div>
            <a href="/page2">
                <button className="bg-slate-300 rounded-lg p-5 hover:bg-slate-200">
                    Click me to go to page 2 (more random test stuff, just a cleaner page)
                </button>
            </a>
            <div className="mt-10">
                <Form/>
            </div>
        </div>
    );
}

export default Test3;