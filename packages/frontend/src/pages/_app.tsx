import '../styles.css'
import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'

import { theme } from '../helpers/theme'
import { useApollo } from '../helpers/graphql/apollo-client'
import { SnackbarAlertContext } from '../helpers/contexts/snackbar'
import { Snackbar } from '../components/Snackbar'

export default function App({ pageProps, Component }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, maximum-scale=5" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <ApolloProvider client={apolloClient}>
          <SnackbarAlertContext.Provider>
            <Component {...pageProps} />

            <Snackbar />
          </SnackbarAlertContext.Provider>
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}
