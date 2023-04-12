import React from "react";
import { Classification } from "../MovieDetails/Clasificacion";
import { LeftComp } from "../MovieDetails/leftComp";

function AppUI(){
    return(
        <React.Fragment>
            <LeftComp/>
            <Classification/>
        </React.Fragment>
    )
}

export default AppUI