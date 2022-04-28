import style from './notFoundView.module.css';

export function NotFoundView(){
    return (
        <div className={style.hold}>
            <div className={style.hold_overlay}>
                <p className={style.hold_overlay_txt}>404</p>
            </div>
        </div>
    );
}