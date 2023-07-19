import { init } from '@socialgouv/matomo-next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import '@/utils/fonts.css'
import { GlobalStyle, themes } from '@/utils/styles'

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      init({ url: 'https://stats.data.gouv.fr', siteId: 153 })
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ ...themes['default'] }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
