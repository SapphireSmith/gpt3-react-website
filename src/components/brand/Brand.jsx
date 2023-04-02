import React from 'react'
import './brand.css'
import {Atlassian,Google,Dropbox,Shopify,Slack} from './logo'
const Brand = () => {
  return (
    <div className='gpt3__brand'>
      <div className='gpt3__brand-logo'>
        <img src={Google} alt="google" />
      </div>

      <div className='gpt3__brand-logo'>
        <img src={Dropbox} alt="google" />
      </div>

      <div className='gpt3__brand-logo'>
        <img src={Shopify} alt="google" />
      </div>

      <div className='gpt3__brand-logo'>
        <img src={Slack} alt="google" />
      </div>

      <div className='gpt3__brand-logo'>
        <img src={Atlassian} alt="google" />
      </div>
    </div>
  )
}

export default Brand