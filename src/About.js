import { Grid, Button } from '@material-ui/core';
import React from 'react';
import './App.css';

export default function AboutPage() {
  return (
    <div style={{ marginTop: '12%',display: 'inline-block' }}>
      <div className="cards-div">
        <Grid container>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <div className="header1">Our fairy-tale</div>
            <div className="subtitle1">
              SD Image Editing is widely known amongst the recognized service provider of highest quality Photo Editing Services, Manipulation Services, etc.
              <br />
              <br />
              Photos are return ticket to a moment, to understand what our lives meant to us. SD Image Editing is everything you need to make beautiful images.
              <Button color="primary" style={{ background: "#0D84FB", color: "#fff", padding: "2%" }}>Know more</Button>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
          <img src={'https://picxelinfotech.com/temp/02.jpg'/*mansmall1*/} alt="clipping" className="headimg1" />
          </Grid>
        </Grid>
      </div>
      <div className="bg-blue-item">
        <p>
          Our photo editing experts have done over thousands of excellent projects all over the globe with thousands of best satisfied customers. We believe that images tell story! We help you create your own story with our editing skills. For many decades we have been focusing on Image Editing. Given the unique state affair of our company, we are able to handle any number of customers and big workloads.
          <br/><br/>
          We guarantee quality output and quick turn-around regardless of the time and availability of our editors. Photo editing made simple! Just a click away upload, let us edit the photo for your convenience, just a click to download. 
        </p>

        <br/>
        <h4>Founder</h4>
        <h6>SD Image Editing</h6>
      </div>
      <div className="features">
          <div className="features-item">
              <div className="features-item-icon">
                  <img style={{maxWidth: '100%'}} src="https://picxelinfotech.com/temp/guaranteed.svg" alt=""/>
              </div>
              <div class="features-item-title">
                  High Quality
              </div>
              <div class="features-item-subtitle">
                  100% satisfaction with our high quality photo editing skills.
              </div>
          </div>
          <div class="features-item">
              <div class="features-item-icon">
                  <img style={{maxWidth: '100%'}} src="https://picxelinfotech.com/temp/open-24-hours.svg" alt=""/>
              </div>
              <div class="features-item-title">
                  24x7 Service
              </div>
              <div class="features-item-subtitle">
                  Our customer service is available 24/7 on live chat, phone or email </div>
          </div>
          <div class="features-item">
              <div class="features-item-icon">
                  <img style={{maxWidth: '100%'}} src="https://picxelinfotech.com/temp/delivery-box.svg" alt=""/>
              </div>
              <div class="features-item-title">
                  Fast Delivery
              </div>
              <div class="features-item-subtitle">
                  Our team of photo editing experts will enhance your images within 24 hours.
              </div>
          </div>
      </div>
    </div>
  )
}
