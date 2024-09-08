import {Button, useTheme} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';

type OutlinedButtonProps = {
  title: string;
  onPress: () => void;
};

export const OutlinedButton = ({title, onPress}: OutlinedButtonProps) => {
  const {theme} = useTheme();

  return (
    <Button
      title={title}
      buttonStyle={{...styles.button, borderColor: theme.colors.error}}
      type="outline"
      titleStyle={{color: theme.colors.error}}
      containerStyle={styles.container}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: 40,
    height: 40,
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    color: 'rgba(78, 116, 289, 1)',
  },
});
