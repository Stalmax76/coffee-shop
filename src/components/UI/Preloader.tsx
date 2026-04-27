import './_preloader.scss';

const Preloader = () => {
  return (
    <div className='preloader-wrapper'>
      <div className='preloader'>
        <span className='preloader__dot' />
        <span className='preloader__dot' />
        <span className='preloader__dot' />
      </div>
    </div>
  );
};

export default Preloader;
