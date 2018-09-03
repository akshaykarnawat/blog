import React from 'react'
import Header from "../components/header"
import ContainerStyles from '../stylesheets/container.module.css'


export default ({ children }) => (
    <div className={ContainerStyles.container}>
        <Header/>
        {children}    
    </div>
)
