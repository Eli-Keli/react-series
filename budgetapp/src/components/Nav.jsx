/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

// react-router-dom
import { Form, NavLink } from 'react-router-dom'

// library
import { TrashIcon } from "@heroicons/react/24/solid"

// assets
import logomark from "../assets/logomark.svg"

function Nav({ userName }) {
    return (
        <nav>
            <NavLink
                to="/"
                aria-label="Go to Home"
            >
                <img src={logomark} alt="Logo" height={30} />
                <span>HomeBudget</span>
            </NavLink>
            {
                userName && (
                    <Form
                        method='post'
                        action='logout'
                        onSubmit={(e) => {
                            if (!confirm("Are you sure you want to delete user and all data?")) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <button type='submit' className='btn btn--warning'>
                            <span>Delete User</span>
                            <TrashIcon width={20} />
                        </button>
                    </Form>
                )
            }
        </nav>
    )
}

export default Nav