import {Input, useTheme} from '@rneui/themed';
import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
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
    <>
      <Input
        inputContainerStyle={{
          ...styles.input,
          borderBottomColor: theme.colors.secondary,
        }}
        value={inputValue}
        onChangeText={value => onChangeInputValue(value)}
      />
      {validationError && (
        <Text style={{...styles.errorText, color: theme.colors.error}}>
          {validationError}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  errorText: {
    marginBottom: 20,
  },
});
