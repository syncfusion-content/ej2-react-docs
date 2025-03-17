---
layout: post
title: Ej1 api migration in React Radio button component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Radio button component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Radio button component

This article describes the API migration process of RadioButton component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Properties

{% raw %}

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Label | **Property:** *text* <br/><br/> `<EJ.RadioButton  id="radio" text="RadioButton"></EJ.RadioButton>` | **Property:** *label* <br/><br/> `<RadioButtonComponent id="radio" label="RadioButton"></RadioButtonComponent>` |
| Checked state | **Property:** *checked* <br/><br/> `<EJ.RadioButton id="radio" text="RadioButton" checked={true}></EJ.RadioButton>` | **Property:** *checked* <br/><br/> `<RadioButtonComponent id="radio" label="RadioButton" checked={true}></RadioButtonComponent>` |
| Adding custom css class | **Property:** *cssClass* <br/><br/> `<EJ.RadioButton  id="radio" text="RadioButton" cssClass="custom-class"></EJ.RadioButton>` | **Property:** *cssClass* <br/><br/> `<RadioButtonComponent id="radio" label="RadioButton" cssClass="custom-class"></RadioButtonComponent>` |
| Disabled state | **Property:** *enabled* <br/><br/> `<EJ.RadioButton  id="radio" text="RadioButton" enabled={false}></EJ.RadioButton>` | **Property:** *disabled* <br/><br/> `<RadioButtonComponent id="radio" label="RadioButton" disabled={true}></RadioButtonComponent>` |
| State persistence | **Property:** *enablePersistence* <br/><br/> `<EJ.RadioButton  id="radio" text="RadioButton" enablePersistence={true}></EJ.RadioButton>` | **Property:** *enablePersistence* <br/><br/> `<RadioButtonComponent id="radio" label="RadioButton" enablePersistence={true}></RadioButtonComponent>` |
| RTL | **Property:** *enableRTL* <br/><br/> `<EJ.RadioButton  id="radio" text="RadioButton" enableRTL={true}></EJ.RadioButton>` | **Property:** *enableRtl* <br/><br/> `<RadioButtonComponent id="radio" label="RadioButton" enableRtl={true}></RadioButtonComponent>` |
| HTML Attributes | **Property:** *htmlAttributes* <br/><br/> var attributes = { required:"required" }; <br/> `<EJ.RadioButton  id="radio" text="RadioButton" htmlAttributes={attributes}></EJ.RadioButton>` | Not applicable |
| Id property | **Property:** *id* <br/><br/> `<EJ.RadioButton id="sync"></EJ.RadioButton>` | Not applicable |
| Prefix value of Id | **Property:** *idPrefix* <br/><br/> `<EJ.RadioButton id="radio"  idPrefix="react"></EJ.RadioButton>` | Not applicable |
| Name attribute | **Property:** *name* <br/><br/> `<EJ.RadioButton id="radio"  name="gender" checked={true} text="Male"></EJ.RadioButton>` | **Property:** *name* <br/><br/> `<RadioButtonComponent id="radio" name="gender" checked={true} label="Male"></RadioButtonComponent>` |
| Value attribute | **Property:** *value* <br/><br/> `<EJ.RadioButton id="radio"  name="gender" checked={true}  value="male" text="Male"></EJ.RadioButton>` | **Property:** *value* <br/><br/> `<RadioButtonComponent id="radio" name="gender" checked={true} value="male" label="Male"></RadioButtonComponent>` |
| Size | **Property:** *size* <br/><br/> `<EJ.RadioButton id="radio" size="small" text="RadioButton"></EJ.RadioButton>` | **Property:** *cssClass* <br/><br/> `<RadioButtonComponent id="radio" label="RadioButton" cssClass="e-small"></RadioButtonComponent>` |
| Validation rules | **Property:** *validationRules* <br/><br/> var rules = { required: true }; <br/>  `<EJ.RadioButton id="radio" text="RadioButton" validationRules={rules}></EJ.RadioButton>` | Not applicable |
| Validation message | **Property:** *validationMessage* <br/><br/> var rules = { required: true }; <br/> var message = { required: "Required RadioButton value" }; <br/> `<EJ.RadioButton id="radio" text="RadioButton" validationRules={rules} validationMessage={message}></EJ.RadioButton>` | Not applicable |

## Methods

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Destroy | **Method:** *destroy* <br/><br/> `<EJ.RadioButton  id="radio" text="RadioButton"></EJ.RadioButton>` <br/> var radioButton = $('#radio').ejRadioButton('instance');<br/>radioButton.destroy(); | **Method:** *destroy* <br/><br/> `<RadioButtonComponent id="radio" label="RadioButton" ref={(scope) => {this.radioButton = scope}></RadioButtonComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.radioButton.destroy(); <br/> } |
| Disable the RadioButton | **Method:** *disable* <br/><br/> `<EJ.RadioButton  id="radio" text="RadioButton"></EJ.RadioButton>` <br/> var radioButton = $('#radio').ejRadioButton('instance');<br/>radioButton.disable(); | Not applicable |
| Enable the RadioButton | **Method:** *enable* <br/><br/> `<EJ.RadioButton  id="radio" text="RadioButton"></EJ.RadioButton>` <br/> var radioButton = $('#radio').ejRadioButton('instance');<br/>radioButton.enable(); | Not applicable |

## Events

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| BeforeChange Event | **Event:** *beforeChange* <br/><br/> `<EJ.RadioButton  id="radio" text="RadioButton" beforeChange={beforeChange}></EJ.RadioButton>` <br/>function beforeChange(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | Not applicable |
| Change Event | **Event:** *change* <br/><br/> `<EJ.RadioButton  id="radio" text="RadioButton" change={change}></EJ.RadioButton>` <br/>function change(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | **Event:** *change* <br/><br/> `<RadioButtonComponent id="radio" label="RadioButton" change={this.change.bind(this)}></RadioButtonComponent>` <br/> change(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} |
| Create Event | **Event:** *create* <br/><br/> `<EJ.RadioButton  id="radio" text="RadioButton" create={create}></EJ.RadioButton>` <br/>function create(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | **Event:** *created* <br/><br/> `<RadioButtonComponent id="radio" label="RadioButton" created={this.created.bind(this)}></RadioButtonComponent>` <br/> created() {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} |
| Destroy Event | **Event:** *destroy* <br/><br/> `<EJ.RadioButton  id="radio" text="RadioButton" destroy={destroy}></EJ.RadioButton>` <br/> function destroy(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | Not applicable |

{% endraw %}