import React from "react";
import { css } from "@emotion/react";
import { MoonLoader } from "react-spinners";


const Spinner = () => {

    const color = "#2563EB";

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    return (
        <div className="h-32 flex justify-center items-center">

            <MoonLoader css={override} color={color} loading={true} size={50} />

        </div>
    );
}


export default Spinner;