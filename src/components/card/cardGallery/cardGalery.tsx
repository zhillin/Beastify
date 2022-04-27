import { useEffect, useRef } from "react";
import { jumpTo, scrollCord } from "./cardGaleryLogic";
import style from "../cardView/cardView.module.css";
import { BigImgRefType, SmallImgRefType } from "../cardType";


export function CardGalery({image}: {image: string[]}){

    // big img ref
    const bigImgRef: BigImgRefType = useRef([]);
    // small img navigation ref
    const smallImgRef: SmallImgRefType = useRef([]);
    
    // active element
    const galleryScroll = () => {
        scrollCord(bigImgRef, smallImgRef)
    }

    // click in navigation image
    const galleryClick = (event: any) => {
        jumpTo(event, bigImgRef);
    }

    // add event listener in component
    const eventGalleryAdd = () => {
        // add event scroll
        window.addEventListener('scroll', galleryScroll);
        // add event click
        smallImgRef.current.map(obj => {
            if(obj != null){
                obj.addEventListener('click', galleryClick);
            }
        });
    }

    // remove event listener in component
    const eventGalleryRemove = () => {
        // remove scroll
        window.removeEventListener('scroll', galleryScroll);
        // remove click
        smallImgRef.current.map(obj => {
            if(obj != null){
                obj.removeEventListener('click', galleryClick);
            }
        });
    }

    useEffect(() => {
        // console.log('=== MOUNT GALERY')
        // add event scroll
        eventGalleryAdd();
        // remove event scroll
        return () => {
            // console.log('=== UNMOUNT GALERY')
            eventGalleryRemove();
        }
    },[])

    // img left block
    const imgLeft = () =>
        image.map( (obj, index) =>
            <img 
                src={`${obj}`} 
                data-card={index} 
                data-sa={index}
                state-card={index == 0 ? 'enable' : 'disable'} 
                className={style.small_img}
                key={index} ref={el => smallImgRef.current[index] = el}
            />
        )
    
    // img container block
    const imgContainer = () =>
        image.map( (obj, index) =>
            <div 
                data-card={index} 
                data-sb={index} 
                className={style.item} 
                key={index} 
                ref={el => bigImgRef.current[index] = el}
            >
                <img src={`${obj}`} className={style.big_img} />
            </div>
        )

    return(
        <>
            <div className={style.left}>
                { imgLeft() }
            </div>
            <div className={style.container}>
                <div data-card="view" className={style.wrapper}>
                    { imgContainer() }
                </div>
            </div>
        </>
    )
}