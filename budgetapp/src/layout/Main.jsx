/* eslint-disable react-refresh/only-export-components */

// react-router-dom
import { Outlet, useLoaderData } from "react-router-dom"

// helper functions
import { fetchData } from "../helpers"

// assets
import wave from "../assets/wave.svg"

// components
import Nav from "../components/Nav"

// loader
export function mainLoader() {
    const userName = fetchData("userName")

    return { userName }
}
function Main() {
    const { userName } = useLoaderData()

    return (
        <div className="layout">
            <Nav userName={userName}/>
            <main>
                <Outlet />
            </main>
            <img src={wave} alt="" />
        </div>
    )
}

export default Main