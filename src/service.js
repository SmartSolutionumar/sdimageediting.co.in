import React from 'react';
import { Grid, Button } from '@material-ui/core'; 


export default function Gallery() {
   

    return (
        <div style={{ marginTop: '6%' }}> 
                <h2 style={{textAlign:'center'}}>Photo memories for life with our editing. </h2>
            
            <div className="cards-div" style={{display: 'flex'}}>
                <div class="see-also-items even-count">
                    <a class="post-item" href="/#/daytodust">
                        <img src="https://sdimageediting.vercel.app/media/Day%20to%20dusk%20conversation//dimage1.jpeg" alt="" class="post-bg-img"/>
                        <h2 class="title" style={{color: 'white'}}>Day to Dusk</h2>
                        <h3 class="post-title">
                        Day or Night, We Make it Right<br/>
                        Create Magic on the Go. 
                        </h3>

                    </a>
                    <a class="post-item" href="/#/flashambient">
                        <img src="https://picxelinfotech.com/temp/faafter.jpg" alt="" class="post-bg-img"/>
                        <h2 class="title" style={{color: 'white'}}>Flash Ambient</h2>
                        <h3 class="post-title">
                        Try our Flambient Champions.<br/>
                        Smash the Flash Right!  
                        </h3>

                    </a>
                    <a class="post-item" href="/#/hdrbleeding">
                        <img src="https://picxelinfotech.com/temp/hdrafter.jpg" alt="" class="post-bg-img"/>
                        <h2 class="title" style={{color: 'white'}}>HDR Blending</h2>
                        <h3 class="post-title">
                        Not the Best Shot?<br/>
                        End it Like we Blend it!  
                        </h3>

                    </a>
                    <a class="post-item" href="/#/drone">
                        <img src="https://sdimageediting.vercel.app/media/Drone/drimage4.jpeg" alt="" class="post-bg-img"/>
                        <h2 class="title" style={{color: 'white'}}>Drone</h2>
                        <h3 class="post-title">
                        Enhance your Chance.<br/>
                        Picture That Sells!  
                        </h3>

                    </a>
                    <a class="post-item" href="/#/skyreplacement">
                        <img src="https://picxelinfotech.com/temp/srafter.jpg" alt="" class="post-bg-img"/>
                        <h2 class="title" style={{color: 'white'}}>Sky Replacement</h2>
                        <h3 class="post-title">
                        Highlight The Twilight.<br/>
                        Feel the Picture!  
                        </h3>

                    </a>
                    <a class="post-item" href="/#/virtualtwilight">
                        <img src="https://picxelinfotech.com/temp/vtafter.jpg" alt="" class="post-bg-img"/>
                        <h2 class="title" style={{color: 'white'}}>Virtual Twilight</h2>
                        <h3 class="post-title">
                        Sky is Falling.<br/>
                        Change the Range! 
                        </h3>

                    </a>
                </div>
               
            </div>
        </div>
    )
}
