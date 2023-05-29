---
layout: post
title: Ej1 api migration in React Numerictextbox component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Numerictextbox component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Numerictextbox component

This article describes the API migration process of NumericTextBox component from Essential JS 1 to Essential JS 2.

## Common

{% raw %}

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Triggers on creation | **Event** *create*<br /><br />`<EJ.NumericTextbox id="numeric" value={120} create={this.onCreate}></EJ.NumericTextbox >`<br /><br />**script**<br />`onCreate: function() {}` | **Event:** *created*<br /><br />`<NumericTextBoxComponent id="numeric" value='120' created={this.onCreated.bind(this)}></NumericTextBoxComponent>`<br /><br />`public onCreated() {}` |
| Adding custom classes | **Property** *cssClass*<br /><br />`<EJ.NumericTextbox id="numeric" value={120} cssClass="custom"></EJ.NumericTextbox >` | **Property:** *cssClass*<br /><br />`<NumericTextBoxComponent id="numeric" value='120' cssClass="custom"></NumericTextBoxComponent>` |
| Triggers when editor is destroyed | **Event** *destroy*<br /><br />`<EJ.NumericTextbox id="numeric" value={120} destroy={this.onDestroy}></EJ.NumericTextbox >`<br /><br />**script**<br />`onDestroy: function() {}` | **Event:** *destroyed*<br /><br />`<NumericTextBoxComponent id="numeric" value='120' destroyed={this.onDestroyed.bind(this)}></NumericTextBoxComponent>`<br /><br />`public onDestroyed() {}` |
| Destroys textbox | **Method** *destroy*<br /><br />`<EJ.NumericTextbox id="numeric" value={100}></EJ.NumericTextbox >`<br />`var numericObj = $("#numeric").data("ejNumericTextbox");`<br />`numericObj.destroy();` | **Method:** *destroy*<br /><br />`<NumericTextBoxComponent id="numeric" value='100'></NumericTextBoxComponent>`<br />`var numeric = document.getElementById('numeric').ej2_instances[0];`<br />`numeric.destroy();` |
| Control state | **Property** *enabled*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} enabled={false}></EJ.NumericTextbox >` | **Property:** *enabled*<br /><br />`<NumericTextBoxComponent id="numeric" value='100' enabled=false></NumericTextBoxComponent>` |
| Persistence | **Property** *enablePersistence*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} enablePersistence={true}></EJ.NumericTextbox >` | **Property:** *enablePersistence*<br /><br />`<NumericTextBoxComponent id="numeric" value='100' enablePersistence=true></NumericTextBoxComponent>` |
| Right To Left | **Property** *enableRTL*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} enableRTL={true}></EJ.NumericTextbox >` | **Property:** *enableRtl*<br /><br />`<NumericTextBoxComponent id="numeric" value='100' enableRtl=true></NumericTextBoxComponent>` |
| Triggers when editor is focused in | **Event** *focusIn*<br /><br />`<EJ.NumericTextbox id="numeric" value={20} focusIn={this.focusIn}></EJ.NumericTextbox >`<br /><br />**script**<br />`focusIn: function() {}` | **Event:** *focus*<br /><br />`<NumericTextBoxComponent id="numeric" value={100} focus={this.onFocus.bind(this)}></NumericTextBoxComponent>`<br/><br />**script**<br/>`public onFocus() {}` |
| Triggers when editor is focused out | **Event** *focusOut*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} focusOut={this.focusOut}></EJ.NumericTextbox >`<br /><br />**script**<br />`focusOut: function() {}` | **Event:** *blur*<br /><br />`<NumericTextBoxComponent id="numeric" value={100} blur={this.onBlur.bind(this)}></NumericTextBoxComponent>`<br/><br />**script**<br/>`public onBlur() {}` |
| Sets Height | **Property** *height*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} height="100px"></EJ.NumericTextbox >` | **Can be achieved using,** <br /><br />`<NumericTextBoxComponent id="numeric" value='100' cssClass="custom"></NumericTextBoxComponent>`<br />**Css**<br />.e-numerictextbox.custom{<br />height: 40px;<br />} |
| HTML Attributes | **Property** *htmlAttributes*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} htmlAttributes= {htmlAttr}></EJ.NumericTextbox>`<br /><br />**script**<br />`var htmlAttr = {name: "numerictextbox"};` | **Can be achieved using**<br/>`<NumericTextBoxComponent value= '32' id="numeric" placeholder="Numeric TextBox" created={this.onCreated.bind(this)} floatLabelType="Always"></NumericTextBoxComponent>`<br/>`public onCreated(){`<br/>`document.getElementById("numeric").setAttribute("name","Numeric")`<br/>`}` |
| Name of editor | **Property** *name*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} htmlAttributes= name="textbox"></EJ.NumericTextbox>` | **Can be achieved using**<br/>`<NumericTextBoxComponent value= '32' id="numeric" placeholder="Numeric TextBox" created={this.onCreated.bind(this)} floatLabelType="Always"></NumericTextBoxComponent>`<br/>`public onCreated(){`<br/>`document.getElementById("numeric").setAttribute("name","Numeric")`<br/>`}` |
| Read only | **Property** *readOnly*<br /><br />`<EJ.NumericTextbox id="numeric" value={80} readOnly={true}></EJ.NumericTextbox>` | **Property:** *readonly*<br /><br />`<NumericTextBoxComponent id="numeric" value='80' readonly=true></NumericTextBoxComponent>` |
| Rounded corners | **Property** *showRoundedCorner*<br /><br />`<EJ.NumericTextbox id="numeric" value={80} showRoundedCorner={true}></EJ.NumericTextbox>` | **Can be achieved using**<br/>`<NumericTextBoxComponent id="numeric" value='100' cssClass='e-style'></NumericTextBoxComponent>`<br/>**Css**<br/>`.e-control-wrapper.e-numeric.e-input-group.e-style {`<br/>`border: 2.5px solid;`<br/>`border-radius: 1rem;`<br/> `padding-left: 12px;` <br/>`}`<br/>`.e-control-wrapper.e-numeric.e-float-input.e-style .e-float-line::before, .e-control-wrapper.e-numeric.e-float-input.e-style  .e-float-line::after{`<br/>`background: none ;`<br/>`}`<br/>`.e-control-wrapper.e-numeric.e-input-group.e-style.e-input-focus{`<br/> `border: solid grey  !important;`<br/>`}` |
| Spin Button | **Property** *showSpinButton*<br /><br />`<EJ.NumericTextbox id="numeric" value={20} showSpinButton={false}></EJ.NumericTextbox>` | **Property:** *showSpinButton*<br /><br />`<NumericTextBoxComponent id="numeric" value='20' showSpinButton=false></NumericTextBoxComponent>` |
| Width | **Property** *width*<br /><br />`<EJ.NumericTextbox id="numeric" value={20} width"220px"></EJ.NumericTextbox>` | **Property:** *width*<br /><br />`<NumericTextBoxComponent id="numeric" value='20' width="220px"></NumericTextBoxComponent>` |
| Clear Button | Not Applicable | **Property:** *showClearButton*<br /><br />`<NumericTextBoxComponent id="numeric" value='100' showClearButton=true></NumericTextBoxComponent>` |

## Globalization

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Localization culture | **Property** *locale*<br /><br />`<EJ.NumericTextbox id="numeric" value={80} locale="de-DE"></EJ.NumericTextbox>` | **Property:** *locale*<br /><br />`<NumericTextBoxComponent id="numeric" value='80' locale="de-DE"></NumericTextBoxComponent>` |

## Group

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Group digits in editor | **Property** *groupSize*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} groupSize={2}></EJ.NumericTextbox>` | Not Applicable |
| Group Separator | **Property** *groupSeparator*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} groupSeparator="-"></EJ.NumericTextbox>` | Not Applicable |

## Numeric configuration

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Triggers on value change | **Event** *change*<br /><br />`<EJ.NumericTextbox id="numeric" value={120} change={this.onChange}></EJ.NumericTextbox >`<br /><br />**script**<br />`onChange: function() {}` | **Event:** *change*<br /><br />`<NumericTextBoxComponent id="numeric" value='120' change={this.onChange.bind(this)}></NumericTextBoxComponent>`<br /><br />`public onChange() {}` |
| Sets digits allowed after decimal point | **Property** *decimalPlaces*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} decimalPlaces={2}></EJ.NumericTextbox>` | **Property:** *decimals*<br /><br />`<NumericTextBoxComponent id="numeric" value='100' format="n2" decimals="2"></NumericTextBoxComponent>` |
| Decrement value | Not Applicable | **Method:** *decrement*<br /><br />`<NumericTextBoxComponent id="numeric" value={100} ></NumericTextBoxComponent>`<br />`var numeric = document.getElementById('numeric').ej2_instances[0];`<br />`numeric.decrement();` |
| Disable the textbox | **Method** *disable*<br /><br />`<EJ.NumericTextbox id="numeric" value={200} ></EJ.NumericTextbox>`<br />`var numericObj = $("#numeric").data("ejNumericTextbox");`<br />`numericObj.disable();` | **Can be achieved by**<br/>`<NumericTextBoxComponent id="numeric" value='100' showClearButton=true></NumericTextBoxComponent>`<br/>`var numeric = document.getElementById('numeric').ej2_instances[0];`<br />`numeric.enabled = false;` |
| Enable the textbox | **Method** *enable*<br /><br />`<EJ.NumericTextbox id="numeric" value={200} ></EJ.NumericTextbox>`<br />`var numericObj = $("#numeric").data("ejNumericTextbox");`<br />`numericObj.enable();` |**Can be achieved by**<br/>`<NumericTextBoxComponent id="numeric" value='100' showClearButton=true></NumericTextBoxComponent>`<br/>`var numeric = document.getElementById('numeric').ej2_instances[0];`<br />`numeric.enabled = true;` |
| Gets value of editor | **Method** *getValue*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} ></EJ.NumericTextbox>`<br />`var numericObj = $("#numeric").data("ejNumericTextbox");`<br />`numericObj.getValue();` | **Method:** *getText*<br /><br />`<NumericTextBoxComponent id="numeric" value='100'></NumericTextBoxComponent>`<br />`var numeric = document.getElementById('numeric').ej2_instances[0];`<br />`numeric.getText();` |
| Increment value | Not Applicable | **Method:** *increment*<br /><br />`<NumericTextBoxComponent id="numeric" value='100'></NumericTextBoxComponent>`<br />`var numeric = document.getElementById('numeric').ej2_instances[0];`<br />`numeric.increment();` |
| Step value | **Property** *incrementStep*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} incrementStep={2}></EJ.NumericTextbox>` | **Property:** *step*<br /><br />`<NumericTextBoxComponent id="numeric" value='100' step="2"></NumericTextBoxComponent>` |
| Sets Maximum value | **Property** *maxValue*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} maxValue={200}></EJ.NumericTextbox>` | **Property:** *max*<br /><br />`<NumericTextBoxComponent id="numeric" value='100' max="200"></NumericTextBoxComponent>` |
| Sets Minimum value | **Property** *minValue*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} minValue={20}></EJ.NumericTextbox>` | **Property:** *min*<br /><br />`<NumericTextBoxComponent id="numeric" value='100' min="20"></NumericTextBoxComponent>` |
| Negative pattern for formatting values | **Property** *negativePattern*<br /><br />`<EJ.NumericTextbox id="numeric" value={-20} negativePattern="( n)"></EJ.NumericTextbox>` | Not Applicable |
| Positive pattern for formatting values | **Property** *positivePattern*<br /><br />`<EJ.NumericTextbox id="numeric" value={20} positivePattern="n kg"></EJ.NumericTextbox>` | Not Applicable |
| Specifies value | **Property** *value*<br /><br />`<EJ.NumericTextbox id="numeric" value={100}></EJ.NumericTextbox>` | **Property:** *value*<br /><br />`<NumericTextBoxComponent id="numeric" value='100'></NumericTextBoxComponent>` |
| Displays hint on editor | **Property** *watermarkText*<br /><br />`<EJ.NumericTextbox id="numeric" value={80} watermarkText="Enter value"></EJ.NumericTextbox>` | **Property:** *placeholder*<br /><br />`<NumericTextBoxComponent id="numeric" value='100' placeholder="Enter value"></NumericTextBoxComponent>` |
| Placeholder float type | Not Applicable | **Property:** *floatLabelType*<br /><br />`<NumericTextBoxComponent id="numeric" value='200' placeholder="Enter value" floatLabelType="Auto"></NumericTextBoxComponent>` |

## Number Formats

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Set Currency symbol | **Property** *currencySymbol*<br /><br />`<EJ.CurrencyTextbox id="currency" value={100} currencySymbol="EUR"></EJ.CurrencyTextbox>` | **Property:** *currency*<br /><br />`<NumericTextBoxComponent id="currency" value='100' format="c2" currency="EUR"></NumericTextBoxComponent>` |
| Number Format | Not Applicable | **Property:** *format*<br /><br />`<NumericTextBoxComponent id="numeric" value='200' format="n2"></NumericTextBoxComponent>` |

## Validation

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Strict Mode | **Property** *enableStrictMode*<br /><br />`<EJ.NumericTextbox id="numeric" value={80} enableStrictMode={true}></EJ.NumericTextbox>` | **Property:** *strictMode*<br /><br />`<NumericTextBoxComponent id="numeric" value='80' strictMode=true></NumericTextBoxComponent>` |
| Validation on typing | **Property** *validateOnType*<br /><br />`<EJ.NumericTextbox id="numeric" value={80} validateOnType={true}></EJ.NumericTextbox>` | **Property:** *validateDecimalOnType*<br /><br />`<NumericTextBoxComponent id="numeric" value='100' validateDecimalOnType=true></NumericTextBoxComponent>` |
| Validation message | **Property:** *validationMessage*<br /><br />`<EJ.NumericTextboxid="numeric" value={100} validationRules= {validationRules} validationMessage= {validationMessage}></EJ.NumericTextbox>`<br /><br />`var validationRules = {required: {true}};`<br />`var validationMessage = {required: "Required value"};` | **Can be achieved by**<br/>`<NumericTextBoxComponent id="numeric" change={this.onChange.bind(this)} created={this.onCreate.bind(this)} floatLabelType='Always' />`<br/>`let options: FormValidatorModel = {`<br/>`rules: {`<br/>`'numeric': { required: [true, "Number is required"] },`<br/>`},`<br/>`customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {`<br/>`inputElement.parentNode.parentNode.parentNode.appendChild(errorElement);`<br/>`}`<br/>`};`<br/>`this.formObject = new FormValidator('#form-element', options);`|
| Validation Rules | **Property:** *validationRules*<br /><br />`<EJ.NumericTextbox id="numeric" value={100} validationRules= {validationRules}></EJ.NumericTextbox>`<br /><br />`var validationRules = {required: {true}};` |  **Can be achieved by**<br/>`<NumericTextBoxComponent id="numeric" change={this.onChange.bind(this)} created={this.onCreate.bind(this)} floatLabelType='Always' />`<br/>`let options: FormValidatorModel = {`<br/>`rules: {`<br/>`'numeric': { required: [true] },`<br/>`},`<br/>`customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {`<br/>`inputElement.parentNode.parentNode.parentNode.appendChild(errorElement);`<br/>`}`<br/>`};`<br/>`this.formObject = new FormValidator('#form-element', options);` |

{% endraw %}