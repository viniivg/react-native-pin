import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import {Box, Text, TextInput} from './styles';
import {PropsPinCodeView} from './Models';

const View: React.FC<PropsPinCodeView> = ({
  length,
  input,
  values,
  isFocused,
  selectedIndex,
  hideInput,
  handleChange,
  handlePress,
  handleKeyPress,
  handleFocus,
  handleBlur,
}) => {
  return (
    <Box>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Box direction align="flex-end" minHeight={45}>
          <TextInput
            ref={input}
            textContentType="oneTimeCode"
            value=""
            keyboardType="number-pad"
            returnKeyType="done"
            onKeyPress={handleKeyPress}
            onChangeText={(value: string) =>
              handleChange(
                value
                  .replace(/[^\d\s-/]/g, '')
                  .replace('-', '')
                  .replace(' ', ''),
              )
            }
            onFocus={handleFocus}
            onBlur={handleBlur}
            selectedIndex={selectedIndex}
            hideInput={hideInput}
          />

          {length.map((_, index: number) => (
            <Box
              key={index}
              width={34}
              ml={index > 0 ? 20 : 0}
              align="center"
              borderColor={
                selectedIndex >= index && isFocused ? '#8C368C' : '#888888'
              }>
              <Text align="center">{values[index] || ''}</Text>
            </Box>
          ))}
        </Box>
      </TouchableWithoutFeedback>
    </Box>
  );
};

export default View;
