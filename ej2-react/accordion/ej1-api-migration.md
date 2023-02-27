---
layout: post
title: Ej1 api migration in React Accordion component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Accordion component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Accordion component

This article describes the API migration process of Accordion component from Essential JS 1 to Essential JS 2.

## Accessibility and Localization


<!-- markdownlint-disable MD033 -->
|**Behavior** |**Property in Essential JS 1** |**Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
|Keyboard Navigation | **Property** : allowKeyboardNavigation<br/> `<EJ.Accordion id="Accordion" allowKeyboardNavigation={false}></EJ.Accordion>`  | <b>Not Applicable</b> |
|Localization | <b>Not Applicable</b>  | **Property** : locale<br/> `<AccordionComponent id="Accordion" locale="fr-BE" ></AccordionComponent>`  |
|Right to left | **Property:** enableRTL<br/> `<EJ.Accordion id="Accordion" enableRTL={true} ></EJ.Accordion>` | **Property:** enableRTL<br/> `<AccordionComponent id="Accordion" enableRTL={true}> </AccordionComponent>`  |

## AjaxSettings

<!-- markdownlint-disable MD033 -->
|**Behavior** |**Property in Essential JS 1** |**Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
|Default | **Property** : ajaxSettings<br/> `<EJ.Accordion id="accordion" ajaxSettings.type="GET"></EJ.Accordion>` | <b>Not Applicable</b>  |
|Asynchronous | **Property** : ajaxSettings.async <br/> `<EJ.Accordion id="accordion" ajaxSettings.async={true}></EJ.Accordion>`| <b>Not Applicable</b>  |
|Browser Cache | **Property**: ajaxSettings.cache<br/> `<EJ.Accordion id="accordion" ajaxSettings.cache={false}></EJ.Accordion>` | <b>Not Applicable</b> |
|Request type | **Property** : ajaxSettings.contentType<br/> `<EJ.Accordion id="accordion" ajaxSettings.contentType="html "></EJ.Accordion>` | <b>Not Applicable</b> |
|Data | **Property** : ajaxSettings.data<br/> `<EJ.Accordion id="accordion" ajaxSettings.data={}></EJ.Accordion>` | <b>Not Applicable</b> |
|Response type | **Property** : ajaxSettings.dataType <br/> `<EJ.Accordion id="accordion" ajaxSettings.dataType="html"></EJ.Accordion>` | <b>Not Applicable</b> |
|HTTP request type | **Property:** ajaxSettings.type<br/> `<EJ.Accordion id="accordion" ajaxSettings.type="GET"></EJ.Accordion>` | <b>Not Applicable</b> |
|AjaxBeforeLoad | **Event:** ajaxBeforeLoad<br/> `<EJ.Accordion id='accordion' ajaxBeforeLoad={this.onajaxBeforeLoad}></EJ.Accordion>`<br/>onajaxBeforeLoad (event){ } | <b>Not Applicable</b> |
|AjaxError | **Event:** AjaxError<br/> `<EJ.Accordion id='accordion' ajaxError={this.onajaxError}></EJ.Accordion>`<br/> onajaxError (event){} | <b>Not Applicable</b> |
|AjaxLoad | **Event:** ajaxLoad<br/> `<EJ.Accordion id='accordion' ajaxLoad={this.onajaxLoad}></EJ.Accordion>`<br/> onajaxLoad (event){} | <b>Not Applicable</b> |
|AjaxSuccess | **Event:** ajaxSuccess<br/> `<EJ.Accordion id='accordion' ajaxSuccess={this.onajaxSuccess}></EJ.Accordion>`<br/> onajaxSuccess (event){} | <b>Not Applicable</b> |

## Animation

<!-- markdownlint-disable MD033 -->
|**Behavior** |**Property in Essential JS 1** |**Property in Essential JS 2** |
| --------------- | --------------------------- | --------------------------- |
|Default |<b>Not Applicable</b> | **Property** :animation<br/> `<AccordionComponent id='accordion' animation={this.animation}></AccordionComponent>`<br/><br/>constructor(props: {}) {<br/> this.animation = {collapse: { effect: 'FlipXDownIn', duration: 600, easing: 'ease' }',expand: { effect: 'FlipXUpIn', duration: 600, easing: 'ease' }}; } |
|EnableAnimation | **Property** :animation<br/> `<EJ.Accordion id="Accordion" enableAnimation={false}></EJ.Accordion>`<br/> | <b>Not Applicable</b>|
|Expand animation |<b>Not Applicable</b> | **Property** :animation.expand<br/> `<AccordionComponent id='accordion'animation={this.animation}></AccordionComponent>`<br/><br/>constructor(props: {}) {<br/> this.animation = { expand: { effect: 'FlipXUpIn', duration: 600, easing: 'ease' }};} |
|Collapse animation |<b>Not Applicable</b> | **Property** :animation.collapse<br/> `<AccordionComponent id='accordion'animation={this.animation}></AccordionComponent>`<br/><br/>constructor(props: {}) {<br/> this.animation = { collapse: { effect: 'SlideLeft', duration: 600, easing: 'ease-in' }};} |
|Duration  [expand / collapse]|<b>Not Applicable</b> | **Property** :animation.collapse.duration<br/> `<AccordionComponent id='accordion'animation={this.animation}></AccordionComponent>`<br/><br/>constructor(props: {}) {<br/> this.animation = { expand: { duration: 600 }};} |
|Easing  [expand / collapse] |<b>Not Applicable</b> | **Property** :animation.collapse.easing<br/> `<AccordionComponent id='accordion'animation={this.animation}></AccordionComponent>`<br/><br/>constructor(props: {}) {<br/> this.animation = { expand: { easing: 'ease-in' }};} |
|Effect  [expand / collapse] |<b>Not Applicable</b> | **Property** :animation.collapse.effect<br/> `<AccordionComponent id='accordion'animation={this.animation}></AccordionComponent>`<br/><br/>constructor(props: {}) {<br/> this.animation = { expand: { effect: 'SlideLeft' }};} |

## Items

<!-- markdownlint-disable MD033 -->
|**Behavior** |**Property in Essential JS 1** |**Property in Essential JS 2** |
| ------------ | --------------------------- | ------------------------- |
|Default | <b>Not Applicable</b> | **Property** : items<br/> `<AccordionComponent id="Accordion" items={this.items}> </AccordionComponent>` |
|Content | <b>Not Applicable</b> | **Property** : items[0].content <br/> `<AccordionComponent id="Accordion"items={this.items}> </AccordionComponent>`<br/> <br/>constructor(props: {}) {<br/> this.items = {content: 'Contents'};} |
|Custom class | <b>Not Applicable</b>  | **Property** : items[0].cssClass <br/> `<AccordionComponent id="Accordion"items={this.items}> </AccordionComponent>`<br/> <br/> constructor(props: {}) {<br/> this.items = { cssClass: 'customClass'};}|
|Header| <b>Not Applicable</b> | **Property** : items[0].Header <br/> `<AccordionComponent id="Accordion"items={this.items}> </AccordionComponent>`<br/> <br/> constructor(props: {}) {<br/> this.items = {  header: 'Header1'};}|
|HeaderSize| **Property** : items[0].headerSize <br/> `<EJ.Accordion id="Accordion" headerSize="50px" ></EJ.Accordion>`  | <b>Not Applicable</b> |
|Icon class |<b>Not Applicable</b> | **Property** : items[0].iconCss <br/> `<AccordionComponent id="Accordion"items={this.items}> </AccordionComponent>`<br/> <br/>constructor(props: {}) {<br/> this.items = {  iconCss: 'e-icons'};}|
|IsExpand | <b>Not Applicable</b> | **Property** : items[0].expanded <br/> `<AccordionComponent id="Accordion"items={this.items}> </AccordionComponent>`<br/> <br/>constructor(props: {}) {<br/> this.items = {  expanded: true };}|
|Collapse Item |**Method** : collapsePanel(index) <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/><br/>var obj=$('#Accordion').ejAccordion('instance')<br/>obj.collapsePanel(0);| **Method** : expandItem(index, false) <br/> `<AccordionComponent id="Accordion" items={this.items} ref = {(scope) => {this.AccordionObj = scope}}> </AccordionComponent>`<br/> <br/> constructor(props: {}) {<br/> this.AccordionObj.expandItem(0, false); }|
|Expand Item |**Method** : expandPanel(index) <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/> var obj=$('#Accordion').ejAccordion('instance')<br/>obj.expandPanel(0);| **Method** :expandItem(index, true) <br/> `<AccordionComponent id="Accordion" ref = {(scope) => {this.AccordionObj = scope}} items={this.items}> </AccordionComponent>`<br/> <br/> constructor(props: {}) {<br/> this.AccordionObj.expandItem(0, true); }|
|CollapseAll |**Method** : collapseAll() <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/>var obj=$('#Accordion').ejAccordion('instance')<br/>obj.collapseAll();| <b>Not Applicable</b> |
|ExpandAll |**Method** : expandAll() <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/>var obj=$('#Accordion').ejAccordion('instance')<br/>obj.expandAll();| <b>Not Applicable</b> |
|Get ItemsCount |**Method** : getItemsCount() <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/>var obj=$('#Accordion').ejAccordion('instance')<br/>obj.getItemsCount();| <b>Not Applicable</b> |
|AddItem |**Method** : addItem(text, content, index) <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/> var obj=$('#Accordion').ejAccordion('instance')<br/>obj.addItem("New item", "The accordion content", 2);| **Method** : addItem(items, index) <br/> `<AccordionComponent id="Accordion"items={this.items}> </AccordionComponent>`<br/> <br/> constructor(props: {}) {<br/> this.AccordionObj.addItem([{ header: 'App', content: 'text' }], 0); }|
|Remove Item |**Method** : removeItem(index) <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/>var obj=$('#Accordion').ejAccordion('instance')<br/>obj.removeItem(0);| **Method** : removeItem(index)  <br/> `<AccordionComponent id="Accordion"items={this.items}> </AccordionComponent>`<br/> <br/> constructor(props: {}) {<br/> this.AccordionObj.removeItem(index); }|
|Disable Items |**Property** : disabledItems <br/> `<EJ.Accordion id="Accordion" disabledItems="[0, 1]"></EJ.Accordion>`| <b>Not Applicable</b> |
|Enable Items |**Property** : enabledItems <br/> `<EJ.Accordion id="Accordion" enabledItems="[0, 1]"></EJ.Accordion>`| <b>Not Applicable</b> |
|Disable Item |**Method** : disableItems([index]) <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/>var obj=$('#Accordion').ejAccordion('instance')<br/>obj.disableItems([1]);| **Method** : enableItem(index, false) <br/> `<AccordionComponent id="Accordion" ref = {(scope) => {this.AccordionObj = scope}}></AccordionComponent>`<br/> <br/>constructor(props: {}) {<br/> this.AccordionObj.enableItem(0, false); } |
|Enable Item |**Method** : enableItems([index]) <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/>var obj=$('#Accordion').ejAccordion('instance')<br/>obj.enableItems([1]);| **Method** :  enableItem(index, true)  <br/> `<AccordionComponent id="Accordion" ref = {(scope) => {this.AccordionObj = scope}}></AccordionComponent>`<br/> <br/>constructor(props: {}) {<br/> this.AccordionObj.enableItem(0, true); |
|Hide Item | <b>Not Applicable</b> | **Method** :  hideItem(index, true)  <br/> `<AccordionComponent id="Accordion" ref = {(scope) => {this.AccordionObj = scope}}></AccordionComponent>`<br/> <br/>constructor(props: {}) {<br/> this.AccordionObj.hideItem(0, true); }|
|SelectedItemIndex | **Property** : selectedItemIndex  <br/> `<EJ.Accordion id="Accordion" #Accordion selectedItemIndex={false}></EJ.Accordion>`<br/>  | <b>Not Applicable</b> |
|Select | <b>Not Applicable</b> | **Method** : select(index) <br/> `<AccordionComponent id="Accordion" ref = {(scope) => {this.AccordionObj = scope}}></AccordionComponent>`<br/> <br/>constructor(props: {}) {<br/> this.AccordionObj.select(0); }|
|BeforeActivate | **Event:** beforeActivate<br/> `<EJ.Accordion id='accordion' beforeActivate={this.onbeforeActivate}></EJ.Accordion>`<br/> <br/> onbeforeActivate(event){}  | **Event:** expanding<br/> `<AccordionComponent id="Accordion" ref = {(scope) => {this.AccordionObj = scope}} expanding={this.onexpanding.bind(this)}></AccordionComponent>`<br/> <br/> onexpanding(event){}  |
|Activate | **Event:** activate<br/> `<EJ.Accordion id='accordion' activate={this.onActivate}'></EJ.Accordion>`<br/> <br/> onActivate(event){}  | **Event:** expanded <br/> `<AccordionComponent id="Accordion" ref = {(scope) => {this.AccordionObj = scope}} expanded={onexpanded.bind(this)}></AccordionComponent>`<br/> <br/> onexpanded(event){} |
|beforeInActivate | **Event:** beforeInactivate <br/> `<EJ.Accordion id='accordion' beforeInactivate={this.onbeforeInactivate}></EJ.Accordion>`<br/> <br/> onbeforeInactivate(event){}  | <b>Not Applicable</b> |
|InActive | **Event:** inActivate<br/>`<EJ.Accordion id='accordion' inActivate={this.onInActivate}></EJ.Accordion>`<br/> <br/> onInActivate(event){} | <b>Not Applicable</b> |
|Clicked | **Event:** clicked<br/> `<EJ.Accordion id='accordion' clicked={this.onclicked}></EJ.Accordion>`<br/> <br/> onclicked (event){} | <b>Not Applicable</b> |

## Common

<!-- markdownlint-disable MD033 -->
|**Behavior** |**Property in Essential JS 1** |**Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
|Collapsible | **Property** : collapsible <br/> `<EJ.Accordion id="Accordion" collapsible={false}> </EJ.Accordion>`| <b>Not Applicable</b> |
|Collapse speed | **Property** : collapseSpeed <br/> `<EJ.Accordion id="Accordion"  collapseSpeed="500"> </EJ.Accordion>`| <b>Not Applicable</b> |
|Custom class | **Property** : cssClass <br/> `<EJ.Accordion id="Accordion" cssClass="custom" > </EJ.Accordion>`| <b>Not Applicable</b> |
|CustomIcon class | **Property:** customIcon<br/> `<EJ.Accordion id="Accordion" customIcon={this.custom} > </EJ.Accordion>`<br/> <br/> public custom: Object = {header: "header-close", selectedHeader: "header-expand"}; | <b>Not Applicable</b> |
|Enabled | **Property** : enabled <br/> `<EJ.Accordion id="Accordion" enabled={false} > </EJ.Accordion>`| <b>Not Applicable</b> |
|Events | **Property** : events <br/> `<EJ.Accordion id="Accordion" events="mouseover" > </EJ.Accordion>`| <b>Not Applicable</b> |
|Expand speed | **Property** : expandSpeed <br/> `<EJ.Accordion id="Accordion" expandSpeed="300" > </EJ.Accordion>`| <b>Not Applicable</b> |
|Height | **Property** : height <br/> `<EJ.Accordion id="Accordion" height="400" > </EJ.Accordion>`| **Property** : height <br/> `<AccordionComponent id="Accordion" height="400" > </AccordionComponent>` |
|HeightAdjustMode | **Property** : heightAdjustMode <br/> `<EJ.Accordion id="Accordion" heightAdjustMode="content" > </EJ.Accordion>`| <b>Not Applicable</b> |
|HtmlAttributes | **Property** : htmlAttributes <br/> `<EJ.Accordion id="Accordion" [htmlAttributes]="attributes" > </EJ.Accordion>`<br/> <br/> public attributes: Object = {title: "Demo"};| <b>Not Applicable</b> |
|MultipleOpen | **Property** : enableMultipleOpen <br/> `<EJ.Accordion id="Accordion" enableMultipleOpen={true} > </EJ.Accordion>`| **Property** : expandMode <br/> `<AccordionComponent id="Accordion" [expandMode]="Multiple" > </AccordionComponent>` |
|Persistence | **Property** : enablePersistence <br/> `<EJ.Accordion id="Accordion" enablePersistence={false} > </EJ.Accordion>`| **Property** : enablePersistence <br/> `<AccordionComponent id="Accordion" enablePersistence={true} > </AccordionComponent>` |
|ShowRounderCorner | **Property** : showRoundedCorner <br/> `<EJ.Accordion id="Accordion" showRoundedCorner={false} > </EJ.Accordion>`| <b>Not Applicable</b> |
|Width | **Property** : width <br/> `<EJ.Accordion id="Accordion" [width]="600" > </EJ.Accordion>`| **Property** : width <br/> `<AccordionComponent id="Accordion" [width]="400" > </AccordionComponent>` |
|Enable | **Method** : enable() <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/> @ViewChild('Accordion') var obj=$('#Accordion').ejAccordion('instance')<br/>obj.enable(); | <b>Not Applicable</b> |
|Disable | **Method** : disable() <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/> var obj=$('#Accordion').ejAccordion('instance')<br/>obj.disable(); | <b>Not Applicable</b> |
|Show | **Method** : show() <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/> var obj=$('#Accordion').ejAccordion('instance')<br/>obj.show(); | <b>Not Applicable</b> |
|Hide | **Method** : hide() <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/> var obj=$('#Accordion').ejAccordion('instance')<br/>obj.hide(); | <b>Not Applicable</b> |
|Destroy | **Method** : destroy() <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/> var obj=$('#Accordion').ejAccordion('instance')<br/>obj.destroy(); | **Method** : destroy() <br/> `<AccordionComponent id="Accordion" ref = {(scope) => {this.AccordionObj = scope}}></AccordionComponent>`<br/> <br/>constructor(props: {}) {<br/> this.AccordionObj.destroy(); |
|Refresh | **Method** : refresh() <br/> `<EJ.Accordion id="Accordion" #Accordion></EJ.Accordion>`<br/> <br/> var obj=$('#Accordion').ejAccordion('instance')<br/>obj.refresh(); | **Method** : refresh() <br/> `<AccordionComponent id="Accordion" ref = {(scope) => {this.AccordionObj = scope}}></AccordionComponent>`<br/> <br/> constructor(props: {}) {<br/> this.AccordionObj.refresh(); |
|Created | **Event:** create<br/> `<EJ.Accordion id="Accordion" #Accordion create={this.oncreate}></EJ.Accordion>`<br/> <br/> oncreate(event) {} | **Event:** created<br/> `<AccordionComponent id="Accordion" ref = {(scope) => {this.AccordionObj = scope}} created={this.oncreated.bind(this)}></AccordionComponent>`<br/> <br/> oncreated(event) {} |
|Destroyed | **Event:** destroy<br/> `<EJ.Accordion id="Accordion" #Accordion destroy={this.ondestroy}></EJ.Accordion>`<br/> <br/> ondestroy(event) {} | **Event:** destroyed<br/> `<AccordionComponent id="Accordion" ref = {(scope) => {this.AccordionObj = scope}} (destroyed)={this.ondestroyed.bind(this)}'></AccordionComponent>`<br/> <br/> ondestroyed(event) {} |

