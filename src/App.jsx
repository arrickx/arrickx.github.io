import { motion } from 'framer-motion';
import './index.css';
import Newapp from './newApp.jsx';

function App() {
  return (
    <div>
      <Newapp/>
    </div>
    // <motion.div 
    //   className='min-h-screen flex items-center justify-center bg-gray-100'
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 1 }}
    // >
    //   <div className='text-center'>
    //     <motion.div 
    //       className='flex justify-center'
    //       initial={{ y: -250 }}
    //       animate={{ y: -10 }}
    //       transition={{ type: 'spring', stiffness: 120 }}
    //     >
    //       <img
    //         className='rounded-full'
    //         src='https://th.bing.com/th/id/OIG.fQPnFHafx91N7NpY3SfM?w=1024&h=1024&rs=1&pid=ImgDetMain'
    //         width='500'
    //         height='500'
    //       />
    //     </motion.div>
    //     <motion.h1 
    //       className='text-6xl font-bold text-gray-900 mb-4'
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ delay: 1 }}
    //     >
    //       Under Construction
    //     </motion.h1>
    //     <motion.p 
    //       className='text-gray-700'
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ delay: 1.5 }}
    //     >
    //       We&apos;re working hard to finish the development of this site. Our
    //       target launch date is
    //       <span className='font-bold text-gray-900'> January 2024</span>!
    //     </motion.p>
    //   </div>
    // </motion.div>
  );
}

export default App;
