import React from 'react'

const Button = ({ link, icon }) => (
  <a href={link}>
    <i className={`fa fa-${icon}`} aria-hidden='true' />
  </a>
)

const Footer = () => {
  const github = 'https://github.com/bachu-dev'
  const linkedin = 'https://www.linkedin.com/in/brandon-achu/'
  const email = 'mailto:branachu2016@gmail.com'

  return (
    <div className='footer-wrapper'>
      <div className='container'>
        <div className='logo'>Created By - Brandon Achu (2017)</div>
        <div className='btn-group'>
          <div className='btns'>
            <Button link={github} icon='github' />
            <Button link={linkedin} icon='linkedin' />
            <Button link={email} icon='envelope-o' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer