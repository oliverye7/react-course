import React from "react";

function Form() {
    const [firstName, setFirstName] = React.useState("");

    function handleChange(e) {
        //console.log(e);
        console.log(e.target.value);
        //console.log(e.nativeEvent.data);
    }
    return (
        <div>
            <div>
                <input 
                    onChange={handleChange}
                    className="placeholder:italic placeholder:text-slate-400 placeholder:text-base placeholder:mt-3
                                  block bg-white w-1/3 border border-gray-400
                                  rounded-md py-3 pl-5 pr-3 shadow-base h-12
                                  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="First Name" type="text" name="search"/>
                <input className="placeholder:italic placeholder:text-slate-400 placeholder:text-base
                                  block bg-white w-1/3 border border-gray-400
                                  rounded-md py-3 pl-5 pr-3 shadow-sm 
                                  mt-5
                                  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Last Name" type="text" name="search"/>

            </div>
        </div>
    );
}

export default Form;