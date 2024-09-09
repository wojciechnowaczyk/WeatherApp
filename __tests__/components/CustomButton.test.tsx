import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CustomButton} from '../../src/components/CustomButton';

describe('CustomButton Component', () => {
  it('should render the button with the correct title', () => {
    const {getByText} = render(
      <CustomButton title="Click Me" onPress={jest.fn()} />,
    );

    expect(getByText('Click Me')).toBeTruthy();
  });

  it('should call onPress when button is pressed', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <CustomButton title="Click Me" onPress={mockOnPress} />,
    );

    fireEvent.press(getByText('Click Me'));

    expect(mockOnPress).toHaveBeenCalled();
  });
});
