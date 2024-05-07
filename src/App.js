import Header from './components/Header';
import { useEffect, useState } from 'react';
import CardSwitcher from './components/CardSwitcher';
import ImageDescription from './components/ImageDescription';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './components/styles';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntityById, setEntityFilterValue } from './store/entitySlice';
import Loader from './components/Loader';
import { selectIsLoading } from './store/selectors';

const App = () => {
  const [selectEntity, setSelectEntity] = useState('people');
  const [entityId, setEntityId] = useState(1);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchEntityById({ entity: selectEntity, id: entityId }));
    dispatch(setEntityFilterValue(selectEntity));
  }, [dispatch, selectEntity, entityId]);

  const switchToNextCharacterById = () => {
    setEntityId((id) => id + 1);
  };

  const switchToPreviousCharacterById = () => {
    setEntityId((id) => id === 1 ? 1 : id - 1);
  };

  const handleSelectEntity = (entity) => {
    setSelectEntity(entity);
    setEntityId(1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {isLoading && <Loader/>}
      <Header onSelectEntity={handleSelectEntity}/>
      <CardSwitcher
        switchToNextCharacterById={switchToNextCharacterById}
        switchToPreviousCharacterById={switchToPreviousCharacterById}
      />
      <ImageDescription selectEntity={selectEntity}/>
      <Footer/>
    </ThemeProvider>
  );
};

export default App;
