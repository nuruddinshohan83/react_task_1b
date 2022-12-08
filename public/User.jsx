import * as React from "react"

const User = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="1em"
        height="1em"
        {...props}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <circle
            cx={128}
            cy={96}
            r={64}
            fill="none"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={16}
        />
        <path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={16}
            d="M30.989 215.99a112.037 112.037 0 0 1 194.023.003"
        />
    </svg>
)

export default User
