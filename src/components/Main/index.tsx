import Button from '../UI/Button';

const Main = () => {
  return (
    <main className='main'>
      <h1>Main Content</h1>
      <Button label='Click Me' onClick={() => alert('Button Clicked!')} />
    </main>
  );
};

export default Main;
