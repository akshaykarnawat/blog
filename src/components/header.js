import React from "react"
import { Link } from "gatsby"
import HeaderStyles from '../stylesheets/header.module.css'

export default () => (
    <Link to="/" className={HeaderStyles.header}>
        <h1>
            akshaykarnawat | blog
        </h1>
    </Link>
)