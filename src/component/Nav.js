import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>


            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Blog
            </Typography>
            <Link to='/'>

              <Button variant='contained' color="success">Home</Button>
            </Link>
            <Link to='/add'>
              <Button variant='contained' color='success'>Addd Blog</Button>
            </Link>

          </Toolbar>


        </AppBar>

      </Box>









    </div>

  )
}

export default Nav
