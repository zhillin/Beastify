import style from './catalogView.module.css'
import Link from 'next/link';
import { catalogItmNum } from '../catalog';
import { PropsCatalogView } from '../catalogType';
import { useDispatch, useSelector } from 'react-redux';
import { MainState } from '../../../store/reducer';
import { goodsDataAsync } from '../../../store/middleware/goodsDataAsync';
import { showCatalogAction } from '../../../store/actions';
import { catalogShowMore } from '../../../store/middleware/catalogShowMore';


export function CatalogView({goods, catalogShow}: PropsCatalogView){

    // dispatch
    const dispatch = useDispatch();
    // amount number
    const amountNumber = useSelector<MainState, number>(state => state.amountData);

    // item JSX element
    const itm = () => {
        // jsx array
        let itmJsx = [];
        // jsx push in array
        for (let prop in goods) {
            // price JSX element
            let price = () => {
                if(goods[prop].remainder != 0){
                    return <p className={style.cost}>{goods[prop].price} <span data-rub>₽</span></p>;
                }else{
                    return <p className={style.soldout}>SOLD OUT</p>;
                }
            }
            // 
            itmJsx.push(
                <Link href={`/card/${goods[prop].id}`} key={goods[prop].id}>
                    <div className={style.item}>
                        <img src={`${goods[prop].img[0]}`} className={style.image} />
                        <div className={style.group}>
                            <p className={style.name}>{goods[prop].name}</p>
                            <p className={style.desc}>{goods[prop].size}</p>
                            {price()}
                        </div>
                    </div>
                </Link>
            )
        }
        // return jsx array
        return itmJsx;
    }

    return(
        <div className={style.catalog}>
            <h3 className={style.title}>available objects</h3>
            <div className={style.list}>
                { [...itm()] }
            </div>
            <div className={style.button}>
                <p className={style.button_txt} onClick={ () => dispatch(catalogShowMore()) }>
                    {catalogShow != amountNumber ? 'Show more' : 'Hide all'}
                </p>
            </div>
        </div>
    )
}