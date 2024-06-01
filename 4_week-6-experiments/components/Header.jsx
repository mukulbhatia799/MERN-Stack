import React from "react"
/*

export function Header({title}) {
    return (
        <div>
            Title: {title}
        </div>
    )
}

*/

// using React.memo

export const Header = React.memo(function ({title}) {
    return (
        <div>
            Title: {title}
        </div>
    )
})