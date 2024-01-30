import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import rsvpDetailService from '../service/rsvpDetailService';

function Rsvp() {
    const [details, setDetails] = useState({firstName: '', lastName: '', rsvp: false})
    const handleRsvpClick = async () => {
        const updatedDetails = {
          ...details,
          rsvp: true
        }
        await rsvpDetailService.save(updatedDetails.firstName, updatedDetails.lastName, updatedDetails.rsvp)
        setDetails(updatedDetails)
        console.log(updatedDetails)
      }

      const onFirstNameChange = (e) => {
        setDetails({...details, firstName: e.target.value})
      }
    
      const onLastNameChange = (e) => {
        setDetails({...details, lastName: e.target.value})
      }

      const rsvpSignUp = (
            <Stack spacing={2} direction="row">
              <TextField id="firstName" label="First Name" variant="standard" onChange={onFirstNameChange} />
              <TextField id="lastName" label="Last Name" variant="standard" onChange={onLastNameChange} />
              <Button variant="contained" onClick={handleRsvpClick}>RSVP</Button>
            </Stack>
      )

      const rsvpCompleteSignUp = <p>See you on our wedding day!</p>
    
      return (    
        <div className="rsvp-container">
            {details.rsvp? rsvpCompleteSignUp: rsvpSignUp}
        </div>
      )
}

export default Rsvp;