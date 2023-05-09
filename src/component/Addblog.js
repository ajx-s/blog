import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Addblog = () => {
    const handleClick = event => {

        event.currentTarget.disabled = false;
        window.alert('Form Submited');
    };


    return (
        <div>

            <Typography >BLOGFORM</Typography>
            <TextField label="BLOGNAME" variant="filled" /><br></br>
            <TextField label="DESCRIPTION" variant="filled" /><br>
            </br>
            <TextField label="AUTHORNAME" variant="filled" />
            <br></br>
            <br>
            </br>
            <Button variant='contained' color='inherit' onClick={handleClick} > submit</Button>
        </div>
    )
}

export default Addblog
