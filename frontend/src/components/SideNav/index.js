import React from 'react'
import { Wrapper,Content} from './sidenav.style'

import { Link } from 'react-router-dom'

function SideNav({ show }) {

    return (
        <Wrapper show={show}>
            <Content>
                <Link to='/models'><li className='half'>Model S</li></Link>
                <Link to='/model3'><li className='half'>Model 3</li></Link>
                <Link to='/modelx'><li className='half'>Model X</li></Link>
                <Link to='/modely'><li className='half'>Model Y</li></Link>
                <li className='half'>Solar Roof</li>
                <li className='half'>Solar Panels</li>
                <li>Logout</li>
                <li>User detail</li>
                <li>Register</li>
                <li>Charging</li>
                <li>Powerwall</li>
                <li>Commercial Energy</li>
                <li>Find Us</li>
                <li>Support</li>
                <li className='half' >Shop</li>
                <Link to='/login'><li className='half'>Account</li></Link>
                <li className='half'>More</li>
            </Content>
        </Wrapper>
    )
}

export default SideNav