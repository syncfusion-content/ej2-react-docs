import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
// sets mask with the mask element '#' which accepts any single digit from '0' to '9',
// space, + and - signs
ReactDOM.render(<MaskedTextBoxComponent mask={'#####'} placeholder={'Mask ##### (ex: 012+-)'} floatLabelType='Always'/>, document.getElementById('mask1'));
// sets mask format with the mask element 'L' which allows only alphabets('A-Z and a-z')
ReactDOM.render(<MaskedTextBoxComponent mask={'LLLLLL'} placeholder={'Mask LLLLLL (ex: Sample)'} floatLabelType='Always'/>, document.getElementById('mask2'));
// sets mask format with the mask element '&' which allows `alphabets`, `numbers`
// and `special characters`
ReactDOM.render(<MaskedTextBoxComponent mask={'&&&&&'} placeholder={'Mask &&&&& (ex: A12@#)'} floatLabelType='Always'/>, document.getElementById('mask3'));
// sets mask format with the mask element `>` which converts all characters that follow
// to upper case and `<` which converts all characters that follow to lower case
ReactDOM.render(<MaskedTextBoxComponent mask={'>LLL<LLL'} placeholder={'Mask >LLL<LL (ex: SAMple)'} floatLabelType='Always'/>, document.getElementById('mask4'));
// sets mask format with the mask element '\\' which turns mask element `A` into
// a literal and it displays the alphabet `A`
ReactDOM.render(<MaskedTextBoxComponent mask={'\\A999'} placeholder={'Mask \\A999 (ex: A321)'} floatLabelType='Always'/>, document.getElementById('mask5'));
