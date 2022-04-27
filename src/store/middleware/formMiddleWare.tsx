import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { changeFormAction } from "../actions";
import { MainState } from "../reducer";


//
// Update value in input and get value in localstorage
//

export const formMiddleWare = (
    // id goods
    value: string,
    // type input
    type: string,
    // type operation
    options: 'add' | 'localStorage',
    // =======
): ThunkAction<void, MainState, unknown, Action<string>> => {
    // =======
    return async (dispatch, getState) => {

        // add value in store
        const addOptions = () => {
            // form object from srore
            const formObj = getState().formValue;
            // value object
            let valueObj: {[key: string]: string} = {...formObj};

            // check value phone input
            if(type == 'phone'){
                // regular
                const checkPhone = /[^1-9()-\s]/g.test(value);
                // check value
                if(!checkPhone){
                    valueObj[type] = value;
                }
            }else
            // check value string input
            if(type == 'name' || type == 'lastName' || type == 'country' || type == 'city'){
                console.log(value);
                // regular
                const checkString = /^\p{L}{1,200}$/u.test(value);
                // check value
                if(checkString){
                    valueObj[type] = value;
                }
            }else{
                valueObj[type] = value;
            }
            // save json in lcoalstorage
            localStorage.setItem('form', JSON.stringify(valueObj))
            // update object value in store
            dispatch(changeFormAction(valueObj))
        }

        // get value in localstorage
        const localStorageOptions = () => {
            // check localstorage form element
            if(localStorage.form != undefined){
                // localstorage
                const localObj = JSON.parse(localStorage.form);
                // update object value in store
                dispatch(changeFormAction(localObj));
            }            
        }

        // add value in store
        if(options == 'add'){
            addOptions();
        }
        // get value in localstorage
        if(options == 'localStorage'){
            localStorageOptions();
        }
    }
}