import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { applyMiddleware, createStore } from 'redux';
import { mainReducer } from '../src/store/reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// create redux store
export const store = createStore(
  mainReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
