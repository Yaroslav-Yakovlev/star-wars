import React from 'react';
import {
  Box,
  Paper, Stack,
  useMediaQuery,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import CustomSnackbar from '../CustomSnackbar';
import {
  selectEntitiesData,
} from '../../store/selectors';
import EntityDescription from './EntityDescription';
import EntityCardImage from './EntityCardImage';

const EntityCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  const { name, imageUrl, ...entityInfo } = useSelector(selectEntitiesData);

  return (
    <>
      <Box
        data-testid='entity-card'
        sx={{
          paddingBottom: '100px',
          width: '100%',
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Paper
          sx={{
            padding: '32px',
            width: '75%',
            margin: 'auto',
            backgroundColor: theme.palette.primary.light,
          }}
          variant="elevation"
          elevation={5}
          style={{ marginBottom: '20px' }}
        >
          <Stack direction={isMobile ? 'row' : 'column'} spacing={4}>
            <EntityCardImage
              name={name}
              imageUrl={imageUrl}
              entityInfo={entityInfo}
            />
            <EntityDescription
              name={name}
              entityInfo={entityInfo}
            />
          </Stack>
        </Paper>
      </Box>
      <CustomSnackbar/>
    </>
  );
};

export default EntityCard;
