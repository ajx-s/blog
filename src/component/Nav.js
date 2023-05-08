import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Nav = () => {
    return (
        <div>
             <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
          <Link to="/" > <Button color="secondary">Login</Button></Link>
          <Link to="/add"> <Button color='secondary'> Add Blog</Button>  </Link>

       
          
        
          


        </Toolbar>
       
      </AppBar>
    </Box>


            
        </div>
    )
}

export default Nav
