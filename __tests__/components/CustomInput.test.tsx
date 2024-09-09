import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {CustomInput} from '../../src/components/CustomInput';
import {validateInput} from '../../src/helpers/validateInput';

jest.mock('../helpers/validateInput', () => ({
  validateInput: jest.fn(),
}));

describe('CustomInput Component Test', () => {
  const mockSetInputValue = jest.fn();
  const mockValidateInput = jest.mocked(validateInput);

  beforeEach(() => {
    mockSetInputValue.mockClear();
    mockValidateInput.mockClear();
  });

  it('should render CustomInput Component', () => {
    render(<CustomInput inputValue="" setInputValue={mockSetInputValue} />);

    expect(screen.getByRole('textbox')).toBeTruthy();
  });

  it('should run setInput when no errors', () => {
    mockValidateInput.mockReturnValue(null);

    render(<CustomInput inputValue="" setInputValue={mockSetInputValue} />);

    fireEvent.changeText(screen.getByRole('textbox'), 'new value');
    expect(mockSetInputValue).toHaveBeenCalledWith('new value');
  });

  it('should run the input validation', () => {
    const errorMessage = 'Invalid input';
    mockValidateInput.mockReturnValue(errorMessage);

    render(<CustomInput inputValue="" setInputValue={mockSetInputValue} />);

    fireEvent.changeText(screen.getByRole('textbox'), 'invalid value');
    expect(screen.getByText(errorMessage)).toBeTruthy();
  });

  it('it should clear validation error', () => {
    const errorMessage = 'Invalid input';
    mockValidateInput.mockReturnValue(errorMessage);

    const {rerender} = render(
      <CustomInput inputValue="" setInputValue={mockSetInputValue} />,
    );

    fireEvent.changeText(screen.getByRole('textbox'), 'valid value');
    mockValidateInput.mockReturnValue(null);
    rerender(
      <CustomInput
        inputValue="valid value"
        setInputValue={mockSetInputValue}
      />,
    );

    expect(screen.queryByText(errorMessage)).toBeNull();
  });
});
