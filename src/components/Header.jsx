import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Header = ({ name, statement, src, alt }) => {
  return (
    <header className='w-full max-w-[1440px] mt-14 max-md:max-w-full max-md:mt-40 section-break'>
    <div className='gap-5 flex max-md:flex-col max-md:items-center max-md:gap-0'>
      <motion.article 
        className='flex flex-col items-stretch w-[55%] mt-[25%] max-md:w-full max-md:ml-0 max-md:mt-20 max-md:order-2'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className='justify-center items-stretch flex flex-col'>
          <motion.h1 
            className='text-neutral-700 dark:text-white text-left font-bold text-5xl tracking-widest leading-[80px] max-xl:text-4xl max-md:text-3xl max-md:leading-10  max-md:text-center'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {name}
          </motion.h1>
          <motion.p 
            className='text-neutral-500 dark:text-zinc-400 text-left text-3xl leading-15 max-xl:text-2xl max-lg:text-xl max-md:text-center max-md:mt-6'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {statement}
          </motion.p>
        </div>
      </motion.article>
      <motion.figure 
        className='flex flex-col items-stretch w-[45%] max-w-xl max-md:w-full max-md:max-w-[280px] max-md:order1'
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.img
          loading='lazy'
          src={src}
          alt={alt}
          className='w-full max-md:mt-50 rounded-[50px] '
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </motion.figure>
    </div>
  </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  statement: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default Header;
