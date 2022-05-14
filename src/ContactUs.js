import { Grid } from '@material-ui/core';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function ContactUs(){
  return (
    <div style={{margin:'10% 10% 5% 10% '}} className="owp">
      <div class="wrap_float">
          <h1 class="page-title" style={{textAlign: 'center'}}>
              Contact Form
          </h1>
          <div class="post-description">
              <p>
                  Edit photo to your choice.
                  You are in the Right place!
                  Let's make something Awesome together.                                    
              </p>
          </div>
      </div>
      <Grid container>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{padding: '1%'}}>
            <TextField id="outlined-basic" label="Name *" variant="outlined" fullWidth/>
            
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} style={{padding: '1%'}}>
            <TextField id="outlined-basic" label="EmaIl *" variant="outlined" fullWidth/>
            
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{padding: '1%'}}>
            <TextField id="outlined-basic" label="Write a Comment" variant="outlined" fullWidth
            multiline
            rows={4}
            />
            
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{padding: '1%'}}>
            <Button variant="contained">Submit</Button>
            
          </Grid>
          
      </Grid>
    </div>
  )
}
