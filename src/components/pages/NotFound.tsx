import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const NotFound: React.FC = () => {
  const { goBack } = useHistory();
  return (
    <>
      <div>Page Not Found!!!</div>
      <Button onClick={() => goBack()}>Go Back...</Button>
    </>
  );
};

export default NotFound;
