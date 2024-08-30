import React from 'react'
import signphoto from "../../assets/images/sign/signphoto.png"
import { Container } from '@mui/material'
const Sign = () => {
  return (
      <div id='sign'>
        <div className="sign__box">
        <Container>
        <div className="sign__card">
            <div className="sign__left">
<div className="sign__top">
<h2 className='signeventlinks'>Join Eventslink</h2>
</div>
<div className="sign__bottom">
<p>People use Eventslink to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together. Membership is free.</p>
</div>
<button  className='sign__btn'>Sign up</button>
            </div>
            <div className="sign__right">
                <img className='signimg' src={signphoto} alt="" />
            </div>
        </div>
        </Container>
        </div>
    </div>
  )
}

export default Sign