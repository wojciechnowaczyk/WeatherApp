import {Button, Icon} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';

type OutlinedButtonProps = {
  title?: string;
  onPress: () => void;
  isIconBtn?: boolean;
};

export const OutlinedButton = ({
  title,
  onPress,
  isIconBtn,
}: OutlinedButtonProps) => {
  return (
    <Button
      title={title ?? ''}
      buttonStyle={{...styles.button}}
      type="outline"
      containerStyle={styles.container}
      onPress={onPress}>
      {isIconBtn && <Icon raised name="trash" type="font-awesome" />}
    </Button>
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
});
