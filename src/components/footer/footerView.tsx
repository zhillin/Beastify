import style from './footer.module.css'


export function FooterView({footerView = 'all'}){

    const paramStyle = footerView == 'desk' ? style.footer_desk : null;

    return(
        <footer className={`${style.footer} ${paramStyle}`}>
            <div className={style.wrap}>
                <p className={style.copyright}>Copyright © 2022 beastify. All rights reserved.</p>
                <p className={style.link}>@beastify.shop</p>
            </div>
        </footer>
    )
}