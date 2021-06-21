import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "../../styles/global.css"

const Layout = ({children}) => {
    return (
        <div className="main-container">
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout
