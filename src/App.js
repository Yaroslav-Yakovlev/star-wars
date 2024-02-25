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
import { fetchPersonById } from './store/entitySlice';

const imageUrlBase = `https://starwars-visualguide.com//assets/img/`;

function App () {
  const [entity, setEntity] = useState('people');
  const [id, setId] = useState(1);
  const [items, setItems] = useState({});
  const [isLoad, setIsLoad] = useState(true);

  // const dispatch = useDispatch();
  // const { entity, isLoading, id } = useSelector(state => state.person)
  // console.log(entity);
  //
  // useEffect(() => {
  //  dispatch(fetchPersonById(id));
  // }, [dispatch, id]);

  const handleNextId = () => {
    setId((id) => id + 1);  // action
  };

  const handlePreviousId = () => {
    setId((id) => id === 1 ? 1 : id - 1);  // action
  };

  useEffect(() => {
    const data = async () => {
      const res = await fetchData(id, entity);
      setItems(res);
    };

    setIsLoad(false);
    data();
  }, [id, entity]);

  const handleSelectEntity = (entity) => {
    setEntity(entity);
    setId(1);  // action
  };

  return (
    <ThemeProvider theme={theme}>
      <Header entity={entity} onSelectEntity={handleSelectEntity}/>
      <CardSwitcher
        handleNextId={handleNextId}
        handlePreviousId={handlePreviousId}
      />
      {isLoad
        ? (
          <Box sx={{ width: '70%', margin: 'auto' }}>
            <LinearProgress color="primary" variant="indeterminate"/>
          </Box>
        ) : (<ImageDescription
            entity={entity}
            items={items}
            imgUrl={`${imageUrlBase}${entity === 'people'
              ? 'characters'
              : entity}/${id}.jpg`
            }
          />
        )
      }
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
