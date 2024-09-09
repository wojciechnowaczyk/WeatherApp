import {Input, useTheme} from '@rneui/themed';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {validateInput} from '../helpers/validateInput';

type CustomInputProps = {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
};

export const CustomInput = ({setInputValue, inputValue}: CustomInputProps) => {
  const {theme} = useTheme();

  const [validationError, setValidationError] = useState<string>('');

  const onChangeInputValue = (value: string) => {
    const errors = validateInput(value);

    if (errors) {
      setInputValue('');
      setValidationError(errors);
    } else {
      setInputValue(value);
      setValidationError('');
    }
  };

  return (
    <View style={styles.inputBox}>
      <Input
        inputStyle={styles.input}
        inputContainerStyle={styles.container}
        value={inputValue}
        onChangeText={value => onChangeInputValue(value)}
      />
      {validationError && (
        <Text style={{...styles.errorText, color: theme.colors.error}}>
          {validationError}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 20,
  },
  input: {
    marginVertical: 20,
    paddingVertical: 20,
  },
  inputBox: {
    width: 300,
  },
  container: {
    borderBottomWidth: 0,
  },
});
