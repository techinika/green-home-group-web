/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import thumb1 from 'assets/images/team/emmanuel.png';
import Product from 'components/cards/product';

const masonryOptions = { originTop: true };

const data = [
    {
      id: 1,
      slug: '',
      thumbnail: thumb1,
      showDescription: true,
      title: `How to work with prototype design with adobe xd featuring tools`,
      description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
    }
];

export const Listing = () => {
    return (
        <Box as="section" id="blog" sx={styles.section}>
            <Container>
                <SectionHeading
                    sx={styles.heading}
                    title="Order our product right here"
                    description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click."
                />
                <Masonry options={masonryOptions} sx={styles.postContainer}>
                {data?.map((product) => (
                    <Product key={product.id} post={product} />
                ))}
                </Masonry>
            </Container>
        </Box>
    )
}

const styles = {
    section: {
      pt: [8, null, null, 9, null, 11],
      pb: [8, null, null, 9, null, 11],
      position: 'relative',
    },
    heading: {
      mb: [6, 6, 7, 11],
    },
};