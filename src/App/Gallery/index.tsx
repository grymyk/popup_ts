import { string } from "prop-types";
import React, { useRef, useEffect } from "react";

import "./style.css";

const Gallery = () => {
    const images = [...document.querySelectorAll<HTMLElement>('.image')] as HTMLImageElement[];

    // popup

    const popup = document.querySelector('.popup') as HTMLElement;
    const imageName = document.querySelector('.image-name') as HTMLElement;
    const largeImage = document.querySelector('.large-image') as HTMLImageElement;
    const imageIndex = document.querySelector('.index') as HTMLElement;

    const leftArrowRef = useRef<HTMLButtonElement>(null);
    const rightArrowRef = useRef<HTMLButtonElement>(null);
    const closeArrowRef = useRef<HTMLButtonElement>(null);
   
    // const leftArrow = document.querySelector('.left-arrow') as HTMLElement;
    // const rightArrow = document.querySelector('.right-arrow') as HTMLElement;    
    // const closeBtn = document.querySelector('.close-btn') as HTMLElement;

    useEffect( () => {
        const leftArrow = leftArrowRef.current as HTMLElement;
        const rightArrow = rightArrowRef.current as HTMLElement;
        const closeBtn = rightArrowRef.current as HTMLElement;

        leftArrow.addEventListener('click', () => {
            if (index > 0) {
                updateImage(index - 1);
            }
        })

        rightArrow.addEventListener('click', () => {
            if (index < images.length - 1){
                updateImage(index + 1);
            }
        })

        closeBtn.addEventListener('click', () => {
            popup.classList.toggle('active');
        })

        let index = 0; // will track our current image;

        images.forEach( (item:Element, i:number) => {
            console.log(item)

            item.addEventListener('click', () => {
                updateImage(i);
                popup.classList.toggle('active');
            })
        })

        const updateImage = (i:number) => {
            const path = `img/img${i+1}.png`;

            largeImage.src = path;
            imageName.textContent = path;
            imageIndex.textContent = `0${i+1}`;
            index = i;
        }
    })
    
    return (
        <>
        <div className="popup">
            <div className="top-bar">
                <p className="image-name">img1.png</p>
                <button ref = { closeArrowRef } className="close-btn"></button>
            </div>

            <button ref = { leftArrowRef } className="arrow-btn left-arrow">
                <img  src="img/arrow.png" alt=""/>
            </button>
            
            <button ref = { rightArrowRef } className="arrow-btn right-arrow">
                <img src="img/arrow.png" alt=""/>
            </button>
            
            <img src="img/img1.png" className="large-image" alt=""/>
            
            <h1 className="index">01</h1>
        </div>
    
        <div className="gallery">
            <div className="gallery-image">
                <img src="../img/img1.png" alt="image 1" className="image"/>
            </div>
            <div className="gallery-image">
                <img src="../img/img2.png" alt="image 2" className="image"/>
            </div>
            <div className="gallery-image">
                <img src="../img/img3.png" alt="image 3" className="image"/>
            </div>
            <div className="gallery-image">
                <img src="../img/img4.png" alt="image4" className="image"/>
            </div>
            
        </div>
        </>
      );
}

export default Gallery;