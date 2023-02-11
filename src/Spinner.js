import React from "react";

const Spinner = () => {
    return (<>
        <div className="ui active dimmer">
            <div className="ui text loader">Loading...</div>
        </div>
        <p></p>
    </>
    );
};

export default Spinner;