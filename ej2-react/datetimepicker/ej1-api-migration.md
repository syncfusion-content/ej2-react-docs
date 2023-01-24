---
layout: post
title: Ej1 api migration in React Datetimepicker component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Datetimepicker component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Datetimepicker component

This article describes the API migration process of DateTimePicker component from Essential JS 1 to Essential JS 2.

## DateTime Selection

{% raw %}

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Setting the value
</td>
<td>
<b>Property:</b> <i>value</i>

```
<EJ.DateTimePicker id="datetimepicker" value='5/5/2019 12:00 AM' ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>value</i

```
<DateTimePickerComponent value='5/5/2019 2:00 AM'></DateTimePickerComponent>
```

</td>
</tr>
</thead>
</table>

## DateTime Format

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Display the datetime format
</td>
<td>
<b>Property:</b> <i>dateTimeFormat</i>

```
<EJ.DateTimePicker id="datetimepicker" dateTimeFormat= "d/MMM/yy tt h:mm" ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>format</i>

```
<DateTimePickerComponent format="dd/MM/yyyy hh:mm a"></DateTimePickerComponent>
```

</td>
</tr>
<tr>
<td>
Day header format
</td>
<td>
<b>Property:</b> <i>dayHeaderFormat</i>

```
<EJ.DateTimePicker id="datetimepicker" dayHeaderFormat="long" ></EJ.DateTimePicker>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
</thead>
</table>

## Calendar Views

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Start view
</td>
<td>
<b>Property:</b> <i>startLevel</i>

```
<EJ.DateTimePicker id="datetimepicker" startLevel="year" ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>start</i>

```
<DateTimePickerComponent id="datetimepicker" start="Decade"></DateTimePickerComponent>
```

</td>
</tr>
<tr>
<td>
Depth view
</td>
<td>
<b>Property:</b> <i>depthLevel</i>

```
<EJ.DateTimePicker id="datetimepicker" depthLevel="year" ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>depth</i>

```
<DateTimePickerComponent id="datetimepicker" depth="Year"></DateTimePickerComponent>
```

</td>
</tr>
</thead>
</table>

## Date Range

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Minimum datetime
</td>
<td>
<b>Property:</b> <i>minDateTime</i>

```
<EJ.DateTimePicker id="datetimepicker" minDateTime="5/5/2019 4:00 AM" ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>min</i>

```
<DateTimePickerComponent id="datetimepicker" min="5/5/2019 3:00 AM"></DateTimePickerComponent>
```

</td>
</tr>
<tr>
<td>
Maximum datetime
</td>
<td>
<b>Property:</b> <i>maxDateTime</i>

```
<EJ.DateTimePicker id="datetimepicker" maxDateTime="5/5/2019 4:00 AM" ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>max</i>

```
<DateTimePickerComponent id="datetimepicker" max="5/5/2019 3:00 AM"></DateTimePickerComponent>
```

</td>
</tr>
</thead>
</table>

## Disabled Dates

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Disabled dates
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Can be achieved by</b>

```
<DateTimePickerComponent id="datetimepicker" renderDayCell={this.disabledDatetime.bind(this)}></DateTimePickerComponent>

disabledDatetime(args) {
    /*Date need to be disabled*/
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
        args.isDisabled = true;
    }
}
```

</td>
</tr>
</thead>
</table>

## Customization

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
CSS Class
</td>
<td>
<b>Property:</b> <i>cssClass</i>

```
<EJ.DateTimePicker id="datetimepicker" cssClass="gradient-lime" ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>cssClass</i>

```
<DateTimePickerComponent id="datetimepicker" cssClass='gradient-lime'></DateTimePickerComponent>
```

</td>
</tr>
<tr>
<td>
Show/Hide the today button
</td>
<td>
<b>Can be achieved by</b>

```
<EJ.DateTimePicker id="datetimepicker" cssClass="e-custom-class" ></EJ.DateTimePicker>

.e-datetime-popup.e-popup.e-custom-class .e-button-container {
    display: none !important;
}
```

</td>
<td>
<b>Property:</b> <i>showTodayButton</i>

```
<DateTimePickerComponent id="datetimepicker" showTodayButton={false}></DateTimePickerComponent>
```

</td>
</tr>
<tr>
<td>
Show/Hide the other month dates
</td>
<td>
<b>Property:</b> <i>showOtherMonths</i>

```
<EJ.DateTimePicker id="datetimepicker" showOtherMonths={false} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Can be achieved by</b>

```
<DateTimePickerComponent id="datetimepicker"></DateTimePickerComponent>

.e-DateTimePicker .e-calendar .e-content tr.e-month-hide, .e-DateTimePicker .e-calendar .e-content td.e-other-month > .e-day {
    visibility: none;
}

.e-DateTimePicker .e-calendar .e-content td.e-month-hide, .e-DateTimePicker .e-calendar .e-content td.e-other-month {
    pointer-events: none;
    touch-action: none;
}
```

</td>
</tr>
<tr>
<td>
Show/Hide the popup button
</td>
<td>
<b>Property:</b> <i>showPopupButton</i>

```
<EJ.DateTimePicker id="datetimepicker" showPopupButton={false} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Event:</b> <i>focus</i>

```
<DateTimePickerComponent id="datetimepicker" focus={this.onFocus.bind(this)}></DateTimePickerComponent>

onFocus(args) {
    this.show();
}

.e-control-wrapper .e-input-group-icon.e-date-icon {
    display: none;
}
```

</td>
</tr>
<tr>
<td>
Enable/Disable the rounded corner
</td>
<td>
<b>Property:</b> <i>showRoundedCorner</i>

```
<EJ.DateTimePicker id="datetimepicker" showRoundedCorner={false} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Can be achieved by</b>

```
<DateTimePickerComponent id="datetimepicker" cssClass='e-custom-style'></DateTimePickerComponent>

.e-control-wrapper.e-custom-style.e-date-wrapper.e-input-group {
    border-radius: 4px;
}
```

</td>
</tr>
<tr>
<td>
Skip a month
</td>
<td>
<b>Property:</b> <i>stepMonths</i>

```
<EJ.DateTimePicker id="datetimepicker" stepMonths={2} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Can be achieved by</b>

```
<DateTimePickerComponent id="datetimepicker" value='5/5/2019 12:00 AM' open={this.onOpen.bind(this)}></DateTimePickerComponent>

onOpen(args) {
    this.navigateTo('Year', new Date("03/18/2018"));
}
```

</td>
</tr>
<tr>
<td>
Show/Hide the tooltip
</td>
<td>
<b>Property:</b> <i>showTooltip</i>

```
<EJ.DateTimePicker id="datetimepicker" showTooltip={false} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Interval
</td>
<td>
<b>Property:</b> <i>interval</i>

```
<EJ.DateTimePicker id="datetimepicker" interval={60} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>step</i>

```
<DateTimePickerComponent id="datetimepicker" step={20}></DateTimePickerComponent>
```

</td>
</tr>
<tr>
<td>
Button text
</td>
<td>
<b>Property:</b> <i>buttonText</i>

```
var buttonText = { done: "Ok" }

<EJ.DateTimePicker id="timepicker"  buttonText={buttonText}></EJ.DateTimePicker>
```

</td>
<td>
<b>Can be achieved by</b>

```
<DateTimePickerComponent id="datetimepicker" locale='en'></DateTimePickerComponent>

L10n.load({
    'en': {
            'datetimepicker': { today: 'Now' }
        }
});
```

</td>
</tr>
<tr>
<td>
Enable/Disable the animation
</td>
<td>
<b>Property:</b> <i>enableAnimation</i>

```
<EJ.DateTimePicker id="datetimepicker" enableAnimation={false} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
FocusIn method
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Method:</b> <i>focusIn()</i>

```
<DateTimePickerComponent id="datetimepicker" created={this.create.bind(this)}></DateTimePickerComponent>

create(args){
    this.focusIn();
}
```

</td>
</tr>
<tr>
<td>
FocusOut method
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Method:</b> <i>focusOut()</i>

```
<DateTimePickerComponent id="datetimepicker" created={this.create.bind(this)}></DateTimePickerComponent>

create(args){
    this.focusIn();
    this.focusOut();
}
```

</td>
</tr>
<tr>
<td>
Prevent popup close
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>Close</i>

```
<DateTimePickerComponent id="datetimepicker" close={this.onClose.bind(this)}></DateTimePickerComponent>

onClose(args) {
    /*Triggers when the popup gets close*/
    args.cancel = true;
}
```

</td>
</tr>
<tr>
<td>
Prevent popup open
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>Open</i>

```
<DateTimePickerComponent id="datetimepicker" open={this.onOpen.bind(this)}></DateTimePickerComponent>

onOpen(args) {
    /*Triggers when the popup gets close*/
    args.cancel = true;
}
```

</td>
</tr>
</thead>
</table>

## Accessibility

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Enable/Disable the RTL
</td>
<td>
<b>Property:</b> <i>enableRTL</i>

```
<EJ.DateTimePicker id="datetimepicker" enableRTL={true} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>enableRtl</i>

```
<DateTimePickerComponent id="datetimepicker" enableRtl={true}></DateTimePickerComponent>
```

</td>
</tr>
</thead>
</table>

## Persistence

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Enable/Disable the persistence
</td>
<td>
<b>Property:</b> <i>enablePersistence</i>

```
<EJ.DateTimePicker id="datetimepicker" enablePersistence={true} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>enablePersistence</i>

```
<DateTimePickerComponent id="datetimepicker" enablePersistence={true}></DateTimePickerComponent>
```

</td>
</tr>
</thead>
</table>

## Validation

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Validation rules
</td>
<td>
<b>Property:</b> <i>validationRules</i>

```
var validationRules = {required: {true}};

$.validator.setDefaults({
        errorClass: 'e-validation-error',
        errorPlacement: function (error, element) {
               $(error).insertAfter(element.closest(".e-widget"));
           }
    });

<EJ.DateTimePicker id="timepicker" validationRules= {validationRules} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Can be achieved by</b>

```
<DateTimePickerComponent id="datetimepicker" floatLabelType='Always'> </DateTimePickerComponent>

var options = { rules: { 'datetimepicker': { required: true } } };
var formObject = new ej.inputs.FormValidator('#form-element', options);
```

</td>
</tr>
<tr>
<td>
Validation message
</td>
<td>
<b>Property:</b> <i>validationMessage</i>

```
var validationRules = {required: {true}};
var validationMessage = {required: "Required value"};

$.validator.setDefaults({
    errorClass: 'e-validation-error',
        errorPlacement: function (error, element) {
            $(error).insertAfter(element.closest(".e-widget"));
        }
    });

<EJ.DatePicker id="timepicker" validationRules= {validationRules} validationMessage= {validationMessage} ></EJ.DatePicker>
```

</td>
<td>
<b>Can be achieved by</b>

```
<DateTimePickerComponent id="datetimepicker" floatLabelType='Always'> </DateTimePickerComponent>

var options = { rules: { 'datetimepicker': { required: true } },
 `customPlacement: (inputElement, errorElement) => { inputElement.parentElement.parentElement.appendChild(errorElement;
}};
var formObject = new ej.inputs.FormValidator('#form-element', options);
```

</td>
</tr>
</thead>
</table>

## Common

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Width
</td>
<td>
<b>Property:</b> <i>width</i>

```
<EJ.DateTimePicker id="datetimepicker" width="200px" ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>Width</i>

```
<DateTimePickerComponent id="datetimepicker" width="300px"></DateTimePickerComponent>
```

</td>
</tr>
<tr>
<td>
Readonly
</td>
<td>
<b>Property:</b> <i>readOnly</i>

```
<EJ.DateTimePicker id="datetimepicker" readOnly={true} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>readonly</i>

```
<DateTimePickerComponent id="datetimepicker" value="5/5/2019" readonly={true}></DateTimePickerComponent>
```

</td>
</tr>
<tr>
<td>
Show/Hide the clear button
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>showClearButton</i>

```
<DateTimePickerComponent id="datetimepicker" showClearButton={false} ></DateTimePickerComponent>
```

</td>
</tr>
<tr>
<td>
Height
</td>
<td>
<b>Property:</b> <i>height</i>

```
<EJ.DateTimePicker id="datetimepicker" height="35px" ></EJ.DateTimePicker>
```

</td>
<td>
<b>Can be achieved by</b>

```
<DateTimePickerComponent id="datetimepicker" cssClass='e-custom-style' ></DateTimePickerComponent>

.e-control-wrapper.e-custom-style.e-date-wrapper.e-input-group {
    height: 35px;
}
```

</td>
</tr>
<tr>
<td>
Html Attributes
</td>
<td>
<b>Property:</b> <i>htmlAttributes</i>

```
var htmlAttributes = {required:"required"}
  
<EJ.DateTimePicker id="timepicker"  htmlAttributes = {htmlAttributes} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Show/Hide the week number
</td>
<td>
<b>Property:</b> <i>weekNumber</i>

```
<EJ.DateTimePicker id="datetimepicker" weekNumber={true} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>weekNumber</i>

```
<DateTimePickerComponent id="datetimepicker" weekNumber={true} ></DateTimePickerComponent>
```

</td>
</tr>
<tr>
<td>
Watermark text
</td>
<td>
<b>Property:</b> <i>watermarkText</i>

```
<EJ.DateTimePicker id="datetimepicker" watermarkText="Enter date and time" ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>placeholder</i>

```
<DateTimePickerComponent id="datetimepicker" placeholder="Enter DateTime" ></DateTimePickerComponent>
```

</td>
</tr>
<tr>
<td>
Disable/Enable
</td>
<td>
<b>Property:</b> <i>enabled</i>

```
<EJ.DateTimePicker id="datetimepicker" enabled={false} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>enabled</i>

```
<DateTimePickerComponent id="datetimepicker" enabled={false} ></DateTimePickerComponent>
```

</td>
</tr>
<tr>
<td>
Enable/Disable the textbox editing
</td>
<td>
<b>Property:</b> <i>AllowEdit</i>

```
<EJ.DateTimePicker id="datetimepicker" allowEdit={false} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>AllowEdit</i>

```
<DateTimePickerComponent id="datetimepicker" value="5/5/2010" allowEdit={false} ></DateTimePickerComponent>
```

</td>
</tr>

<tr>
<td>
zIndex
</td>
<td>
<b>Can be achieved by</b>

```
<EJ.DateTimePicker id="datetimepicker" cssClas="e-custom-class" ></EJ.DateTimePicker>

.e-datetime-popup.e-popup.e-custom-class {
    z-index: 100 !important;
}
```

</td>
<td>
<b>Property:</b> <i>zIndex</i>

```
<DateTimePickerComponent id="datetimepicker" zIndex="2000" ></DateTimePickerComponent>
```

</td>
</tr>

<tr>
<td>
Specify the placeholder text behavior
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>floatLabelType</i>

```
<DateTimePickerComponent id="datetimepicker" floatLabelType="Always" placeholder="Enter DateTime" ></DateTimePickerComponent>
```

</td>
</tr>
<tr>
<td>
Event callback for each cell creation
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>renderDayCell</i>

```
<DateTimePickerComponent id="datetimepicker" renderDayCell={this.onRenderCell.bind(this)} ></DateTimePickerComponent>

onRenderCell() {/** code block */ }
```

</td>
</tr>
<tr>
<td>
FocusIn event
</td>
<td>
<b>Event:</b> <i>FocusIn</i>

```
<EJ.DateTimePicker id="datetimepicker" focusIn={onFocus} ></EJ.DateTimePicker>

function onFocus() {  /*Triggers when the popup gets focus*/ }
```

</td>
<td>
<b>Event:</b> <i>focus</i>

```
<DateTimePickerComponent id="datetimepicker" focus={this.onFocus.bind(this)} ></DateTimePickerComponent>

onFocus() {/** code block */}
```

</td>
</tr>
<tr>
<td>
FocusOut event
</td>
<td>
<b>Event:</b> <i>focusOut</i>

```
<EJ.DateTimePicker id="datetimepicker" focusOut={onFocusout} ></EJ.DateTimePicker>

function onFocusout() { /*Triggers when the popup gets focusout*/ }
```

</td>
<td>
<b>Event:</b> <i>blur</i>

```
<DateTimePickerComponent id="datetimepicker" blur={this.onBlur.bind(this)} ></DateTimePickerComponent>

onBlur() {/** code block */}
```

</td>
</tr>
<tr>
<td>
Change event
</td>
<td>
<b>Event:</b> <i>change</i>

```
<EJ.DateTimePicker id="datetimepicker" change={onChange} ></EJ.DateTimePicker>

function onChange() { /*Triggers when the value is changed*/ }
```

</td>
<td>
<b>Event:</b> <i>change</i>

```
<DateTimePickerComponent id="datetimepicker" change={this.onChange.bind(this)} ></DateTimePickerComponent>

onChange() { console.log("changed") }
```

</td>
</tr>
<tr>
<td>
Created event
</td>
<td>
<b>Event:</b> <i>create</i>

```
<EJ.DateTimePicker id="datetimepicker" create={onCreate} ></EJ.DateTimePicker>

function onCreate() { /*Triggers when the control is created*/ }
```

</td>
<td>
<b>Event:</b> <i>created</i>

```
<DateTimePickerComponent id="datetimepicker" created={this.onCreate.bind(this)} ></DateTimePickerComponent>

onCreate() { console.log(" Component Created") }
```

</td>
</tr>
<tr>
<td>
Destroy event
</td>
<td>
<b>Event:</b> <i>Destroy</i>

```
<EJ.DateTimePicker id="datetimepicker" destroy={onDestroy} ></EJ.DateTimePicker>

function onDestroy() { /*Triggers when the control is destroyed*/ }
```

</td>
<td>
<b>Event:</b> <i>destroyed</i>

```
<DateTimePickerComponent id="datetimepicker" destroyed={this.onDestroyed.bind(this)} change={this.onChange} ></DateTimePickerComponent>

onDestroyed(args) { console.log("destroyed")}

onChange(args){
    this.destroy();
}
```

</td>
</tr>
</thead>
</table>

## Globalization

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Locale
</td>
<td>
<b>Property:</b> <i>locale</i>

```
<EJ.DateTimePicker id="datetimepicker" locale="en-US" ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>locale</i>

```
<DateTimePickerComponent id="datetimepicker" locale='en'></DateTimePickerComponent>
```

</td>
</tr>

<tr>
<td>
First day of week
</td>
<td>
<b>Property:</b> <i>startDay</i>

```
<EJ.DateTimePicker id="datetimepicker" startDay={2} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>firstDayOfWeek</i>

```
<DateTimePickerComponent id="datetimepicker" firstDayOfWeek={3} ></DateTimePickerComponent>
```

</td>
</tr>
</thead>
</table>

## Strict Mode

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Strict mode
</td>
<td>
<b>Property:</b> <i>enableStrictMode</i>

```
<EJ.DateTimePicker id="datetimepicker" enableStrictMode={false} ></EJ.DateTimePicker>
```

</td>
<td>
<b>Property:</b> <i>strictMode</i>

```
<DateTimePickerComponent id="datetimepicker" min="5/5/2019" max="6/6/2019" value="7/7/2019" strictMode={true}></DateTimePickerComponent>
```

</td>
</tr>
</thead>
</table>

## Open and Close

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Close
</td>
<td>
<b>Event:</b> <i>Close</i>

```
<EJ.DateTimePicker id="datetimepicker" close={onClose} ></EJ.DateTimePicker>

function onClose() { /*Triggers when the poupup gets closed*/ }
```

</td>
<td>
<b>Event:</b> <i>close</i>

```
<DateTimePickerComponent id="datetimepicker" close={this.onClose.bind(this)}></DateTimePickerComponent>

onClose() { /*Triggers when the poupup gets closed*/ }
```

</td>
</tr>
<tr>
<td>
Hide
</td>
<td>
<b>Method:</b> <i>hide()</i>

```
<EJ.DateTimePicker id="datetimepicker" create={onCreate} ></EJ.DateTimePicker>

onCreate(args) {
    var datetimeObject = $("#datetimepicker").data("ejDateTimePicker");
    datetimeObject.show();
    datetimeObject.hide();
}
```

</td>
<td>
<b>Method:</b> <i>hide()</i>

```
<DateTimePickerComponent id="datetimepicker" created={this.onCreate.bind(this)}></DateTimePickerComponent>

onCreate(args){
    this.show();
    this.hide();
}
```

</td>
</tr>
<tr>
<td>
Open
</td>
<td>
<b>Event:</b> <i>open</i>

```
<EJ.DateTimePicker id="datetimepicker" open={onOpen} ></EJ.DateTimePicker>

function onOpen(args){/** code block */}
```

</td>
<td>
<b>Event:</b> <i>open</i>

```
<DateTimePickerComponent id="datetimepicker" open={this.onOpen.bind(this)}></DateTimePickerComponent>

onOpen(args){/** code block */}
```

</td>
</tr>
<tr>
<td>
Show
</td>
<td>
<b>Method:</b> <i>show()</i>

```
<EJ.DateTimePicker id="datetimepicker" create={onCreate} ></EJ.DateTimePicker>

function onCreate(args) {
    var datetimeObject = $("#datetimepicker").data("ejDateTimePicker");
    datetimeObject.show();
}
```

</td>
<td>
<b>Method:</b> <i>show()</i>

```
<DateTimePickerComponent id="datetimepicker" created={this.onCreate.bind(this)}></DateTimePickerComponent>

onCreate(args){
    this.show();
}
```

</td>
</tr>
</thead>
</table>

## View Navigation

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Navigate to specific month
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Method:</b> <i>navigateTo()</i>

```
<DateTimePickerComponent id="datetimepicker" value='5/5/2019 12:00 AM' open={this.onOpen}></DateTimePickerComponent>

onOpen(args) {
    this.navigateTo('Year', new Date("03/18/2018"));
}
```

</td>
</tr>
<tr>
<td>
Navigation callback
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>navigated</i>

```
<DateTimePickerComponent id="datetimepicker" navigated={this.onNavigated.bind(this)} ></DateTimePickerComponent>

onNavigated() {/** code block */ }
```

</td>
</tr>
<tr>
<td>
Enable/Disable the drill down
</td>
<td>
<b>Property:</b> <i>timeDrillDown</i>

```
var timeDrillDown = { showMeridian: true , interval: 10 , enabled: true }

<EJ.DateTimePicker id="datetimepicker"  timeDrillDown={timeDrillDown}></EJ.DateTimePicker>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
</thead>
</table>

{% endraw %}