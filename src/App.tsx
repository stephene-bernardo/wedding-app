import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Rsvp from './component/rsvp';
import Divider from '@mui/material/Divider';

function App() {
  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123524.29222888214!2d120.87961319726557!3d14.648326400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b6fe3fb7451f%3A0xa2ac64e13b5d0e32!2sSta.%20Rita%20de%20Cascia%20Parish%20Church%20-%20Phil-Am%20Homes%2C%20Phil-Am%2C%20Quezon%20City%20(Diocese%20of%20Cubao)!5e0!3m2!1sen!2sph!4v1706017294736!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

  return (
    
    <div>
      <div>Karl And Rovelle</div>
      <div>Photo Slider</div>
      <Rsvp/>
      <Divider>Location</Divider>
      <Iframe iframe={iframe}/>
    </div>
    
  )
}

export default App
