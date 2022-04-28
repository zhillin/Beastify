import logo from '../../../../public/img/logo.svg'
import logoWhite from '../../../../public/img/logo_white.svg'
import style from './headerLogo.module.css';

type Props = {
    type?: string,
    menu?: boolean
}

export function HeadLogo({type="classic", menu=false}: Props){

    if( type == "classic" ){
        return(
            <>
                <img src={logo.src} className={style.logo} data-menu={!menu} />
                <img src={logoWhite.src} className={style.logo} data-menu={menu} data-menu-white />
            </>
        )
    }else{
        return(
            <>
                <img src={logo.src} className={style.logo} data-view="black"/>
                <img src={logoWhite.src} className={style.logo} data-view="white" />
            </>
        )
    }
}