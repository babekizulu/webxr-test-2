import React from "react";

const StartBtn = ({activateXR}) => {
    return (
        <div>
            <button onClick={() => activateXR()}>start</button>
        </div>
    );
}

export default StartBtn;