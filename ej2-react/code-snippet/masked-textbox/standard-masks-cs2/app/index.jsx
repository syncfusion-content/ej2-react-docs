import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
// sets mask with the mask element '#' which accepts any single digit from '0' to '9',
// space, + and - signs
function App1() {
    return (<MaskedTextBoxComponent mask={'#####'} placeholder={'Mask ##### (ex: 012+-)'} floatLabelType="Always"/>);
}
ReactDOM.render(<App1 />, document.getElementById('mask1'));
// sets mask format with the mask element 'L' which allows only alphabets('A-Z and a-z')
function App2() {
    return (<MaskedTextBoxComponent mask={'LLLLLL'} placeholder={'Mask LLLLLL (ex: Sample)'} floatLabelType="Always"/>);
}
ReactDOM.render(<App2 />, document.getElementById('mask2'));
// sets mask format with the mask element '&' which allows `alphabets`, `numbers`
// and `special characters`
function App3() {
    return (<MaskedTextBoxComponent mask={'&&&&&'} placeholder={'Mask &&&&& (ex: A12@#)'} floatLabelType="Always"/>);
}
ReactDOM.render(<App3 />, document.getElementById('mask3'));
// sets mask format with the mask element `>` which converts all characters that follow
// to upper case and `<` which converts all characters that follow to lower case
function App4() {
    return (<MaskedTextBoxComponent mask={'>LLL<LLL'} placeholder={'Mask >LLL<LL (ex: SAMple)'} floatLabelType="Always"/>);
}
ReactDOM.render(<App4 />, document.getElementById('mask4'));
// sets mask format with the mask element '\\' which turns mask element `A` into
// a literal and it displays the alphabet `A`
function App5() {
    return (<MaskedTextBoxComponent mask={'\\A999'} placeholder={'Mask \\A999 (ex: A321)'} floatLabelType="Always"/>);
}
ReactDOM.render(<App5 />, document.getElementById('mask5'));
