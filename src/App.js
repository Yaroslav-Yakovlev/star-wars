import Header from './components/Header';
import { useEffect, useState } from 'react';
import CardSwitcher from './components/CardSwitcher';
import ImageDescription from './components/ImageDescription';
import { ThemeProvider } from '@mui/material';
import theme from './components/styles';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntityById, addEntity } from './store/entitySlice';
import Loader from './components/Loader';

const App = () => {
  const [selectEntity, setSelectEntity] = useState('people');
  const [id, setId] = useState(1);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.entities);

  useEffect(() => {
    dispatch(fetchEntityById({ entity: selectEntity, id }));
    dispatch(addEntity(selectEntity));
  }, [dispatch, selectEntity, id]);

  const handleNextId = () => {
    setId((id) => id + 1);
  };

  const handlePreviousId = () => {
    setId((id) => id === 1 ? 1 : id - 1);
  };

  const handleSelectEntity = (entity) => {
    setSelectEntity(entity);
    setId(1);
  };

  return (
    <ThemeProvider theme={theme}>
      {isLoading && <Loader/>}
      <Header onSelectEntity={handleSelectEntity}/>
      <CardSwitcher
        handleNextId={handleNextId}
        handlePreviousId={handlePreviousId}
      />
      <ImageDescription selectEntity={selectEntity}/>
      <Footer/>
    </ThemeProvider>
  );
};

export default App;
