---
layout: post
title: Ej1 api migration in React Split button component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Split button component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Split button component

This article describes the API migration process of SplitButton component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Properties

{% raw %}

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Specifies the text of the splitbutton | **Property:** *text* <br/><br/> `<EJ.SplitButton id="splitbutton" text="login"></EJ.SplitButton>` | **Property:** *content* <br/><br/> `<SplitButtonComponent id="splitbutton" content="Paste"></SplitButtonComponent>` |
| Popup content | **Property:** *target* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target"></EJ.SplitButton>` | **Property:** *target* <br/><br/> `<SplitButtonComponent id="splitbutton" target="#target" content="SplitButton" ></SplitButtonComponent>` |
| Popup items | Not applicable | **Property:** *items* <br/><br/> `<SplitButtonComponent id="splitbutton" content="Paste" items={this.items}></SplitButtonComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.items = [ <br/> &nbsp; { <br/> &nbsp;  &nbsp; text: 'Cut' <br/> &nbsp; },<br/> &nbsp; { <br/> &nbsp;  &nbsp; text: 'Copy' <br/> &nbsp; },<br/> &nbsp; { <br/> &nbsp;  &nbsp; text: 'Paste' <br/> &nbsp; }]; <br/> } |
| Arrow position | **Property:** *arrowPosition* <br/><br/> `<EJ.SplitButton id="splitbutton" text="login" target="#target" arrowPosition="left"></EJ.SplitButton>` | Not applicable |
| Button mode | **Property:** *buttonMode* <br/><br/> `<EJ.SplitButton id="splitbutton" text="login" target="#target" buttonMode="dropdown"></EJ.SplitButton>` | Not applicable |
| Content type | **Property:** *contentType* <br/><br/> `<EJ.SplitButton id="splitbutton" text="login" contentType="textonly" target="#target"></EJ.SplitButton>` | Not applicable |
| Icons | **Property:** *prefixIcon* <br/><br/> `<EJ.SplitButton id="splitbutton" text="login" contentType="textandimage" prefixIcon="e-icon e-handup" target="#target"></EJ.SplitButton>` | **Property:** *iconCss* <br/><br/> `<SplitButtonComponent id="splitbutton" content="Paste" items={this.items} iconCss="e-icons e-paste"></SplitButtonComponent>` |
| Icon position | **Property:** *imagePosition* <br/><br/>  `<EJ.SplitButton id="splitbutton" text="login" contentType="textandimage" prefixIcon="e-icon e-handup" target="#target" imagePosition="imagetop"></EJ.SplitButton>` | **Property:** *iconPosition* <br/><br/> `<SplitButtonComponent id="splitbutton" content="Paste" items={this.items} iconCss="e-icons e-paste" iconPosition="Top"></SplitButtonComponent>` |
| Secondary icon | **Property:** *suffixIcon* <br/><br/> `<EJ.SplitButton id="splitbutton" text="login" contentType="imagetextimage" prefixIcon="e-icon e-handup" suffixIcon="e-icon e-palette" target="#target"></EJ.SplitButton>` | Not applicable |
| Adding custom class | **Property:** *cssClass* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target" cssClass="custom-class"></EJ.SplitButton>` | **Property:** *cssClass* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} cssClass="custom-class"></SplitButtonComponent>` |
| Disabled state | **Property:** *enabled* <br/><br/> `<EJ.SplitButton id="splitbutton" text="login" target="#target" enabled={false}></EJ.SplitButton>` | **Property:** *disabled* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} disabled={true}></SplitButtonComponent>` |
| RTL | **Property:** *enableRTL* <br/><br/> `<EJ.SplitButton id="splitbutton" text="login" target="#target" contentType="textandimage" prefixIcon="e-icon e-handup" enableRTL={true}></EJ.SplitButton>` | **Property:** *enableRtl* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} content="Paste" enableRtl={true} iconCss="e-icons e-paste"></SplitButtonComponent>` |
| Height | **Property:** *height* <br/><br/> `<EJ.SplitButton id="splitbutton" text="login" target="#target" height="30"></EJ.SplitButton>` | Not applicable |
| Width | **Property:** *width* <br/><br/> `<EJ.SplitButton id="splitbutton" text="login" target="#target" width="100"></EJ.SplitButton>` | Not applicable |
| HTML attributes | **Property:** *htmlAttributes* <br/><br/> var attributes = { disabled:"disabled" }; <br/> `<EJ.SplitButton id="splitbutton" text="login" target="#target" htmlAttributes="attributes"></EJ.SplitButton>` | Not applicable |
| Show rounded corner | **Property:** *showRoundedCorner* <br/><br/> `<EJ.SplitButton id="splitbutton" text="login" target="#target" showRoundedCorner={true}></EJ.SplitButton>` | Not applicable |
| Size | **Property:** *size* <br/><br/> `<EJ.SplitButton id="splitbutton" size="small" text="Small" target="#target"></EJ.SplitButton>` | **Property:** *cssClass* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} content="Small" cssClass="e-small"></SplitButtonComponent>` |

## Methods

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Destroy method | **Method:** *destroy* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target"></EJ.SplitButton>`<br/>var splitButton = $('#splitbutton').ejSplitButton('instance');<br/> splitButton.destroy(); | **Method:** *destroy* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} content="SplitButton" ref={(scope) => {this.splitButton = scope}></SplitButtonComponent>`<br/> constructor(props: {}) { <br/> &nbsp; this.splitButton.destroy(); <br/> } |
| Disable method | **Method:** *disable* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target"></EJ.SplitButton>`<br/>var splitButton = $('#splitbutton').ejSplitButton('instance');<br/> splitButton.disable(); | Not applicable |
| Enable method | **Method:** *enable* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target"></EJ.SplitButton>`<br/>var splitButton = $('#splitbutton').ejSplitButton('instance');<br/> splitButton.enable(); | Not applicable |
| Hide popup | **Method:** *hide* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target"></EJ.SplitButton>`<br/>var splitButton = $('#splitbutton').ejSplitButton('instance');<br/> splitButton.hide(); | **Method:** *toggle* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} content="SplitButton" ref={(scope) => {this.splitButton = scope}></SplitButtonComponent>`<br/> constructor(props: {}) { <br/> &nbsp; this.splitButton.toggle(); <br/> } |
| Show popup | **Method:** *show* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target"></EJ.SplitButton>`<br/>var splitButton = $('#splitbutton').ejSplitButton('instance');<br/> splitButton.show(); | **Method:** *toggle* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} content="SplitButton" ref={(scope) => {this.splitButton = scope}></SplitButtonComponent>`<br/> constructor(props: {}) { <br/> &nbsp; this.splitButton.toggle(); <br/> } |

## Events

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| BeforeOpen event | **Event:** *beforeOpen* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target" beforeOpen={beforeOpen}></EJ.SplitButton>`<br/>function beforeOpen(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | **Event:** *beforeOpen* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} content="SplitButton" beforeOpen={this.beforeOpen.bind(this)}></SplitButtonComponent>`<br/> beforeOpen(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |
| Click event | **Event:** *click* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target" click={click}></EJ.SplitButton>` <br/>function click(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | **Event:** *click* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} content="SplitButton" click={this.click.bind(this)}></SplitButtonComponent>`<br/> click(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |
| Close event | **Event:** *close* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target" close={close}></EJ.SplitButton>` <br/>function close(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | **Event:** *close* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} content="SplitButton" close={this.close.bind(this)}></SplitButtonComponent>`<br/> close(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |
| Create event | **Event:** *create* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target" create={create}></EJ.SplitButton>` <br/>function create(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | **Event:** *created* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} content="SplitButton" created={this.created.bind(this)}></SplitButtonComponent>`<br/> created() {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>}|
| Destroy event | **Event:** *destroy* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target" destroy={destroy}></EJ.SplitButton>` <br/>function destroy(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | Not applicable |
| ItemMouseOut event | **Event:** *itemMouseOut* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target" itemMouseOut={itemMouseOut}></EJ.SplitButton>` <br/>function itemMouseOut(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | Not applicable |
| ItemMouseOver event | **Event:** *itemMouseOver* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target" itemMouseOver={itemMouseOver}></EJ.SplitButton>` <br/>function itemMouseOver(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | Not applicable |
| Item select event | **Event:** *itemSelected* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target" itemSelected={itemSelected}></EJ.SplitButton>` <br/>function itemSelected(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | **Event:** *select* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} content="SplitButton" select={this.select.bind(this)}></SplitButtonComponent>` <br/> select(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |
| Open event | **Event:** *open* <br/><br/> `<EJ.SplitButton id="splitbutton" text="SplitButton" target="#target" open={open}></EJ.SplitButton>` <br/>function open(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} | **Event:** *open* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} content="SplitButton" open={this.open.bind(this)}></SplitButtonComponent>`<br/>function open(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |
| BeforeClose event | Not applicable | **Event:** *beforeClose* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} content="SplitButton" beforeClose={this.beforeClose.bind(this)}></SplitButtonComponent>`<br/> beforeClose(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |
| BeforeItemRender event | Not applicable | **Event:** *beforeItemRender* <br/><br/> `<SplitButtonComponent id="splitbutton" items={this.items} content="SplitButton" beforeItemRender={this.beforeItemRender.bind(this)}></SplitButtonComponent>`<br/> beforeItemRender(args) {<br/> &nbsp;&nbsp;&nbsp;&nbsp; /** code block */ <br/>} |

{% endraw %}