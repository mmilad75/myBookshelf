import React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';

const TextInput: React.FC<TextInputProps> = ({children, ...props}) => <RNTextInput {...props}>{children}</RNTextInput>;

export default TextInput;
