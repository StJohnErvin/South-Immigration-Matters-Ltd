import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import Features from 'sections/features';
import IntroVideo from 'sections/intro-video';
import UsefulFeatures from 'sections/useful-features';
import Widgets from 'sections/widgets';
import Pricing from 'sections/pricing';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Startup Landing 010" />
        <Banner />
        <UltimateFeatures />
        <Features />
        <IntroVideo />
        <UsefulFeatures />
        <Widgets />
        <Pricing />
        <Faq />
      </Layout>
    </ThemeProvider>
  );
}
