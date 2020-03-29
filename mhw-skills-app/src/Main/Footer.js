import React from "react"

export default function Footer() {
    const date = new Date().getFullYear();
    return <p>Copyright {date}</p>
}