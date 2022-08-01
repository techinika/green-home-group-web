/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Textarea as TextField } from 'theme-ui';
import { rgba } from 'polished';

const Textarea = ({ ...props }) => {
  return <TextField sx={styles.textarea} {...props} />;
};

export default Textarea;

const styles = {
  textarea: {
    backgroundColor: '#EFF3F7',
    borderRadius: '5px',
    fontFamily: 'body',
    flexGrow: 1,
    p: ['24px 24px'],
    height: 'auto',
    minHeight: '60px',
    width: 'auto',
    outline: 'none',
    border: '0',
    '::placeholder': {
      color: rgba('#02073E', 0.4),
    },
    ':focus': {
        border: '3px solid teal'
    }
  },
};
