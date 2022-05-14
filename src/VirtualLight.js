import React from 'react';
import { Grid, Button } from '@material-ui/core';
import slide2 from './Images/skyreplacement/simage3.jpeg';
import slide1 from './Images/HDRbleeding/himage6.jpeg';
import ResponsiveGallery from 'react-responsive-gallery';

export default function Gallery() {
   
    const Virtual = [
        { src: "https://picxelinfotech.com/temp/vtbefore.jpg", name: "image1" }
    ];
    const VirtualAfr = [
        { src: "https://picxelinfotech.com/temp/vtafter.jpg", name: "image1" }
    ];
    
    
    

    return (
        <div style={{ marginTop: '10%' }}>
            <div className="body-content CD">
                <h2 style={{textAlign: 'center'}}>Virtual Twilight</h2>
                <p style={{fontSize: '20px',lineHeight: '34px',margin: '0 20%'}}>
                Virtual twilight is a procedure that is followed around the world for a long time to show buyers what they can expect from the house they are soon going to own.


                </p>
            </div>
            <div className="cards-div">
                <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <ResponsiveGallery useLightBox={true} images={Virtual} screenWidthSizes={{xs: 420,s: 600,m: 768,l: 992,xl: 1200}}
                        imageMaxWidth={{xs: 1000,s: 1000,m: 1000,l: 1000,xl: 1000,xxl:1000}}
                        numOfImagesPerRow={{xs: 1,s: 1,m: 1,l: 1,xl: 1, xxl:1}}
                        />    
                        <h2 style={{textAlign: 'center'}}>Before </h2>   
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <ResponsiveGallery useLightBox={true} images={VirtualAfr} screenWidthSizes={{xs: 420,s: 600,m: 768,l: 992,xl: 1200}}
                        imageMaxWidth={{xs: 1000,s: 1000,m: 1000,l: 1000,xl: 1000,xxl:1000}}
                        numOfImagesPerRow={{xs: 1,s: 1,m: 1,l: 1,xl: 1, xxl:1}}
                        />    
                        <h2 style={{textAlign: 'center'}}>After</h2> 
                        
                    </Grid>
                </Grid>
                
                
            </div>
        </div>
    )
}
