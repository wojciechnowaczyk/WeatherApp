import {Button} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';

type OutlinedButtonProps = {
  title: string;
  onPress: () => void;
};

export const OutlinedButton = ({title, onPress}: OutlinedButtonProps) => {
  return (
    <Button
      title={title}
      buttonStyle={styles.button}
      type="outline"
      titleStyle={styles.title}
      containerStyle={styles.container}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: 'rgba(78, 116, 289, 1)',
    borderRadius: 30,
    width: 50,
    height: 50,
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    color: 'rgba(78, 116, 289, 1)',
  },
});
