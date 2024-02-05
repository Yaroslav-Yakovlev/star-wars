import Header from './components/Header';
import { useEffect, useState } from 'react';
import { fetchData } from './servises/swDataHandler';
import CardSwitcher from './components/CardSwitcher';
import ImageDescription from './components/ImageDescription';
import { ThemeProvider } from '@mui/material';
import theme from './components/styles';

const imageUrlBase = `https://starwars-visualguide.com//assets/img/`;

function App() {
  const [entity, setEntity] = useState('people');
  const [id, setId] = useState(1);
  const [items, setItems] = useState({});

  const handleNextId = () => {
    setId((id) => id + 1);
  };

  const handlePreviousId = () => {
    setId((id) => id === 1 ? 1 : id - 1);
  }

  useEffect(() => {
    const data = async () => {
      const res = await fetchData(id, entity);
      setItems(res);
    };
    data();
  }, [id, entity]);

  const handleSelectEntity = (entity) => {
    setEntity(entity);
    setId(1);
  };

  return (
      <ThemeProvider theme={theme}>
      <Header entity={entity} onSelectEntity={handleSelectEntity}/>
      <CardSwitcher
        handleNextId={handleNextId}
        handlePreviousId={handlePreviousId}
      />
      <ImageDescription
        entity={entity}
        items={items}
        imgUrl={`${imageUrlBase}${entity === 'people'
          ? 'characters'
          :  entity}/${id}.jpg`
      }
      />
      </ThemeProvider>
  );
}

export default App;
