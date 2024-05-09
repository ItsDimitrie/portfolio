import React, { useEffect, useState } from 'react';
import './imageSlider.css';

const ImageSliderAuto = (props) => {
    const SliderProperty = {
        ImageNo: '',
        ImageName: '',
        ImageSrc: '',
        ImageURL:''
    }

    const [sliderProperty, setSliderProperty] = useState(SliderProperty);

    const { ImageNo, ImageName, ImageSrc, ImageURL } = sliderProperty;

    const [count, setCount] = useState(0);


    const [animationCls, setAnimationCls] = useState('displayBlock fade');



    const NextClick = () => {

        setAnimationCls(() => ('displayNone fade'));
        const myTimeout = setTimeout(() => {
            setAnimationCls('displayBlock fade')
        }, 100);

        if (count <= props.ImageData.length-1) {
            setCount(count+1);
        }

        if (count === props.ImageData.length-1) {
            setCount(0);
        }

    };

    useEffect(() => {

        setSliderProperty((previous) => ({ ...previous, ImageNo: props.ImageData[count].ImageNo, ImageName: props.ImageData[count].ImageName, ImageURL: props.ImageData[count].ImageURL, ImageSrc: props.ImageData[count].ImageSrc }));

    }, [count]);



    useEffect(() => {

         const interval=  setInterval(() => {

            NextClick();

        }, props.SlideInterValTime);

        return () => clearInterval(interval);

    }, [count]);



    return (
        <>
            <div className='slideshow-container '>


                <div className={animationCls}>
                    <div className="numbertext">{ImageNo}</div>
                    <a href={ImageURL} target="_blank" rel="noreferrer">
                    <img src={ImageSrc} className='imageStyle' alt="Img" /> 
                    </a>
                </div>
                <div className="text">{ImageName}</div>
            </div>


        </>

    );
};

export default ImageSliderAuto;