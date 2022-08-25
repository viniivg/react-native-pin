/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';

import {PinCode} from './components';

export default function App() {
  const [value, setValue] = useState('');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <PinCode value={value} onChange={setValue} length={4} />
    </View>
  );
}
