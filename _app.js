import '@/styles/globals.css'
import MainLayout from '@/compoments/mainLayout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
<MainLayout>
    <Component {...pageProps} />  
    </MainLayout>
)
  
}
