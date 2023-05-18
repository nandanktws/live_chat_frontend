import '@/styles/globals.css'
import { MyProvider } from '@/provider/context/myContext'

import { store } from '../store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </MyProvider>
  )
}
