import {Icon, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import React from 'react';

type RowProps = {
  icon: string;
  description: string;
};

export const Row = ({icon, description}: RowProps) => {
  return (
    <View style={styles.row}>
      <Icon raised name={icon} type="font-awesome" />
      <Text h3>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
