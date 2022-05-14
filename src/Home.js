import { Grid,Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Slider from "./SlideShow";
import DriveFolderUploadIcon from '@material-ui/icons/CloudUploadOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined';
import FileDownloadOutlinedIcon from '@material-ui/icons/CloudDownload';
import slide1 from './Images/HDRbleeding/himage4.jpeg';
import slide2 from './Images/skyreplacement/simage6.jpeg';
import slide3 from './Images/Drone/drimage2.jpeg';
export default function Home(props){

	function ToTop(){
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	  }

    return (
        <div>
			<main className="parallaxmain">
				<Slider />
				<div className="cards-div">
					<Grid container>
						<Grid item xs={8} sm={8} md={8} lg={8}>
							<div className="header1">Our fairy-tale</div>
							<div className="subtitle1">
								SD Image Editing is widely known amongst the recognized service provider of highest quality Photo Editing Services, Manipulation Services, etc.
								<br/>
								<br/>
								Photos are return ticket to a moment, to understand what our lives meant to us. SD Image Editing is everything you need to make beautiful images. 
								<Button color="primary" style={{background:"#0D84FB",color:"#fff",padding:"2%"}}><Link to="service" onClick={ToTop}>Know more</Link></Button>
							</div>
						</Grid>
						<Grid item xs={4} sm={4} md={4} lg={4}>
								<img src={'https://picxelinfotech.com/temp/02.jpg'/*mansmall1*/} alt="clipping" className="headimg1" />
						</Grid>
					</Grid>
				</div>
				<div className="cards-div">
					<div className="header1">A choice of our creation!</div>
					<Grid container>
						<Grid item xs={6} sm={6} md={3} lg={3}>
							<div className="service_box animated fadeInUp go">
								<div className="zoom_image">
									<img src={"https://sdimageediting.vercel.app/media/Day%20to%20dusk%20conversation/dimage4.jpeg"} alt="clipping" className="img-responsive" />
								</div>
								<div className="caption">
									<h4> Day to Dusk </h4>
									<p className="viewmorep"><Link to="service" onClick={ToTop}>View more</Link> </p>
								</div>
							</div>
						</Grid>
						<Grid item xs={6} sm={6} md={3} lg={3}>
							<div className="service_box animated fadeInUp go">
								<div className="zoom_image">
									<img src={"https://sdimageediting.vercel.app/media/HDR%20bleeding/himage1.jpeg"} alt="clipping" className="img-responsive" />
								</div>
								<div className="caption">
									<h4> HDR Blending </h4>
									<p className="viewmorep">  <Link to="service" onClick={ToTop}>View more</Link></p>
								</div>
							</div>
						</Grid>
						<Grid item xs={6} sm={6} md={3} lg={3}>
							<div className="service_box animated fadeInUp go">
								<div className="zoom_image">
									<img src={"https://sdimageediting.vercel.app/media/sky%20replacement/simage1.jpeg"} alt="clipping" className="img-responsive" />
								</div>
								<div className="caption">
									<h4>Sky Replacement</h4>
									<p className="viewmorep"> <Link to="service" onClick={ToTop}>View more</Link> </p>
								</div>
							</div>
						</Grid>
						<Grid item xs={6} sm={6} md={3} lg={3}>
							<div className="service_box animated fadeInUp go">
								<div className="zoom_image">
									<img src={"https://sdimageediting.vercel.app/media/Drone/drimage1.jpeg"} alt="clipping" className="img-responsive" />
								</div>
								<div className="caption">
									<h4>Drone </h4>
									<p className="viewmorep"> <Link to="service" onClick={ToTop}>View more</Link>  </p>
								</div>
							</div>
						</Grid>
					</Grid>
				</div>
				<div className="cards-div"> 
					<div className="header1">A prespective of moments!</div>
					<Grid container>
						<Grid item xs={3} sm={3} md={3} lg={3}>
								<div className="card">
									<DriveFolderUploadIcon/>
									<h4>Upload</h4>
								</div>
						</Grid>
						<Grid item xs={3} sm={3} md={3} lg={3}>
								<div className="card">
									<ImageOutlinedIcon/>
									<h4>Edit</h4>
								</div>
						</Grid>
						<Grid item xs={3} sm={3} md={3} lg={3}>
								<div className="card">
									<VerifiedUserOutlined/>
									<h4>Quality</h4>
								</div>
						</Grid>
						<Grid item xs={3} sm={3} md={3} lg={3}>
								<div className="card">
									<FileDownloadOutlinedIcon/>
									<h4>Download</h4>
								</div>
						</Grid>
					</Grid>
				</div>
				<div className="cards-div">   
					<div className="header1">Our Portfolio</div>
					<Grid container>
						<Grid item xs={4} sm={4} md={4} lg={4}>
							<div className="homeimageitem">
								<img src={"https://sdimageediting.vercel.app/media/Day%20to%20dusk%20conversation/dimage5.jpeg"} alt="img1" />
							</div>
						</Grid>
						<Grid item xs={4} sm={4} md={4} lg={4}>
							<div className="homeimageitem">
								<img src={"https://sdimageediting.vercel.app/media/HDR%20bleeding/himage2.jpeg"} alt="img2" />
							</div>
						</Grid>
						<Grid item xs={4} sm={4} md={4} lg={4}>
							<div className="homeimageitem">
								<img src={"https://sdimageediting.vercel.app/media/sky%20replacement/simage2.jpeg"} alt="img3" />
							</div>
						</Grid>
						<Grid item xs={4} sm={4} md={4} lg={4}>
							<div className="homeimageitem">
								<img src={"https://sdimageediting.vercel.app/media/sky%20replacement/simage4.jpeg"} alt="img4" />
							</div>
						</Grid>
						<Grid item xs={4} sm={4} md={4} lg={4}>
							<div className="homeimageitem">
								<img src={"https://sdimageediting.vercel.app/media/Drone/drimage2.jpeg"} alt="img5" />
							</div>
						</Grid>
						<Grid item xs={4} sm={4} md={4} lg={4}>
							<div className="homeimageitem">
								<img src={"https://sdimageediting.vercel.app/media/HDR%20bleeding/himage3.jpeg"} alt="img6" />
							</div>
						</Grid>
						<Grid item xs={3} sm={3} md={3} lg={3} />
						<Grid item xs={6} sm={6} md={6} lg={6}>
							<br/><br/>
							<Button color="primary" style={{background:"#0D84FB",color:"#fff",padding:"1%",width:'100%'}} 
								onClick={() => props.history.push("/gallery")}
							>Know more</Button>
						</Grid>
						<Grid item xs={3} sm={3} md={3} lg={3} />
					</Grid>
				</div>
			</main>
			{/* <footer className="parallaxfooter">
				<p>Hello There!</p>
			</footer> */}
		</div>
    )
}