/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'

// react-router-dom
import { Form, useFetcher } from 'react-router-dom'

// Library
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'

const AddBudgetForm = () => {
    const fetcher = useFetcher();

    const formRef = useRef();
    const focusRef = useRef();

    const isSubmitting = fetcher.state === "submitting"

    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset();
            focusRef.current.focus();
        }
    }, [isSubmitting]);


    return (
        <div className='form-wrapper'>
            <h2 className='h3'>
                Create Budget
            </h2>
            <fetcher.Form
                method='post'
                className='grid-sm'
                ref={formRef}
            >
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input
                        type="text"
                        id="newBudget"
                        name="newBudget"
                        placeholder="e.g Groceries"
                        required
                        ref={focusRef}
                    />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input
                        type="number"
                        id="newBudgetAmount"
                        name="newBudgetAmount"
                        step="0.01"
                        inputMode='decimal'
                        placeholder='e.g 400'
                        required
                    />
                    <input type="hidden" name="_action" value="createBudget" />
                    <button
                        type='submit'
                        className='btn btn--dark'
                        disabled={isSubmitting}
                    >
                        {
                            isSubmitting ? (
                                <span>Submitting...</span>
                            ) : (
                                <>
                                    <span>Create Budget</span>
                                    <CurrencyDollarIcon width={20} />
                                </>
                            )
                        }
                    </button>
                </div>
            </fetcher.Form>
        </div>
    )
}

export default AddBudgetForm