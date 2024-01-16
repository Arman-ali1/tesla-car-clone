import React,{useEffect} from "react";
import "aos/dist/aos.css";

import { Wrapper,Content } from "./interior.style";

const Interior = () =>{
    return(
        <Wrapper>
            <div className="title" >
                <h1 data-aos='fade-up' >All-New Interior showcase</h1>
            </div>
            <Content>
            </Content>
        </Wrapper>
    )
}

export default Interior;