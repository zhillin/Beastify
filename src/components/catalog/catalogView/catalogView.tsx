import style from './catalogView.module.css'
import Link from 'next/link';
import { } from '../catalog';
import { PropsCatalogView } from '../catalogType';


export function CatalogView({goods}: PropsCatalogView){

    const itm = () => {
        // jsx array
        let itmJsx = [];
        // jsx push in array
        for (let prop in goods) {
            itmJsx.push(
                <Link href={`/card/${goods[prop].id}`} key={goods[prop].id}>
                    <div className={style.item}>
                        <img src={`${goods[prop].img[0]}`} className={style.image} />
                        <div className={style.group}>
                            <p className={style.name}>{goods[prop].name}</p>
                            <p className={style.desc}>{goods[prop].size}</p>
                            <p className={style.cost}>{goods[prop].price} <span data-rub>₽</span></p>
                            <p className={style.soldout}>SOLD OUT</p>
                        </div>
                    </div>
                </Link>
            )
        }
        // return jsx array
        return itmJsx;
    }

    const showMore = () => {
        console.log('show more click');
    }

    return(
        <div className={style.catalog}>
            <h3 className={style.title}>available objects</h3>
            <div className={style.list}>
                { [...itm()] }
            </div>
            <div className={style.button}>
                <p className={style.button_txt}onClick={showMore}>Show more</p>
            </div>
        </div>
    )
}