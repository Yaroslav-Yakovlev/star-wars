import Header from './components/Header';
import { useEffect, useState } from 'react';
import { fetchData } from './servises/swDataHandler';
import CardSwitcher from './components/CardSwitcher';
import ImageDescription from './components/ImageDescription';
import { Box, ThemeProvider } from '@mui/material';
import theme from './components/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntityById } from './store/entitySlice';

const imageUrlBase = `https://starwars-visualguide.com//assets/img/`;

function App () {
  const [selectEntity, setSelectEntity] = useState('people');
  const [id, setId] = useState(1);
  const [items, setItems] = useState({});
  const [isLoad, setIsLoad] = useState(true);

  // const dispatch = useDispatch();
  // const { data, isLoading, } = useSelector(state => state.entities);
  // console.log('data', data);
  //
  // useEffect(() => {
  //  dispatch(fetchEntityById({ entity: selectEntity, id, }));
  // }, [dispatch, selectEntity, id]);

  const handleNextId = () => {
    setId((id) => id + 1);
  };

  const handlePreviousId = () => {
    setId((id) => id === 1 ? 1 : id - 1);
  };

  useEffect(() => {
    const data = async () => {
      const res = await fetchData(id, selectEntity);
      setItems(res);
    };

    setIsLoad(false);
    data();
  }, [id, selectEntity]);

  const handleSelectEntity = (entity) => {
    setSelectEntity(entity);
    setId(1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header entity={selectEntity} onSelectEntity={handleSelectEntity}/>
      <CardSwitcher
        handleNextId={handleNextId}
        handlePreviousId={handlePreviousId}
      />

      {isLoad
        ? (
          <Box sx={{ width: '70%', margin: 'auto', height: '100px' }}>
            <LinearProgress color="primary" variant="indeterminate"/>
          </Box>
        ) : (<ImageDescription
            selectEntity={selectEntity}
            items={items}
            imgUrl={`${imageUrlBase}${selectEntity === 'people'
              ? 'characters'
              : selectEntity}/${id}.jpg`
            }
          />
        )
      }
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
