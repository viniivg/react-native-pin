import React, {useRef, useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';

import {PropsPinCode} from './Models';
import View from './view';

const PinCode: React.FC<PropsPinCode> = ({length = 5, value, onChange}) => {
  const input = useRef<TextInput>();
  const [isFocused, setIsFocused] = useState(false);
  const CODE_LENGTH = new Array(length).fill(0);
  const values = value.split('');
  const hideInput = !(values.length < CODE_LENGTH.length);
  const selectedIndex =
    values.length < CODE_LENGTH.length ? values.length : CODE_LENGTH.length - 1;

  const handleChange = (valueParam: string) => {
    if (value.length >= CODE_LENGTH.length) {
      return null;
    }
    onChange(
      value === ''
        ? valueParam
        : (value + valueParam).slice(0, CODE_LENGTH.length),
    );
  };

  const handlePress = () => {
    input?.current?.blur();
    input?.current?.focus();
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (event.nativeEvent.key === 'Backspace') {
      onChange(value.slice(0, value.length - 1));
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    input.current?.blur();
  };

  return (
    <View
      values={values}
      length={CODE_LENGTH}
      input={input}
      isFocused={isFocused}
      hideInput={hideInput}
      selectedIndex={selectedIndex}
      handleKeyPress={handleKeyPress}
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      handlePress={handlePress}
    />
  );
};

export default PinCode;
