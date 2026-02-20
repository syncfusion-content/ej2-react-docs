---
layout: post
title: Migration from css TextBox to react TextBox in React TextBox component | Syncfusion
description: Learn here all about Migration from css TextBox to react TextBox in Syncfusion React TextBox component of Syncfusion Essential JS 2 and more.
control: Migration from css TextBox to react TextBox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Migration from CSS TextBox to React TextBox component

> From v16.3.21 onwards, the TextBox is available as a dedicated React component, enabling floating label functionality with significantly less code. For a complete list of properties, methods, and events, refer to the [API reference](https://ej2.syncfusion.com/react/documentation/api/textbox/).

The following table describes the migration from CSS TextBox to React TextBox component.

## Normal TextBox

<!-- markdownlint-disable MD038 -->
| **Rendering mode** | **CSS TextBox** | **React TextBox component** |
| -----------------------| -----------------------------------| ------------------------------------------- |
| Default rendering |  `<div class='e-input-group'>`<br/>`<input class='e-input' type='text' placeholder='Enter Value'/>`<br/>`</div>` |  `<TextBoxComponent id="default" placeholder="Enter Value" floatLabelType="Never" />` |
| TextBox with clear button |  `<div class='e-input-group'>`<br/>`<input class='e-input' placeholder='Enter Value' required='true'>`<br/>`<span class='e-clear-icon'></span>`<br/>`</div>`<br/><br/>Note: You have to write action for clear button. |  `<TextBoxComponent id="clear-input" placeholder="Enter Value" showClearButton={true} floatLabelType="Never" />` |
| Validation states |  `<div class='e-input-group e-error'>`<br/>`<input class='e-input' type='text' placeholder='Enter Value' />`<br/>`</div>`<br/><br/>Note: TextBox component consists of three types of validation rules such as success, warning, and error. |  `<TextBoxComponent id="validation" placeholder="Enter Value" cssClass="e-error" floatLabelType="Never" />` |

## Floating label TextBox

<!-- markdownlint-disable MD038 -->
| **Rendering mode** | **CSS TextBox** | **React TextBox component** |
| -----------------------| -----------------------------------| ------------------------------------------- |
| Default rendering |  `<div class='e-float-input'>`<br/>`<input type='text' required />`<br/>`<span class='e-float-line'></span>`<br/>`<label class='e-float-text'>Enter Value</label>`<br/>`</div>` |  `<TextBoxComponent id="default" placeholder="Enter Value" floatLabelType="Auto" />` |
| TextBox with clear button |  `<div class='e-float-input e-input-group'>`<br/>`<input type='text' required  value= 'Clear Input' />`<br/>`<span class='e-float-line'></span>`<br/>`<label class='e-float-text'>Enter Value</label>`<br/>`<span class='e-clear-icon'></span>`<br/>`</div>`<br/><br/>Note: You have to write action for clear button. |  `<TextBoxComponent id="clear-input" placeholder="Enter Value" showClearButton={true} floatLabelType="Auto" />` |
| Validation states |  `<div class='e-float-input e-error'>`<br/>`<input type='text' required  />`<br/>`<span class='e-float-line'></span>`<br/>`<label class='e-float-text'>Enter Value</label>`<br/>`</div>`<br/><br/> Note: TextBox component consists of three types of validation rules such as success, warning, and error. |  `<TextBoxComponent id="validation" placeholder="Enter Value" cssClass="e-error" floatLabelType="Auto" />` |