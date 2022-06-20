import React from "react";

function Box(props) {
    /** 
     * 
     * THE CODE HERE IS AN EXAMPLE OF USING DERIVED STATE. GENERALLY, THIS IS BAD PRACTICE, SINCE IT RESULTS IN MULTIPLE SOURCES OF TRUTH
    const [status, setStatus] = React.useState(props.on);

    function toggle() {
        setStatus(status => status = !status)
    }
    */
    const styles = {
        backgroundColor: props.on ? props.color : "white"
    }

    return (
        <div style={styles} onClick={() => props.toggle(props.id)} className="w-24 h-24 rounded-md mt-5 border-black border-4">
        </div>
    );
}

export default Box;