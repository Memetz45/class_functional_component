import React from "react";
import styled from "styled-components";

const IMG = styled.img`
    width: 300px;
    margin:0px 650px 0px 10px;
    
`;
const DIV = styled.div`
    display:flex;
    margin-top:10px;
`;
const TugasKomponen = () => {
    return(
        <DIV>
            <IMG src="https://eduwork.id/assets/favicon.png"/>
            <h1>@Slamet Nurhidayat</h1>
        </DIV>
    )
}

export default TugasKomponen;