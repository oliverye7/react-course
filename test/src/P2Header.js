import React from "react";

function P2Header(props) {
    return (
        <div>
            <div className="mt-16 bg-blue-200 p-10 drop-shadow-lg">
                Current User: {props.name}
            </div>
        </div>
    );
}

export default P2Header;