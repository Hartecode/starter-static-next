import { getPageProps } from '../../lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../lib/motionVariants';
import ReactMarkdown from 'react-markdown';

const About = ({ markdownFile }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
  >
    <ReactMarkdown>{markdownFile}</ReactMarkdown>
  </motion.div>
);

export const getStaticProps = async () => getPageProps('about');

export default About;
