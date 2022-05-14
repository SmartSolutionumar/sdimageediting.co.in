import React from 'react';
import ResponsiveGallery from 'react-responsive-gallery';
import Img1 from './Images/mansion1.jpeg';
import Img2 from './Images/mansion2.jpeg';
import Img3 from './Images/mansion3.jpeg';
import Img4 from './Images/mansionsmall1.jpeg';
import Img5 from './Images/mansionsmall2.jpeg';
import Img6 from './Images/mansionsmall3.jpeg';
import Img10 from './Images/mansionsmall4.jpeg';
import Img7 from './Images/mansionslide1.png';
import Img8 from './Images/mansionslide2.png';
import Img9 from './Images/mansionslide3.png';

export default function Gallery(){
    const images=[
        { src:Img1 },
        { src:Img2 },
        { src:Img3 },
        { src:Img4 },
        { src:Img5 },
        { src:Img6 },
        { src:Img7 },
        { src:Img8 },
        { src:Img10 },
        { src:Img9 },
        // { src:Img22 },
        // { src:Img6 },
        // { src:Img10 },
        // { src:Img7 },
        // { src:Img8 },
        // { src:Img9 },
        // { src:Img12 },
        // { src:Img11 },
        // { src:Img17 },
        // { src:Img13 },
        // { src:Img14 },
        // { src:Img15 },
        // { src:Img16 },
    ];
    return (
        <div style={{marginTop:'10%'}}>
            <div className="body-content CD">
            <h5>OUR GALLERY</h5>
            <p>
            The wonderful images done by our team in all services with the help of Photography editing softwares. Along with broad methodology, editing is great one in the entire world.
            </p>
            </div>
            <ResponsiveGallery useLightBox={true} images={images}/>
        </div>
    )
}
