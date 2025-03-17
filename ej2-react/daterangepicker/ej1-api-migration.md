---
layout: post
title: Ej1 api migration in React Daterangepicker component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Daterangepicker component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Daterangepicker component

This article describes the API migration process of DateRangePicker component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Date Selection

{% raw %}

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Setting the value
</td>
<td>
<b>Property:</b> <i>value</i>

```
<EJ.DateRangePicker id="daterangepicker" value="5/5/2019-6/6/2019" ></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>value</i>

```
this.value = [new Date('1/15/2017'), new Date("1/15/2017")];

<DateRangePickerComponent id="daterangepicker" value={this.value}  ></DateRangePickerComponent>
```

</td>
</tr>
</thead>
</table>

## Date Format

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Display the date format
</td>
<td>
<b>Property:</b> <i>dateFormat</i>

```
<EJ.DateRangePicker id="daterangepicker" dateFormat="dd/MM/yyyy" ></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>format</i>

```
<DateRangePickerComponent id="daterangepicker" format="dd/MMM/yy hh:mm a" ></DateRangePickerComponent>
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
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Minimum date
</td>
<td>
<b>Property:</b> <i>minDate</i>

```
<EJ.DateRangePicker id="daterangepicker" minDate="7/7/2019" ></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>min</i>

```
<DateRangePickerComponent id="daterangepicker" min="7/7/2019" ></DateRangePickerComponent>
```

</td>
</tr>
<tr>
<td>
Maximum date
</td>
<td>
<b>Property:</b> <i>maxDate</i>

```
<EJ.DateRangePicker id="daterangepicker" maxDate="7/7/2019" ></EJ.DateRangePicker>
````

</td>
<td>
<b>Property:</b> <i>max</i>

```
<DateRangePickerComponent id="daterangepicker" max="7/7/2019" ></DateRangePickerComponent>
```

</td>
</tr>
<tr>
<td>
Start date
</td>
<td>
<b>Property:</b> <i>startDate</i>

```
<EJ.DateRangePicker id="daterangepicker" startDate="7/7/2019" ></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>startDate</i>

```
<DateRangePickerComponent id="daterangepicker" startDate="7/7/2019" ></DateRangePickerComponent>
```

</td>
</tr>
<tr>
<td>
End date
</td>
<td>
<b>Property:</b> <i>endDate</i>

```
<EJ.DateRangePicker id="daterangepicker" endDate="7/7/2019" ></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>endDate</i>

```
<DateRangePickerComponent id="daterangepicker" startDate="7/7/2019" endDate="8/8/2019 ></DateRangePickerComponent>
```

</td>
</tr>
<tr>
<td>
Preset ranges
</td>
<td>
<b>Property:</b> <i>ranges</i>

```
var ranges = [{ label: "Today", range: [new Date(), new Date()] },{ label: "Last Week", range: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()] }]

<EJ.DateRangePicker id="timepicker"  ranges={ranges}></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>presets</i>

```
this.weekStart = new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString());

this.weekEnd = new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate() - (new Date().getDay() + 7) % 7))).getDate() + 6)).toDateString());

<DateRangePickerComponent placeholder='Select a range'>
    <PresetsDirective >
        <PresetDirective label="This Week" start={this.weekStart} end={this.weekEnd}> </PresetDirective>
     </PresetsDirective>
</DateRangePickerComponent>
```

</td>
</tr>
<tr>
<td>
Add ranges
</td>
<td>
<b>Method:</b> <i>addRanges()</i>

```
<EJ.DateRangePicker id="daterangepicker" create={onCreate} ></EJ.DateRangePicker>

function onCreate() {
    var dateObj = $("#daterangepicker").data("ejDateRangePicker");
    dateObj.addRanges("new Range", [new Date("11/12/2019"), new Date("11/12/2021")]);
}
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Clear ranges
</td>
<td>
<b>Method:</b> <i>clearRanges()</i>

```
<EJ.DateRangePicker id="daterangepicker" create={onCreate} ></EJ.DateRangePicker>

function onCreate() {
    var dateObj = $("#daterangepicker").data("ejDateRangePicker");
    dateObj.clearRanges();
}
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Get selected range
</td>
<td>
<b>Method:</b> <i>getSelectedRange()</i>

```
<EJ.DateRangePicker id="daterangepicker" startDate="5/5/2019" endDate="8/8/2019" create={onCreate} ></EJ.DateRangePicker>

function onCreate() {
    var dateObj = $("#daterangepicker").data("ejDateRangePicker");
    console.log(dateObj.getSelectedRange());
}
```

</td>
<td>
<b>Method:</b> <i>getSelectedRange()</i>

```
<DateRangePickerComponent id="daterangepicker" startDate="7/7/2019" endDate="8/8/2019"
created ={this.onCreate.bind(this)} ></DateRangePickerComponent>

onCreate (args) {
    console.log(this.getSelectedRange());
}
```

</td>
</tr>
<tr>
<td>
Set date range
</td>
<td>
<b>Method:</b> <i>setRange()</i>

```
<EJ.DateRangePicker id="daterangepicker" create={onCreate} ></EJ.DateRangePicker>

function onCreate() {
    var dateObj = $("#daterangepicker").data("ejDateRangePicker");
    dateObj.setRange([new Date("11/12/2011"), new Date("11/12/2019")]);
}
```

<td>
<b>Not Applicable</b>
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
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
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
<DateRangePickerComponent id="daterangepicker" renderDayCell={this.disableDaterange.bind(this)}></DateRangePickerComponent>

disableDaterange(args) {
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
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
CSS Class
</td>
<td>
<b>Property:</b> <i>cssClass</i>

```
<EJ.DateRangePicker id="daterangepicker" cssClass="gradient-lime"></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>cssClass</i>

```
<DateRangePickerComponent id="daterangepicker" cssClass="gradient-lime"></DateRangePickerComponent>
```

</td>
</tr>
<tr>
<td>
Enable/Disable TimePicker with DateRangePicker
</td>
<td>
<b>Property:</b> <i>enableTimePicker</i>

```
<EJ.DateRangePicker id="daterangepicker" enableTimePicker={true} ></EJ.DateRangePicker>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Time format
</td>
<td>
<b>Property:</b> <i>timeFormat</i>

```
<EJ.DateRangePicker id="daterangepicker" timeFormat="HH:mm" ></EJ.DateRangePicker>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Minimum days span
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>minDays</i>

```
<DateRangePickerComponent id="daterangepicker" minDays={5}></DateRangePickerComponent>
```

</td>
</tr>
<tr>
<td>
Maximum days span
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>maxDays</i>

```
<DateRangePickerComponent id="daterangepicker" maxDays={5}></DateRangePickerComponent>
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
var buttonText = { reset: "Again", cancel: "Cut", apply: "Ok" }

<EJ.DateRangePicker id="timepicker"  buttonText={buttonText}></EJ.DateRangePicker>
```

</td>
<td>
<b>Can be achieved by</b>

```
<DateRangePickerComponent id="daterangepicker" locale="en"></DateRangePickerComponent>

L10n.load({
    'en': {
        'daterangepicker': { applyText: 'Apply' }
    }
});
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
<EJ.DateRangePicker id="daterangepicker" showPopupButton={false} ></EJ.DateRangePicker>
```

</td>
<td>
<b>Event:</b> <i>focus</i>

```
<DateRangePickerComponent id="daterangepicker" focus={this.onFocus.bind(this)}></DateRangePickerComponent>

onFocus(args) {
    this.show();
}

.e-control-wrapper .e-input-group-icon.e-range-icon {
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
<EJ.DateRangePicker id="daterangepicker" showRoundedCorner={true} ></EJ.DateRangePicker>
```

</td>
<td>
<b>Can be achieved by</b>

```
<DateRangePickerComponent id="daterangepicker" cssClass="e-custom-style"></DateRangePickerComponent>

.e-control-wrapper.e-custom-style.e-date-range-wrapper.e-input-group {
    border-radius: 4px;
}
```

</td>
</tr>
<tr>
<td>
FocusIn event
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>focus</i>

```
<DateRangePickerComponent id="daterangepicker" focus={this.onFocus.bind(this)}></DateRangePickerComponent>

onFocus(args) {/** code block */ }
```

</td>
</tr>
<tr>
<td>
FocusOut event
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>blur</i>

```
<DateRangePickerComponent id="daterangepicker" blur={this.onBlur.bind(this)}></DateRangePickerComponent>

onBlur(args) {/** code block */ }
```

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
<DateRangePickerComponent id="daterangepicker" created={this.onCreate.bind(this)}></DateRangePickerComponent>

onCreate(args) {
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
<DateRangePickerComponent id="daterangepicker" created={this.onCreate.bind(this)}></DateRangePickerComponent>

onCreate(args) {
    this.focusOut();
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
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Enable/Disable the RTL
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>enableRtl</i>

```
<DateRangePickerComponent id="daterangepicker" enableRtl={true}></DateRangePickerComponent>
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
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Enable/Disable the persistence
</td>
<td>
<b>Property:</b> <i>enablePersistence</i>

```
<EJ.DateRangePicker id="daterangepicker" enablePersistence={true} ></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>enablePersistence</i>

```
<DateRangePickerComponent id="daterangepicker" enablePersistence={true}></DateRangePickerComponent>
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
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Width
</td>
<td>
<b>Property:</b> <i>width</i>

```
<EJ.DateRangePicker id="daterangepicker" width="200px" ></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>width</i>

```
<DateRangePickerComponent id="daterangepicker" width="200px"></DateRangePickerComponent>
```

</td>
</tr>
<tr>
<td>
Readonly
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>readonly</i>

```
<DateRangePickerComponent id="daterangepicker" readonly={true}></DateRangePickerComponent>
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
<DateRangePickerComponent id="daterangepicker" showClearButton={true}></DateRangePickerComponent>
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
<EJ.DateRangePicker id="daterangepicker" height="35px" ></EJ.DateRangePicker>
```

</td>
<td>
<b>Can be achieved by</b>

```
<DateRangePickerComponent id="daterangepicker" cssClass="e-custom-style"></DateRangePickerComponent>

.e-control-wrapper.e-custom-style.e-date-range-wrapper.e-input-group {
    height: 35px;
}
```

</td>
</tr>
<tr>
<td>
Show/Hide the week number
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>weekNumber</i>

```
<DateRangePickerComponent id="daterangepicker" weekNumber={true}></DateRangePickerComponent>
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
<EJ.DateRangePicker id="daterangepicker" watermarkText="Select a Range" ></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>placeholder</i>

```
<DateRangePickerComponent id="daterangepicker" placeholder="Select a Range"></DateRangePickerComponent>
```

</td>
</tr>
<tr>
<td>
Enable/Disable
</td>
<td>
<b>Property:</b> <i>enabled</i>

```
<EJ.DateRangePicker id="daterangepicker" enabled={false} ></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>enabled</i>

```
<DateRangePickerComponent id="daterangepicker" enabled={false}></DateRangePickerComponent>
```

</td>
</tr>
<tr>
<td>
Disable the DateRangePicker
</td>
<td>
<b>Method:</b> <i>disable()</i>

```
<EJ.DateRangePicker id="daterangepicker" create={onCreate} ></EJ.DateRangePicker>

function onCreate() {
    var daterangeObj = $("#daterangepicker").data("ejDateRangePicker");
    daterangeObj.disable();`
}
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Enable the DateRangePicker
</td>
<td>
<b>Method:</b> <i>enable()</i>

```
<EJ.DateRangePicker id="daterangepicker" create={onCreate} ></EJ.DateRangePicker>

function onCreate() {
    var daterangeObj = $("#daterangepicker").data("ejDateRangePicker");
    daterangeObj.enable();
}
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Enable/Disable the input textbox editing
</td>
<td>
<b>Property:</b> <i>allowEdit</i>

```
<EJ.DateRangePicker id="daterangepicker" allowEdit={false}></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>allowEdit</i>

```
<DateRangePickerComponent id="daterangepicker" allowEdit={true}></DateRangePickerComponent>
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
<DateRangePickerComponent id="daterangepicker" floatLabelType="Auto"></DateRangePickerComponent>
```

</td>
</tr>
<tr>
<td>
zIndex
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>zIndex</i>

```
<DateRangePickerComponent id="daterangepicker" zIndex="2000"></DateRangePickerComponent>
```

</td>
</tr>
<tr>
<td>
Separator
</td>
<td>
<b>Property:</b> <i>separator</i>

```
<EJ.DateRangePicker id="daterangepicker" separator="#" ></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>separator</i>

```
<DateRangePickerComponent id="daterangepicker" separator="@"></DateRangePickerComponent>
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
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Locale
</td>
<td>
<b>Property:</b> <i>locale</i>

```
<EJ.DateRangePicker id="daterangepicker" locale="en-Us" ></EJ.DateRangePicker>
```

</td>
<td>
<b>Property:</b> <i>locale</i>

```
<DateRangePickerComponent id="daterangepicker" locale="en"></DateRangePickerComponent>
```

</td>
</tr>
<tr>
<td>
First day of week
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>firstDayOfWeek</i>

```
<DateRangePickerComponent id="daterangepicker" firstDayOfWeek={5}></DateRangePickerComponent>
```

</td>
</tr>
</thead>
</table>

## Strict mode

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Strict mode
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>strictMode</i>

```
<DateRangePickerComponent id="daterangepicker" strictMode={true}></DateRangePickerComponent>
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
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 1</th>
<th>API in Essential<sup style="font-size:70%">&reg;</sup> JS 2</th>
</tr>
<tr>
<td>
Close
</td>
<td>
<b>Event:</b> <i>close</i>

```
<EJ.DateRangePicker id="daterangepicker" close={onClose} ></EJ.DateRangePicker>

function onClose() {/** code block */}
```

</td>
<td>
<b>Event:</b> <i>close</i>

```
<DateRangePickerComponent id="daterangepicker" close={this.onClose.bind(this)}></DateRangePickerComponent>

onClose(args) {/** code block */}
```

</td>
</tr>
<tr>
<td>
Hide
</td>
<td>
<b>Method:</b> <i>popupHide()</i>

```
<EJ.DateRangePicker id="daterangepicker" create={onCreate} ></EJ.DateRangePicker>

function onCreate(args) {
    var daterangeObject = $("#daterangepicker").data("ejDateRangePicker");
    daterangeObject.popupShow(); daterangeObject.popupHide();
}
```

</td>
<td>
<b>Method:</b> <i>hide()</i>

```
<DateRangePickerComponent id="daterangepicker" created={this.create.bind(this)}></DateRangePickerComponent>

create (args) {
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
<EJ.DateRangePicker id="daterangepicker" open={onOpen} ></EJ.DateRangePicker>

function onOpen(args) {/** code block */ }
```

</td>
<td>
<b>Event:</b> <i>open</i>

```
<DateRangePickerComponent id="daterangepicker" open={this.onOpen.bind(this)}></DateRangePickerComponent>

onOpen(args) {/** code block */ }
```

</td>
</tr>
<tr>
<td>
Show
</td>
<td>
<b>Method:</b> <i>popupShow()</i>

```
<EJ.DateRangePicker id="daterangepicker" create={onCreate} ></EJ.DateRangePicker>

function onCreate(args) {
    var daterangeObject = $("#daterangepicker").data("ejDateRangePicker");
    daterangeObject.popupShow();
}
```

</td>
<td>
<b>Method:</b> <i>show()</i>

```
<DateRangePickerComponent id="daterangepicker" created={this.create.bind(this)}></DateRangePickerComponent>

create (args) {
    this.show();
}
```

</td>
</tr>
</thead>
</table>

{% endraw %}