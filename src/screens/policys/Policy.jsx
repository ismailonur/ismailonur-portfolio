import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { policyContents } from '../../data/policy-contents';
import './policy.css';

export const Policy = ({ title }) => {
  const { policyName } = useParams();
  const policyKey = title || policyName;
  const policy = policyContents[policyKey];

  if (!policy) {
    return (
      <div className="policy-container">
        <div className="policy-content">
          <h1>Policy Not Found</h1>
          <p>The requested privacy policy could not be found.</p>
          <Link to="/" className="policy-back-button">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="policy-container">
      <Helmet>
        <title>{policy.title} - İsmail Onur</title>
        <meta name="description" content={`Privacy policy for ${policy.title}`} />
      </Helmet>
      
      <div className="policy-content">
        <Link to="/" className="policy-back-button">
          ← Back to Home
        </Link>
        
        <h1>{policy.title}</h1>
        
        <div dangerouslySetInnerHTML={{ __html: policy.content }} />
        
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--color-primary-variant)' }}>
          <p><strong>Last Updated:</strong> November 8, 2025</p>
          <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
      </div>
    </div>
  );
};
