/* eslint-disable no-unused-vars */
import React from 'react'

// Libary
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid"

// assets
import illustration from "../assets/illustration.jpg"

// React-router-dom
import { Form } from 'react-router-dom'

function Intro() {
    return (
        <div className='intro'>
            <div>
                <h1>
                    Take control of <span className='accent'>Your money</span>
                </h1>
                <p>
                    Personal budgeting is the secret to financial freedom. Start your journey today
                </p>
                <Form method='post'>
                    <input
                        type='text'
                        name='userName'
                        placeholder='What is your name?'
                        required
                        aria-label='Your name'
                        autoComplete='given-name'
                    />
                    <input type="hidden" name="_action" value="newUser" />
                    <button type='submit' className='btn btn--dark'>
                        <span>Get Started</span>
                        <ArrowRightCircleIcon width={20} />
                    </button>
                </Form>
            </div>
            <img src={illustration} alt="Person with money" width={600} />
        </div>
    )
}

export default Intro