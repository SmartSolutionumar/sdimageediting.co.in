import React from 'react';
import { Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

export default function Footer(){


  function ToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
    return (
        <footer className="footer">
          <div className="footerbody">
              <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4}>                  
                        <h4>CONTACT INFORMATION</h4>
                        {/* <p className="footerhead">Address</p> */}
                        {/* <p className="footerbodycontentAdd">35-Mosque street</p>
                        <p className="footerbodycontentAdd" style={{marginBottom:20,marginTop:5}}>Coimbatore </p> */}

                        <p className="footerhead">Email </p>
                        <p className="footerbodycontent">sdimageediting@gmail.com</p>

                        <p className="footerhead">Skype-ID </p>
                        <p className="footerbodycontent">live:.cid.320f91c39afe2888</p>


                        <p className="footerhead">Contact Us</p>
                        <p className="footerbodycontent">Phone : 8438007796,9952229842</p>

                        <div className="sm-icons">
                          {/* <a target="_blank" href="https://www.facebook.com/sdimageediting.imageediting"><FacebookIcon/></a>
                          <a target="_blank" href="https://www.instagram.com/sd_imageediting/"><InstagramIcon/></a>
                          <a target="_blank" href="https://web.whatsapp.com/send?phone=9789503396"><WhatsAppIcon/></a> */}
                          <a target="_blank" href="https://www.facebook.com/"><FacebookIcon/></a>
                          <a target="_blank" href="https://www.instagram.com//"><InstagramIcon/></a>
                          <a target="_blank" href="https://web.whatsapp.com/"><WhatsAppIcon/></a>
                        </div>
                      
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <h4>BE THE FIRST TO KNOW</h4>
                    <p className="footerbodycontent">Get all the latest information on Service, Sales and Offers.Sign up for newsletter today.</p>
                    <hr/>
                    <h4>Quick Links</h4>
                    <ul className="list-marked list_inset change">
                      <li><Link to="home" onClick={ToTop}><ArrowForwardIosIcon/>Home</Link></li>
                      <li><Link to="about" onClick={ToTop}><ArrowForwardIosIcon/>About Us</Link></li>
                      <li><Link to="gallery" onClick={ToTop}><ArrowForwardIosIcon/>Port folio</Link></li>                      
                      <li><Link to="contact-us" onClick={ToTop}><ArrowForwardIosIcon/>Contact Us</Link></li>
                    </ul>
                </Grid>
              </Grid>
          </div>
          <div className="copyrights">© 2020 <span>SD ImageEditing Pvt Limited.</span></div>
        </footer>
    )
}