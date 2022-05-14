import React from 'react';
import { Grid, Button } from '@material-ui/core';
import slide2 from './Images/skyreplacement/simage3.jpeg';
import slide1 from './Images/HDRbleeding/himage6.jpeg';
import ResponsiveGallery from 'react-responsive-gallery';

export default function Gallery() {
    const DayToDusk = [
        { src: "https://picxelinfotech.com/temp/ddbefore.jpg", name: "image1" }
    ];
    const DayToDuskAfr = [
        { src: "https://picxelinfotech.com/temp/ddafter.jpg", name: "image1" }
    ];
    const Sky = [
        { src: "https://sdimageediting.vercel.app/media/sky replacement/simage1.jpeg", name: "image1" },
        { src: "https://sdimageediting.vercel.app/media/sky replacement/simage2.jpeg", name: "image2" },
        { src: "https://sdimageediting.vercel.app/media/sky replacement/simage6.jpeg", name: "image4" },
        { src: "https://sdimageediting.vercel.app/media/sky replacement/simage4.jpeg", name: "image5" },
        { src: "https://sdimageediting.vercel.app/media/sky replacement/simage5.jpeg", name: "image6" },
    ];
    
    const Drone = [
        { src: "https://sdimageediting.vercel.app/media/Drone/drimage1.jpeg", name: "image1" },
        { src: "https://sdimageediting.vercel.app/media/Drone/drimage2.jpeg", name: "image2" },
        { src: "https://sdimageediting.vercel.app/media/Drone/drimage3.jpeg", name: "image3" },
        { src: "https://sdimageediting.vercel.app/media/Drone/drimage4.jpeg", name: "image4" },
        { src: "https://sdimageediting.vercel.app/media/Drone/drimage5.jpeg", name: "image5" },
    ];

    return (
        <div style={{ marginTop: '10%' }}>
            <div className="body-content CD">
                <h2 style={{textAlign: 'center'}}>Day to Dusk</h2>
                <p style={{fontSize: '20px',lineHeight: '34px',margin: '0 20%'}}>
                A dusk photo is taken usually of the exterior of the property, at dusk. It is used to showcase landscape/property lighting, pool lighting, and features like fire pits, and also to showcase a beautiful sunset.
                </p>
            </div>
            <div className="cards-div">
                <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <ResponsiveGallery useLightBox={true} images={DayToDusk} screenWidthSizes={{xs: 420,s: 600,m: 768,l: 992,xl: 1200}}
                        imageMaxWidth={{xs: 1000,s: 1000,m: 1000,l: 1000,xl: 1000,xxl:1000}}
                        numOfImagesPerRow={{xs: 1,s: 1,m: 1,l: 1,xl: 1, xxl:1}}
                        />    
                        <h2 style={{textAlign: 'center'}}>Before </h2>   
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <ResponsiveGallery useLightBox={true} images={DayToDuskAfr} screenWidthSizes={{xs: 420,s: 600,m: 768,l: 992,xl: 1200}}
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
