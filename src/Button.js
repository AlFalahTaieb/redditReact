import React from "react"

const Button = ({
    onClick,
    className,
    Children
}) =>
    <button
        onClick={onClick}
        className={className}
        type='Button'
    >
        {Children }
    </button>

    export default Button ;