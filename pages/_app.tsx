import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { applyMiddleware, createStore, Middleware } from 'redux';
import { mainReducer } from '../src/store/reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// create redux store
const store = createStore(
  mainReducer,
  composeWithDevTools(
    applyMiddleware()
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
