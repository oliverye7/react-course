function Test() {
    const firstName= "Joe";
    const lastName= "Schmoe";
    const date = new Date();
    const hours = date.getHours() % 12

    return (
        <div className="text-3xl">
            <div>
                Hello {firstName + " " + lastName}!
            </div>

            <div>
                It is currently about {hours} o clock
            </div>
        </div>
    );
}

export default Test;