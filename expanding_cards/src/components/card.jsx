import React from "react";
import classNames from "classnames";
export default function Card({isActive, url, text, ...rest}){

    const classes = isActive ? classNames('panel', 'active') : classNames('panel')
    return(
        <div className={classes} style={{backgroundImage: `url(${url})`}} {...rest}>
            <h3>{text}</h3>
        </div>
    )
}