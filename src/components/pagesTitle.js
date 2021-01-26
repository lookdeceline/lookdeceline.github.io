import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./styles/pagesTitle.module.css"

const PagesTitle = (props) => {
    return (
        <div>
            <h1 className={styles.h1}>{ props.title }</h1>
            <h2 className={styles.h2}>{ props.titleIntro }</h2>
        </div>
    )
}


export default PagesTitle;


