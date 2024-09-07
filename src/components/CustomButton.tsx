import React from 'react';
import {Button} from '@rneui/themed';
import {StyleSheet} from 'react-native';

type CustomButtonProp = {
  title: string;
  onPress: () => {};
};

export const CustomButton = ({title, onPress}: CustomButtonProp) => {
  return (
    <Button
      radius={'sm'}
      type="solid"
      title={title}
      containerStyle={styles.button}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 100,
    marginBottom: 20,
  },
});
