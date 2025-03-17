---
layout: post
title: Ej1 api migration in React Button component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Button component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Button component

This article describes the API migration process of Button component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Properties

{% raw %}

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Specifies the text of the button | **Property:** *text* <br/><br/> `<EJ.Button id="btn" text="Button"></EJ.Button>` | **Property:** *content* <br/><br/> `<ButtonComponent id="btn" content="Button"></ButtonComponent>` |
| Specifies the content type of the button | **Property:** *ContentType* <br/><br/>  `<EJ.Button id="btn" text="Save" contentType="textandimage" prefixIcon="e-icon e-save"></EJ.Button>`| Not applicable |
| Specifies icon for the button | **Property:** *prefixIcon* <br/><br/> `<EJ.Button id="btn" contentType="imageonly" prefixIcon="e-icon e-save"></EJ.Button>` | **Property:** *iconCss* <br/><br/> `<ButtonComponent id="btn" iconCss="e-icons e-save"></ButtonComponent>` |
| Positioning icon in the button | **Property:** *imagePosition* <br/><br/> `<EJ.Button id="btn" contentType="textandimage" text="Save" prefixIcon="e-icon e-save" imagePosition="imageright"></EJ.Button>`| **Property:** *iconPosition* <br/><br/> `<ButtonComponent id="btn" content="Save" iconCss="e-icons e-save" iconPosition="Right"></ButtonComponent>` |
| Specifies secondary icon for the button | **Property:** *suffixIcon* <br/><br/> `<EJ.Button id="btn" text="FileSearch" contentType="imagetextimage" prefixIcon="e-icon e-search" suffixIcon="e-icon e-file-html"></EJ.Button>` | Not applicable |
| Adding custom class | **Property:** *cssClass* <br/><br/> `<EJ.Button id="btn" text="Button" cssClass="custom-class"></EJ.Button>` | **Property:** *cssClass* <br/><br/> `<ButtonComponent id="btn" cssClass="custom-class" content="Button"></ButtonComponent>` |
| Specifies the size of the button | **Property:** *size* <br/><br/> `<EJ.Button id="btn" text="Button" size="small"></EJ.Button>` | **Property:** *cssClass* <br/><br/> `<ButtonComponent id="btn" cssClass="e-small" content="Button"></ButtonComponent>` |
| Triggers click event repeatedly while pressing the button | **Property:** *repeatButton* <br/><br/> `<EJ.Button id="btn" text="Click" repeatButton={true}></EJ.Button>` | Not applicable |
| Sets time interval between two consecutive click event on the repeat button | **Property:** *timeInterval* <br/><br/> `<EJ.Button id="btn" text="Click" repeatButton={true} timeInterval="100"></EJ.Button>` | Not applicable |
| Specifies the type of the button | **Property:** *type* <br/><br/> `<EJ.Button id="btn" text="Submit" buttonType="submit"></EJ.Button>` | Not applicable |
| Changes normal button into rounded corner | **Property:** *showRoundedCorner* <br/><br/>  `<EJ.Button id="btn" text="Button" showRoundedCorner={true}></EJ.Button>` | Not applicable |
| Specifies the width of the button | **Property:** *width* <br/><br/> `<EJ.Button id="btn" text="Button" width="150px"></EJ.Button>` | Not applicable |
| Specifies the height of the button | **Property:** *height* <br/><br/> `<EJ.Button id="btn" text="Button" height="50px"></EJ.Button>` | Not applicable |
| Adds HTML attributes to the button | **Property:** *htmlAttributes* <br/><br/> var attributes = { disabled: "disabled" }; <br/> `<EJ.Button id="btn" text="Button" htmlAttributes={attributes}></EJ.Button>` | Not applicable |
| Allows the appearance of the Button to be enhanced and visually appealing | Not applicable | **Property:** *isPrimary* <br/><br/> `<ButtonComponent id="btn" isPrimary={true} content="Button"></ButtonComponent>` |
| Makes the button toggle from normal to active state | **Property:** *isToggle* <br/><br/> Not applicable | **Property:** *isToggle* <br/><br/> `<ButtonComponent id="btn" isToggle={true} content="Play"></ButtonComponent>`  |
| Specifies the disabled state of the button | **Property:** *enabled* <br/><br/> `<EJ.Button id="btn" text="Button" enabled={false}></EJ.Button>` | **Property:** *disabled* <br/><br/> `<ButtonComponent id="btn" disabled={true} content="Button"></ButtonComponent>` |
| Enable or disable rendering component in right to left direction | **Property:** *enableRTL* <br/><br/>  `<EJ.Button id="btn" contentType="textandimage" text="Save" prefixIcon="e-icon e-save" enableRTL={true}></EJ.Button>` | **Property:** *enableRtl* <br/><br/> `<ButtonComponent id="btn" enableRtl={true} content="Save" iconCss="e-icons e-save"></ButtonComponent>` |

## Methods

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Destroys the control | **Methods:** *destroy* <br/><br/> `<EJ.Button id="btn" text="Button"></EJ.Button>` <br/> var btnObj = $('#btn').ejButton('instance');<br/>btnObj.destroy(); | **Methods:** *destroy* <br/><br/> `<ButtonComponent id="btn" content="Button" ref={(scope) => {this.btnObj = scope}></ButtonComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.btnObj.destroy(); <br/> } |
| Disables the button | **Methods:** *disable* <br/><br/> `<EJ.Button id="btn" text="Button"></EJ.Button>` <br/> var btnObj = $('#btn').ejButton('instance');<br/>btnObj.disable(); | Not applicable |
| Enables the button | **Methods:** *enable* <br/><br/> `<EJ.Button id="btn" text="Button"></EJ.Button>` <br/> var btnObj = $('#btn').ejButton('instance');<br/>btnObj.enable(); | Not applicable |

## Events

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Triggers while clicking the button | **Events:** *click* <br/><br/> `<EJ.Button id="btn" text="Button" click={btnClick}></EJ.Button>` <br/>function btnClick(args) {<br/>/** code block */<br/>} | Not applicable |
| Triggers once the component rendering is completed | **Events:** *create* <br/><br/> `<EJ.Button id="btn" text="Button" click={create}></EJ.Button>` <br/>function create(args) {<br/>/** code block */<br/>} | **Events:** *created* <br/><br/> `<ButtonComponent id="btn" content="Button" created={this.created.bind(this)}></ButtonComponent>`<br/> created() {<br/>/** code block */<br/>} |
| Triggers once the component is destroyed | **Events:** *destroy* <br/><br/> `<EJ.Button id="btn" text="Button" destroy={destroy}></EJ.Button>` <br/>function destroy(args) {<br/>/** code block */<br/>} | Not applicable |

{% endraw %}