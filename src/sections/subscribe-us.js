/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useCallback } from 'react';
import { jsx, Box, Container, Button, Flex, Label } from 'theme-ui';
import { grayscale, rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Input from 'components/input';
import Textarea from 'components/textarea';
import illustration from 'assets/images/subscribe-bg.png';

const SubscribeUs = () => {
  // const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted.');
  };

  // const handleCheckbox = useCallback(() => {
  //   setChecked(!checked);
  // }, [checked]);

  return (
    <Box as="section" sx={styles.section} variant="section.subscribe">
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="Do you like our Product?"
            description="We will be happy to hear from you. Send us a message and order your own, we will get back to you as soon as possible."
          />
          <Box as="form" sx={styles.subscribe} onSubmit={handleSubmit}>
            <Flex sx={styles.inputGroup}>
              <Label htmlFor="name" variant="styles.srOnly">
                Email
              </Label>
              <Input
                id="name"
                type="text"
                className="email-input"
                placeholder="Enter Your Name"
              />
            </Flex>
            <Flex sx={styles.inputGroup}>
              <Label htmlFor="email" variant="styles.srOnly">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="email-input"
                placeholder="Enter Email address"
              />
            </Flex>
            <Flex sx={styles.inputGroup}>
              <Label htmlFor="email" variant="styles.srOnly">
                Message
              </Label>
              <Textarea id="message" placeholder="Enter Your Message" className="email-input" rows={8} />
            </Flex>
            <Flex sx={styles.inputGroup}>
              <Button variant="secondary">Send Message</Button>
            </Flex>
            {/* <Box sx={styles.checkbox}>
              <Label htmlFor="no_spam" className={checked ? 'checked' : ''}>
                <Checkbox
                  id="no_spam"
                  onChange={handleCheckbox}
                  defaultChecked={checked}
                />
                Don???t provide any promotional message.
              </Label>
              
            </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

const styles = {
  section: {
    background: [
      'none',
      null,
      null,
      `#F8F0EA no-repeat center bottom / contain`,
    ],
    pt: [8, null, null, null, 10],
    pb: [8, null, null, 9, 11],
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    p: [null, null, null, '40px 110px 50px', '50px 50px', '40px'],
    gap: '50px',
    display: ['block', null, 'grid', 'block', 'grid'],
    alignItems: 'center',
    gridTemplateColumns: ['repeat(2, 1fr)'],
  },
  heading: {
    textAlign: ['center', null, 'left', 'center', 'left'],
    mb: ['30px', null, null, null, 0],
    ml: 0,
    h2: {
      fontSize: [6, null, null, null, null, 8, 9],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ['auto', null, null, null, 0],
      mr: ['auto', null, null, null, 0],
      maxWidth: 420,
    },
  },
  subscribe: {
    '.email-input': {
      mr: [0, null, null, '15px'],
      minHeight: ['50px', '50px', '60px'],
      mb: "10px"
    },
    button: {
      minHeight: ['50px', '50px', '60px'],
      fontSize: ['14px', '14px', '16px'],
      mt: ['15px', null, null, 0],
    },
  },
  inputGroup: {
    flexDirection: ['column', null, null, 'row'],
  },
  checkbox: {
    mt: ['24px'],
    label: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.14,
      color: rgba('#9095AD', 0.9),
      zIndex: 10,
      svg: {
        path: {
          fill: '#EFF3F7',
        },
      },
      '&.checked': {
        svg: {
          path: {
            fill: 'primary',
          },
        },
      },
    },
  },
};
