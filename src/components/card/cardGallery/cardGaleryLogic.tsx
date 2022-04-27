import gsap from "gsap";
import { BigImgRefType, RefDivType, SmallImgRefType } from "../cardType";

const cord = (imgelem: RefDivType) => {
    // result
    let el: {obj: HTMLDivElement, cord: number}[] = [];
    // calculation
    imgelem.map( obj => {
        // check null
        if(obj == null) return el;
        // detected size
        let top = obj.getBoundingClientRect().top,
            height = obj.getBoundingClientRect().height/2,
            screen = innerHeight/2;
        // calculation size
        let cord = top + height - screen;
        // trasform size
        cord < 0 ? cord *= -1 : ''; 
        // push result
        el.push({'obj': obj, 'cord': cord});
    });
    // return result
    return el;
}

const stateEl = (id: number, smallImgRef: SmallImgRefType ) => {
    // select element navigation    
    let el = smallImgRef.current[id]; 
    // disable all element
    smallImgRef.current.map(obj => {
        if(obj != null){
            obj.setAttribute('state-card', 'disable');
        }
    });
    // enable select element
    if(el != null){
        el.setAttribute('state-card', 'enable');
    }
}

export const scrollCord = (bigImgRef: BigImgRefType, smallImgRef: SmallImgRefType ) => {
        // calculation position
        let elem: {obj: HTMLDivElement, cord: number}[] = cord( bigImgRef.current );
        // select position
        elem.sort(function(a, b){
            return a.cord-b.cord;
        });
        // select id element
        let id: number = Number( elem[0].obj.getAttribute('data-card') );
        // state element navigation
        stateEl(id, smallImgRef);
}

export const jumpTo = (event: MouseEvent, bigImgRef: BigImgRefType) => {
    // jump logic function
    const jumpToLogic = () => {
        // num event
        // @ts-expect-error
        const num = event.currentTarget.getAttribute('data-sa');
        // cord scroll element
        const el = bigImgRef.current[num];
        // html dom element
        const htmlDomEl = document.querySelector('html');
        // 
        let size: number = 0;
        // cord
        if(el != null){
            size = el.getBoundingClientRect().top + scrollY;
        }
        // animation scroll
        gsap.to( htmlDomEl, {
            duration: 0.8, 
            ease: "Power2.easeOut", 
            scrollTop: size,
        });
    }
    // check event currentTarget
    if(event.currentTarget != null){
        jumpToLogic();
    }
}