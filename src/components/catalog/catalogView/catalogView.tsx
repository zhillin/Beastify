import style from './catalogView.module.css'
import Link from 'next/link';
import { PropsCatalog } from '../catalog';


export function CatalogView({goods}: PropsCatalog){

    // goods card
    const itm = () =>
        goods.data.map( obj =>
            <Link href="/card/ease" key={obj.id}>
                <div className={style.item}>
                    <img src={`${obj.img[0]}`} className={style.image} />
                    <div className={style.group}>
                        <p className={style.name}>{obj.name}</p>
                        <p className={style.desc}>{obj.size}</p>
                        <p className={style.cost}>{obj.price} <span data-rub>₽</span></p>
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