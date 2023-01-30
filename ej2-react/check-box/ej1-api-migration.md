---
layout: post
title: Ej1 api migration in React Check box component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Check box component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Check box component

This article describes the API migration process of Checkbox component from Essential JS 1 to Essential JS 2.

## Properties

{% raw %}

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Checkbox label | **Property:** *text* <br/><br/> `<EJ.CheckBox id="checkbox" text="Checkbox"></EJ.CheckBox>` | **Property:** *label* <br/><br/> `<CheckBoxComponent id="checkbox" label="Checkbox"></CheckBoxComponent>` |
| Checked state | **Property:** *enableTriState and checkState* <br/><br/> `<EJ.CheckBox id="checkbox" enableTriState={true} text="Checked state" checkState="check"></EJ.CheckBox>` | **Property:** *checked* <br/><br/> `<CheckBoxComponent id="checkbox" checked={true} label="Checked state"></CheckBoxComponent>` |
| Indeterminate state | **Property:** *enableTriState and checkState* <br/><br/> `<EJ.CheckBox id="checkbox" text="Indeterminate state" enableTriState={true} checkState="indeterminate"></EJ.CheckBox>` | **Property:** *indeterminate* <br/><br/> `<CheckBoxComponent id="indeterminate" indeterminate={true} label="Intermediate state"></CheckBoxComponent>` |
| Adding custom css class | **Property:** *cssClass* <br/><br/> `<EJ.CheckBox id="checkbox" text="Checkbox" cssClass="custom-class"></EJ.CheckBox>` | **Property:** *cssClass* <br/><br/> `<CheckBoxComponent id="checkbox" cssClass="custom-class" label="Checkbox"></CheckBoxComponent>` |
| Label position | Not applicable | **Property:** *labelPosition* <br/><br/> `<CheckBoxComponent id="checkbox" label="Checkbox" labelPosition="Before"></CheckBoxComponent>` |
| Disabled state | **Property:** *enabled* <br/><br/> `<EJ.CheckBox id="checkbox" text="Checkbox" enabled={false}></EJ.CheckBox>` | **Property:** *disabled* <br/><br/> `<CheckBoxComponent id="checkbox" label="Checkbox" disabled={true}></CheckBoxComponent>` |
| State persistence | **Property:** *enablePersistence* <br/><br/> `<EJ.CheckBox id="checkbox" text="Checkbox" enablePersistence={true}></EJ.CheckBox>` | **Property:** *enablePersistence* <br/><br/> `<CheckBoxComponent id="checkbox" label="Checkbox" enablePersistence={true}></CheckBoxComponent>` |
| RTL | **Property:** *enableRTL* <br/><br/> `<EJ.CheckBox id="checkbox" text="Checkbox" enableRTL={true}></EJ.CheckBox>` | **Property:** *enableRtl* <br/><br/> `<CheckBoxComponent id="checkbox" label="Checkbox" enableRtl={true}></CheckBoxComponent>` |
| HTML Attributes | **Property:** *htmlAttributes* <br/><br/> var attributes = { required:"required" }; <br/> `<EJ.CheckBox id="checkbox" text="Checkbox" htmlAttributes={attributes}></EJ.CheckBox>` | Not applicable |
| Id property | **Property:** *id* <br/><br/> `<EJ.CheckBox id="sync"></EJ.CheckBox>` | Not applicable |
| Prefix value of Id | **Property:** *idPrefix* <br/><br/> `<EJ.CheckBox id="checkbox"  text="Checkbox" id-prefix="react"></EJ.CheckBox>` | Not applicable |
| Name attribute | **Property:** *name* <br/><br/> `<EJ.CheckBox id="checkbox" name="conformation"></EJ.CheckBox>` | **Property:** *name* <br/><br/> `<CheckBoxComponent id="checkbox" name="conformation"></CheckBoxComponent>` |
| Value attribute | **Property:** *value* <br/><br/> `<EJ.CheckBox id="checkbox" name="conformation" value="Received"></EJ.CheckBox>` | **Property:** *value* <br/><br/> `<CheckBoxComponent id="checkbox" name="conformation" value="Received"></CheckBoxComponent>` |
| Show rounded corner | **Property:** *showRoundedCorner* <br/><br/> `<EJ.CheckBox id="checkbox"  text="Checkbox" showRoundedCorner={true}></EJ.CheckBox>` | Not applicable |
| Size | **Property:** *size* <br/><br/> `<EJ.CheckBox id="checkbox" text="Small" size="small"></EJ.CheckBox>` | **Property:** *cssClass* <br/><br/> `<CheckBoxComponent id="checkbox" cssClass="e-small" label="Checkbox"></CheckBoxComponent>` |
| Validation rules | **Property:** *validationRules* <br/><br/> var rules = { required: true }; <br/> `<EJ.CheckBox id="checkbox" validationRules={rules}></EJ.CheckBox>` | Not applicable |
| Validation message | **Property:** *validationMessage* <br/><br/> var rules = { required: true }; <br/> var message = { required: "Required CheckBox value" }; <br/> `<EJ.CheckBox id="checkbox" validationRules={rules} validationMessage={message}></EJ.CheckBox>` | Not applicable |

## Methods

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Destroy | **Method:** *destroy* <br/><br/> `<EJ.CheckBox id="checkbox" text="Checkbox"></EJ.CheckBox>` <br/> var checkbox = $('#checkbox').ejCheckBox('instance'); <br/> checkbox.destroy(); | **Method:** *destroy* <br/><br/> `<CheckBoxComponent id="checkbox" label="Checkbox" ref={(scope) => {this.checkbox = scope}></CheckBoxComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.checkbox.destroy(); <br/> } |
| Disable the Checkbox | **Method:** *disable* <br/><br/> `<EJ.CheckBox id="checkbox" text="Checkbox"></EJ.CheckBox>` <br/> var checkbox = $('#checkbox').ejCheckBox('instance'); <br/>checkbox.disable(); | Not applicable |
| Enable the Checkbox | **Method:** *enable* <br/><br/> `<EJ.CheckBox id="checkbox" text="Checkbox"></EJ.CheckBox>` <br/> var checkbox = $('#checkbox').ejCheckBox('instance'); <br/>checkbox.enable(); | Not applicable |
| Check state of the Checkbox | **Method:** *isChecked* <br/><br/> `<EJ.CheckBox id="checkbox" text="Checkbox"></EJ.CheckBox>` <br/> var checkbox = $('#checkbox').ejCheckBox('instance'); <br/>checkbox.isChecked(); | Not applicable |

## Events

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| BeforeChange Event | **Events:** *beforeChange* <br/><br/> `EJ.CheckBox id="checkbox" text="Checkbox" beforeChange={beforeChange}></EJ.CheckBox>`<br/>function beforeChange(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | Not applicable |
| Change Event | **Events:** *change* <br/><br/> `<EJ.CheckBox id="checkbox" text="Checkbox" change={change}></EJ.CheckBox>`<br/>function change(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | **Events:** *change* <br/><br/> `<CheckBoxComponent id="checkbox" label="Checkbox" change={this.change.bind(this)}></CheckBoxComponent>`<br/>change(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} |
| created Event | **Events:** *create* <br/><br/> `<EJ.CheckBox id="checkbox" text="Checkbox" create={create}></EJ.CheckBox>`<br/>function create(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | **Events:** *created* <br/><br/> `<CheckBoxComponent id="checkbox" label="Checkbox" created={this.created.bind(this)}></CheckBoxComponent>`<br/> created() {<br/> &nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} |
| Destroy Event | **Events:** *destroy* <br/><br/> `<EJ.CheckBox id="checkbox" text="Checkbox" destroy={destroy}></EJ.CheckBox>`<br/>function destroy(args) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;/** code block */ <br/>} | Not applicable |

{% endraw %}