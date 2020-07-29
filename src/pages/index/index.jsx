// import style from './index.module.scss';
import { getPageProps } from '../../lib/api';
import { motion } from 'framer-motion';
import { pageVariants } from '../../lib/motionVariants';
import { useCMS } from 'tinacms';
import { useForm, usePlugin } from 'tinacms';

const Home = ({ content }) => {
  const cms = useCMS();
  const formConfig = {
    id: 'home-page01', // a unique identifier for this instance of the form
    label: 'Home Page', // name of the form to appear in the sidebar
    initialValues: { content }, // populate the form with starting values
    onSubmit: (values) => {
      // do something with the data when the form is submitted
      alert(`Submitting ${JSON.stringify(values)}`);
    },
    fields: [
      // define fields to appear in the form
      {
        name: 'content', // field name maps to the corresponding key in initialValues
        label: 'Post Title', // label that appears above the field
        component: 'textarea', // the component used to handle UI and input to the field
      },
    ],
  };

  const [data, form] = useForm(formConfig);
  usePlugin(form);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <button onClick={() => cms.toggle()} style={{ border: '1px solid #000' }}>
        {cms.enabled ? `Exit Tina` : `Edit with Tina`}
      </button>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </motion.div>
  );
};

export const getStaticProps = async () => getPageProps('index');

export default Home;
