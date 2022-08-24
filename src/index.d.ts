import {Component} from 'react';
import {Constructor, NativeMethods} from 'react-native';

import {PropsPinCode} from './components/PinCode/Models';

declare class PropsPinCodeComponent extends Component<PropsPinCode> {}
declare const PinCodeBaseProps: Constructor<NativeMethods> &
  typeof PropsPinCodeComponent;
export class PinCode extends PinCodeBaseProps {}
