import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import useStyles from './styles';
import { Page } from '../components';
import Image from 'next/image';

export const HomePage = () => {
  const classes = useStyles();
  const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url: string) => gtag.pageview(url);

  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <Page direction="column">
      <Grid container item className={classes.container}>
        <Grid
          container
          item
          className={classes.headingContainer}
          direction="column"
        >
          <Typography variant="h1" className={classes.boldHeading}>
            Framtiden är nu,
          </Typography>
          <Typography variant="h1" style={{ fontWeight: 300 }}>
            Vi hjälper dig att synas online!
          </Typography>
          <Typography variant="body1" className={classes.shortText}>
            Vi hjälper dig att synas online! Vi hjälper dig att synas online! Vi
            hjälper dig att synas online! Vi hjälper dig att synas online!
          </Typography>
          <Grid>
            <Button variant="contained">Se kundprojekt</Button>
            <Button>Kontakta oss</Button>
          </Grid>
        </Grid>
        <Image
          src="/images/nygrens-hero-illustration.png"
          alt="Me"
          width="500"
          height="500"
        />
      </Grid>
    </Page>
  );
};

export default HomePage;

// import Head from 'next/head';
// import { AppProps } from 'next/app';

// import '../../public/fonts/font.css';
// import { AppLayout } from '~src/layouts';
// import { getSidebarData } from '~src/graphql';

// const App = ({ Component, pageProps }: AppProps) => {
// const router = useRouter();
// useEffect(() => {
//   const handleRouteChange = (url: string) => gtag.pageview(url);

//   router.events.on('routeChangeComplete', handleRouteChange);
//   return () => {
//     router.events.off('routeChangeComplete', handleRouteChange);
//   };
// }, [router.events]);

//   return (
//     <>
//       <Head>
//         <title>Time to Tell</title>
//         <link rel="icon" href="/icons/favicon/favicon.ico" />
//         <meta name="viewport" content="width=device-width, initial-scale=0.41, initial-scale=1" />
//       </Head>
//       <AppLayout router={router}>
//         <Component {...pageProps} />
//       </AppLayout>
//     </>
//   );
// };

// App.getInitialProps = async () => {
//   const sidebarData = await getSidebarData();
//   return { pageProps: { sidebarData } };
// };

// export default App;
