import logo from '../../../../public/img/logo.svg'
import logoWhite from '../../../../public/img/logo_white.svg'
import style from './headerLogo.module.css';

type Props = {
    type?: string
}

export function HeadLogo({type="classic"}: Props): JSX.Element{

    if( type == "classic" ){
        return <img src={logo.src} className={style.logo} />
    }else{
        return(
            <>
                <img src={logo.src} className={style.logo} data-view="black"/>
                <img src={logoWhite.src} className={style.logo} data-view="white" />
            </>
        )
    }
}