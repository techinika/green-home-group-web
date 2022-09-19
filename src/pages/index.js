import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Features from 'sections/features';
import OurTeam from 'sections/our-team';
import WhyUs from 'sections/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/blog';
import { Listing } from 'sections/listing';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Green Home Group"
          description="Green Home Group Rwanda, Manufacturer of best commodities to make your home green"
        />
        <Banner />
        <Features />
        <OurTeam />
        <WhyUs />
        <Listing />
        {/* <Blog/> */}
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}
