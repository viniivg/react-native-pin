import {Ref} from 'react';

import {NativeSyntheticEvent, TextInputKeyPressEventData} from 'react-native';

export interface PropsPinCode {
  length?: number;
  value: string;
  onChange: (value: string) => void;
}

export interface PropsPinCodeView {
  input: Ref<any>;
  length: Array<number>;
  values: string | any;
  selectedIndex: number;
  hideInput: boolean;
  isFocused: boolean;
  handleChange: (valueParam: string) => void;
  handleKeyPress: (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => void;
  handlePress: () => void;
  handleFocus: () => void;
  handleBlur: () => void;
}

export interface TextInputProps {
  selectedIndex: number;
  hideInput: boolean;
}

export interface TextProps {}

export interface BoxProps {
  width: string | number;
  direction: string;
  align: FlexAlignType;
  justify: JustifyContentType;
  bgColor: string;
  borderColor: string;
  ml: string;
  mt: string;
}

type FlexAlignType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
