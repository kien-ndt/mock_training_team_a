import '../styles/globals.css'
import type { AppProps } from 'next/app'

import PersistentDrawerLeft from "../components/layout/mainLayout";
function MyApp({ Component, pageProps }: AppProps) {
  return(   
  <PersistentDrawerLeft titleContent={(Component as any).titleContent} >
    <Component {...pageProps} />
  </PersistentDrawerLeft>
  )
}

export default MyApp
