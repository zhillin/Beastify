import style from './catalog.module.css'
import img from '../../../public/img/catalog_img.jpg'
import Link from 'next/link';

// data card
const data = ['one', 'two', 'three', 'fore', 'five', 'six'];

export function CatalogView(){

    // goods card 
    const itm = () =>
        data.map( (obj, index) =>
            <Link href="/card/ease" key={index}>
                <div className={style.item}>
                    <img src={`${img.src}`} className={style.image} />
                    <div className={style.group}>
                        <p className={style.name}>{obj}</p>
                        <p className={style.desc}>Color: silver | Size: 480х210х150mm | Polyester resin</p>
                        <p className={style.cost}>150000 <span data-rub>₽</span></p>
                        <p className={style.soldout}>SOLD OUT</p>
                    </div>
                </div>
            </Link>
        );

    return(
        <div className={style.catalog}>
            <h3 className={style.title}>available objects</h3>
            <div className={style.list}>
                { itm() }
            </div>
            <div className={style.button}>
                <p className={style.button_txt}>Show more</p>
            </div>
        </div>
    )
}