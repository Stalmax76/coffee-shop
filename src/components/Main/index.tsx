import Logo from '../UI/Logo';
import Title from '../common/Title';

const Main = () => {
  return (
    <main className='main'>
      <div>
        <Logo />
        <Title
          variant='page'
          text='Welcome to our coffee shop 👋! And to do me very happy!'
          color='black'
          withDecor
        />
      </div>
    </main>
  );
};

export default Main;
