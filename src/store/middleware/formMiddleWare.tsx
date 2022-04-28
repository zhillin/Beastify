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
    options: 'input' | 'localStorage' | 'check' | 'validate',
    // =======
): ThunkAction<void, MainState, unknown, Action<string>> => {
    // =======
    return async (dispatch, getState) => {

        // form object from srore
        const formObj: { input: {[key: string]: string}, validate: { state: boolean, message: string, }, check: boolean} = getState().formValue;
        // total price in basket
        const basketPrice = getState().basketData.subtotal;

        // add value in store
        const addOptions = () => {
            // value object
            let valueObj: {[key: string]: string} = {...formObj.input};

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
                // regular
                const checkString = /^\p{L}{1,200}$/u.test(value);
                // check value
                if(checkString || value == ''){
                    valueObj[type] = value;
                }
            }else{
                valueObj[type] = value;
            }
            // save json in lcoalstorage
            localStorage.setItem('form', JSON.stringify(valueObj))
            // update object value in store
            dispatch(changeFormAction({...formObj, input: valueObj}))
        }

        // get value in localstorage
        const localStorageOptions = () => {
            // check localstorage form element
            if(localStorage.form != undefined){
                // localstorage
                const localObj = JSON.parse(localStorage.form);
                // update object value in store
                dispatch(changeFormAction({...formObj, input: localObj}));
            }            
        }

        // check change enable or disable
        const checkOptions = () => {
            dispatch(changeFormAction({...formObj, check: !formObj.check}))
        }

        // validate form
        const validateOptions = () => {
            console.log(basketPrice);
            // check key input
            let formKey = true;
            // check empty data in input 
            for(let key in formObj.input){
                if(formObj.input[key] == ''){
                    formKey = false;
                }
            }
            // basket is empty
            if(basketPrice == 0 ){
                dispatch(changeFormAction(
                    {...formObj, validate: {state: false, message: 'fill the basket'}}
                ));
            }else 
            // empty data in input 
            if(!formKey){
                dispatch(changeFormAction(
                    {...formObj, validate: {state: false, message: 'fill in all fields in the form'}}
                ));
            }else 
            // no consent to data processing
            if(!formObj.check){
                dispatch(changeFormAction(
                    {...formObj, validate: {state: false, message: 'no consent to data processing'}}
                ));
            }
            // success
            else{
                dispatch(changeFormAction(
                    {...formObj, validate: {state: true, message: 'pay'}}
                ));
            }
        }

        // add value in store
        if(options == 'input'){
            addOptions();
        }
        // get value in localstorage
        if(options == 'localStorage'){
            localStorageOptions();
        }
        // check change enable or disable
        if(options == 'check'){
            checkOptions();
        }
        // validate form
        if(options == 'validate'){
            validateOptions();
        }
    }
}