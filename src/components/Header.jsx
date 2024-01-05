import PropTypes from 'prop-types';

const Header = ({ name, statement, src, alt }) => {
  return (
    <header className='w-full max-w-[1440px] mt-14 max-md:max-w-full max-md:mt-40 section-break'>
    <div className='gap-5 flex max-md:flex-col max-md:items-center max-md:gap-0'>
      <article className='flex flex-col items-stretch w-[55%] mt-[25%] max-md:w-full max-md:ml-0 max-md:mt-20 max-md:order-2'>
        <div className='justify-center items-stretch flex flex-col'>
          <h1 className='text-white text-left font-bold text-5xl tracking-widest leading-[80px] max-xl:text-4xl max-md:text-3xl max-md:leading-10  max-md:text-center'>
            {name}
          </h1>
          <p className='text-zinc-400 text-left text-3xl leading-15 max-xl:text-2xl max-lg:text-xl max-md:text-center max-md:mt-6'>
            {statement}
          </p>
        </div>
      </article>
      <figure className='flex flex-col items-stretch w-[45%] max-w-xl max-md:w-full max-md:max-w-[280px] max-md:order1'>
        <img
          loading='lazy'
          src={src}
          alt={alt}
          className='w-full max-md:mt-50 rounded-[50px] '
        />
      </figure>
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
