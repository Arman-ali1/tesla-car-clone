import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                <a href="https://github.com/Arman-ali1" target='_blank' >Tesla-Clone &copy; 2024</a>
                </div>
                <div>
                <a href="mailto:arman.alii1732@gmail.com" target='_blank'>Gmail</a>
                <a href="https://www.linkedin.com/in/arman-ali-890233237/" target="_blank" >LinkedIn</a>
                <a href="https://github.com/Arman-ali1" target="_blank" >GitHub</a>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer