import HeaderPage from '@components/common/HeaderPage';
import PageDescription from '@components/common/PageDescription';
import SearchInput from '@components/UI/SearchInput';
import { useState } from 'react';
const OurCoffee = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <section className='our-product-page'>
      <HeaderPage />
      <PageDescription />

      <SearchInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        id='search'
      />
    </section>
  );
};

export default OurCoffee;
