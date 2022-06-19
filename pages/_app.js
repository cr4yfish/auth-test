import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';


const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps: { session, ...pageProps} }) {


  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
            <NextThemesProvider
    defaultTheme='dark'
    attribute='class'
    value={{dark: darkTheme.className}}
  >
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  </NextThemesProvider>
    </SessionProvider>


  )
}
export default MyApp
