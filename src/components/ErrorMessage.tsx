import {Dialog, Text} from '@rneui/themed';
import React from 'react';
import {useErrors} from '../hooks/useErrors';
import {CustomButton} from './CustomButton';

export const ErrorMessage: React.FunctionComponent<{}> = () => {
  const {toggleErrorsBox, isErrorBoxVisible, errorMessage} = useErrors();

  return (
    <Dialog isVisible={isErrorBoxVisible} onBackdropPress={toggleErrorsBox}>
      <Dialog.Title title="Error" />
      <Text>{errorMessage ?? ''}</Text>
      <Dialog.Actions>
        <CustomButton title="Close" onPress={toggleErrorsBox} />
      </Dialog.Actions>
    </Dialog>
  );
};
