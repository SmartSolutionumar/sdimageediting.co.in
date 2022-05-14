import React from 'react';
import { Grid, Button } from '@material-ui/core';
import slide2 from './Images/skyreplacement/simage3.jpeg';
import slide1 from './Images/HDRbleeding/himage6.jpeg';
import ResponsiveGallery from 'react-responsive-gallery';

export default function Gallery() {
   
    const Sky = [
        { src: "https://picxelinfotech.com/temp/srbefore.jpg", name: "image1" }
    ];
    const SkyAfr = [
        { src: "https://picxelinfotech.com/temp/srafter.jpg", name: "image1" }
    ];
    
    
    

    return (
        <div style={{ marginTop: '10%' }}>
            <div className="body-content CD">
                <h2 style={{textAlign: 'center'}}>Sky Replacement</h2>
                <p style={{fontSize: '20px',lineHeight: '34px',margin: '0 20%'}}>
                The Sky Replacement process is the best way to showcase the property with the most pleasant of skies.
                </p>
            </div>
            <div className="cards-div">
                <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <ResponsiveGallery useLightBox={true} images={Sky} screenWidthSizes={{xs: 420,s: 600,m: 768,l: 992,xl: 1200}}
                        imageMaxWidth={{xs: 1000,s: 1000,m: 1000,l: 1000,xl: 1000,xxl:1000}}
                        numOfImagesPerRow={{xs: 1,s: 1,m: 1,l: 1,xl: 1, xxl:1}}
                        />    
                        <h2 style={{textAlign: 'center'}}>Before </h2>   
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <ResponsiveGallery useLightBox={true} images={SkyAfr} screenWidthSizes={{xs: 420,s: 600,m: 768,l: 992,xl: 1200}}
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
