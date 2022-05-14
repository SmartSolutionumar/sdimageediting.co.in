import React from 'react';
// import Carousel from "react-material-ui-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './SlideShow.scss';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@material-ui/core'
import slide1 from '../Images/Daytoduskconversation/dimage3.jpeg';

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12} md={4} sm={4} lg={4} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                {/* <Button variant="outlined" className="ViewButton">
                    Explore Now
                </Button> */}
            </CardContent>
        </Grid>
    )

    for (let i = 0; i < 1; i++) {
        const item = props.item.Items[i];
        if (item) {
            const media = (

                <Grid item xs={12} md={12} sm={12} key={i}>
                    <CardMedia
                        className="Media"
                        image={item.Image}
                        title={item.Name}
                    >
                        <Typography className="MediaCaption">
                            {item.Name}
                        </Typography>
                    </CardMedia>

                </Grid>
            )
            items.push(media);
        }
    }

    // if (contentPosition === "left") {
    //     items.unshift(content);
    // } else if (contentPosition === "right") {
    //     items.push(content);
    // } else if (contentPosition === "middle") {
    //     items.splice(items.length / 2, 0, content);
    // }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Name: "",
        Caption: "",
        contentPosition: "middle",
        Items: [
            {
                Name: "",
                Image: "https://sdimageediting.vercel.app/media/Day%20to%20dusk%20conversation/dimage2.jpeg",
                Title: "Let Your True",
                Sub: "Colours Shine Though.",
                Para: "Your ideas can come true with our editing experts, where in we thrive to give the best results"
            }
        ]
    },
    {
        Name: "",
        Caption: "",
        contentPosition: "left",
        Items: [
            {
                Name: "",
                Image: "https://sdimageediting.vercel.app/media/Day%20to%20dusk%20conversation/dimage3.jpeg",
                Title: "Photo Memories For",
                Sub: "life with Our Editing.",
                Para: "Your ideas can come true with our editing experts, where in we thrive to give the best results"
            },
        ]
    },
    {
        Name: "",
        Caption: "",
        contentPosition: "middle",
        Items: [
            {
                Name: "",
                Image: "https://sdimageediting.vercel.app/media/Day%20to%20dusk%20conversation/dimage1.jpeg",
                Title: "TimeLess look",
                Sub: "flawless.",
                Para: "We help you get back to your past, present or even space with our editing experts."
            }
        ]
    }
]

export default function BannerExample() {
    return (
        <div style={{ width: "100%", marginTop: '4.7%' }} className="coroseldiv">
            {/* <Carousel
                    className="Example"
                    autoPlay={true}
                    timer={1500}
                    animation={"fade"}
                    indicators={false}
                    timeout={400}
                    navButtonsAlwaysVisible={false}
                    navButtonsAlwaysInvisible={false}
                >
                    {items.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition}/>
                    })}
                </Carousel> */}
            <Carousel showThumbs={false} autoPlay infiniteLoop interval={6000} fade>
                {items.map((val, index) => {
                    return (

                        <div key={index} >
                            <img className="coroselimg" style={{ width: "100%" }} alt="" src={val.Items[0].Image} />
                            <div class="typewriter">
                                <div className="Slide-Title">{val.Items[0].Title}</div>
                                <h1>{val.Items[0].Sub}</h1>
                                <p className="Slide-Para">{val.Items[0].Para}</p>
                            </div>

                        </div>

                    )
                })
                }
            </Carousel>
        </div>
    )
}