import styled from 'styled-components/native';

import {BoxProps, TextInputProps, TextProps} from './Models';

export const TextInput = styled.TextInput<TextInputProps>`
  width: 40px;
  height: 45px;
  position: absolute;
  font-size: 20px;
  text-align: center;
  background-color: transparent;
  left: ${({selectedIndex}) => selectedIndex * 52}px;
  opacity: ${({hideInput}) => (hideInput ? 0 : 1)};
`;

export const Box = styled.View<BoxProps>`
  width: ${({width}) => (width > 0 ? `${width}px` : width ?? 'auto')};
  flex-direction: ${({direction}) => (direction ? 'row' : 'column')};
  align-items: ${({align}) => align ?? 'flex-start'};
  justify-content: ${({justify}) => justify ?? 'flex-start'};
  background-color: ${({bgColor}) => bgColor ?? 'transparent'};
  border-bottom-width: ${({borderColor}) => (borderColor ? 2 : 0)}px;
  border-bottom-color: ${({borderColor}) => borderColor ?? 'none'};
  margin-left: ${({ml}) => ml ?? 0}px;
  margin-top: ${({mt}) => mt ?? 0}px;
`;

export const Text = styled.Text<TextProps>`
  font-size: 30px;
  font-weight: 600;
  color: #505050;
`;
