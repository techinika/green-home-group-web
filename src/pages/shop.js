import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import { Listing } from 'sections/listing';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Green Home Group | Shop"
          description="Green Home Group Rwanda, Manufacturer of best commodities to make your home green"
        />
        <Listing />
        
      </Layout>
    </ThemeProvider>
  );
}