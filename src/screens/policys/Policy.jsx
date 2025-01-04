import React from 'react'
import { policyContents } from '../../data/policy-contents'
import './policy.css'

const Policy = ({ title }) => {
    const policy = policyContents[title]

    if (!policy) {
        return <div className="policy_container">
            <h1>Policy not found</h1>
        </div>
    }

    return (
        <div className='policy_container'>
            <h1>{policy.title}<br />Privacy Policy</h1>
            <p>
                <strong>{policy.content.en}</strong>
            </p>
            <p>
                <strong>{policy.content.tr}</strong>
            </p>
        </div>
    )
}

export { Policy }