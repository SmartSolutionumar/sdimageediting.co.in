import React from 'react';
import { Grid, Button } from '@material-ui/core';
import slide2 from './Images/skyreplacement/simage3.jpeg';
import slide1 from './Images/HDRbleeding/himage6.jpeg';
import ResponsiveGallery from 'react-responsive-gallery';

export default function Gallery() {
    const DayToDusk = [
        { src: "https://sdimageediting.vercel.app/media/Day to dusk conversation/dimage1.jpeg", name: "image1" },
        { src: "https://sdimageediting.vercel.app/media/Day to dusk conversation/dimage2.jpeg", name: "image2" },
        { src: "https://sdimageediting.vercel.app/media/Day to dusk conversation/dimage3.jpeg", name: "image3" },
        { src: "https://sdimageediting.vercel.app/media/Day to dusk conversation/dimage4.jpeg", name: "image4" },
        { src: "https://sdimageediting.vercel.app/media/Day to dusk conversation/dimage5.jpeg", name: "image5" },
    ];
    const Sky = [
        { src: "https://sdimageediting.vercel.app/media/sky replacement/simage1.jpeg", name: "image1" },
        { src: "https://sdimageediting.vercel.app/media/sky replacement/simage2.jpeg", name: "image2" },
        { src: "https://sdimageediting.vercel.app/media/sky replacement/simage6.jpeg", name: "image4" },
        { src: "https://sdimageediting.vercel.app/media/sky replacement/simage4.jpeg", name: "image5" },
        { src: "https://sdimageediting.vercel.app/media/sky replacement/simage5.jpeg", name: "image6" },
    ];
    const HDR = [
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage1.jpeg", name: "image1" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage2.jpeg", name: "image2" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage3.jpeg", name: "image3" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage4.jpeg", name: "image4" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage5.jpeg", name: "image5" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage6.jpeg", name: "image6" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage7.jpeg", name: "image7" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage8.jpeg", name: "image8" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage9.jpeg", name: "image9" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage10.jpeg", name: "image10" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage13.jpeg", name: "image12" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage12.jpeg", name: "image13" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage14.jpeg", name: "image14" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage15.jpeg", name: "image15" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage16.jpeg", name: "image16" },
        { src: "https://sdimageediting.vercel.app/media/HDR%20bleeding/himage17.jpeg", name: "image17" },
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
                <h2>Real life. Memories. Captured. Edited. </h2>
                <p>
                    The wonderful images done by our team in all services with the help of Photography editing softwares. Along with broad methodology, editing is great one in the entire world.
                </p>
            </div>
            <div className="cards-div">
                <div className="header1">Day to Dusk</div>
                <ResponsiveGallery useLightBox={true} numOfImagesPerRow={{ xs: 4, s: 4, m: 4, l: 4, xl: 4, xxl: 4 }} images={DayToDusk} />
                <div className="header1">Sky Replacement</div>
                <ResponsiveGallery useLightBox={true} images={Sky} />
                <div className="header1">HDR Blending</div>
                <ResponsiveGallery useLightBox={true} images={HDR} />
                <div className="header1">Drone</div>
                <ResponsiveGallery useLightBox={true} images={Drone} />
            </div>
        </div>
    )
}
