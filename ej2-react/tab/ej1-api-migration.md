---
layout: post
title: Ej1 api migration in React Tab component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Tab component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Tab component

This article describes the API migration process of Tab component from Essential JS 1 to Essential JS 2.

## Accessibility and Localization



<!-- markdownlint-disable MD033 -->
|**Behavior**  |**Property in Essential JS 1**  |**Property in Essential JS 2**  |
| ------------ | ------------------------- | ------------------------- |
|Keyboard Navigation | **Property** : allowKeyboardNavigation<br/> `<EJ.Tab id="Tab" allowKeyboardNavigation={false} ></EJ.Tab>`  | <b>Not Applicable</b> |
|Localization | <b>Not Applicable</b>  | **Property** : locale<br/> `<TabComponent  id="Tab" locale="fr-BE"></TabComponent >`  |
|Right to left | **Property:** enableRTL<br/> `<EJ.Tab id="tab" enableRTL={true}></EJ.Tab>` | **Property:** enableRTL<br/> `<TabComponent  id='tab' enableRTL={true}> </TabComponent >`  |

## AjaxSettings

<!-- markdownlint-disable MD033 -->
|  **Behavior**  |  **Property in Essential JS 1**  |  **Property in Essential JS 2**  |
| ------------ | ------------------------- | ------------------------- |
|Default | **Property** : ajaxSettings<br/> `<EJ.Tab id="tab" ajaxSettings.type="GET"></EJ.Tab>` | <b>Not Applicable</b>  |
|Asynchronous | **Property** : ajaxSettings.async <br/> `<EJ.Tab id="tab" ajaxSettings.async={true}></EJ.Tab>`| <b>Not Applicable</b>  |
|Browser Cache | **Property**: ajaxSettings.cache<br/> `<EJ.Tab id="tab" ajaxSettings.cache={false}></EJ.Tab>` | <b>Not Applicable</b> |
|Request type | **Property** : ajaxSettings.contentType<br/> `<EJ.Tab id="tab" ajaxSettings.contentType="html "></EJ.Tab>` | <b>Not Applicable</b> |
|Data | **Property** : ajaxSettings.data<br/> `<EJ.Tab id="tab" ajaxSettings.data={  }></EJ.Tab>` | <b>Not Applicable</b> |
|Response type | **Property** : ajaxSettings.dataType <br/> `<EJ.Tab id="tab" ajaxSettings.dataType="html"></EJ.Tab>` | <b>Not Applicable</b> |
|HTTP request type | **Property:** ajaxSettings.type<br/> `<EJ.Tab id="tab" ajaxSettings.type="GET"></EJ.Tab>` | <b>Not Applicable</b> |
|AjaxBeforeLoad | **Event:** ajaxBeforeLoad<br/> `<EJ.Tab id='tab' ajaxBeforeLoad={this.onajaxBeforeLoad}></EJ.Tab>`<br/><br/> onajaxBeforeLoad (event){  } | <b>Not Applicable</b> |
|AjaxError | **Event:** AjaxError<br/> `<EJ.Tab id='tab' ajaxError={this.onajaxError}></EJ.Tab>`<br/> <br/> onajaxError (event){  } | <b>Not Applicable</b> |
|AjaxLoad | **Event:** ajaxLoad<br/> `<EJ.Tab id='tab' ajaxLoad={this.onajaxLoad}></EJ.Tab>`<br/> <br/> onajaxLoad (event){  } | <b>Not Applicable</b> |
|AjaxSuccess | **Event:** ajaxSuccess<br/> `<EJ.Tab id='tab' ajaxSuccess={this.onajaxSuccess} ></EJ.Tab>`<br/> <br/> onajaxSuccess (event){  } | <b>Not Applicable</b> |

## Animation

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
|Default |<b>Not Applicable</b> | **Property** :animation<br/> `<TabComponent  id="tab" animation={this.animation}></TabComponent >`<br/> <br/>constructor(props: {}) {<br/> this.animation = { prev: { }, next: { } };}  |
|EnableAnimation |**Property** :animation<br/> `<EJ.Tab id="tab" enableAnimation={false}></EJ.Tab>`<br/> | <b>Not Applicable</b>|
|Previous animation |<b>Not Applicable</b> | **Property** :animation.prev<br/> `<TabComponent  id='tab' animation={this.animation}></TabComponent >`<br/><br/>constructor(props: {}) {<br/> this.animation = { prev: { duration: 400,easing: 'ease-in',  effect:  'SlideLeft'} };} |
|Next animation |<b>Not Applicable</b> | **Property** :animation.next<br/> `<TabComponent  id='tab' animation={this.animation}></TabComponent >`<br/><br/> constructor(props: {}) {<br/> this.animation = { next: {duration: 400, easing: 'ease-in', effect: 'SlideLeft' } };} |
|Duration  [prev / next] |<b>Not Applicable</b> | **Property** :animation.next.duration<br/> `<TabComponent  id='tab' animation={this.animation}></TabComponent >`<br/><br/>constructor(props: {}) {<br/> this.animation = { prev: { duration: 400 } };}|
|Easing  [expand / collapse] |<b>Not Applicable</b> | **Property** :animation.next.easing<br/> `<TabComponent  id='tab' animation={this.animation}></TabComponent >`<br/><br/>constructor(props: {}) {<br/> this.animation = { prev: { easing: 'ease-in' } };} |
|Effect  [expand / collapse] |<b>Not Applicable</b> | **Property** :animation.next.effect<br/> `<TabComponent  id='tab' animation={this.animation}></TabComponent >`<br/><br/>constructor(props: {}) {<br/> this.animation = { prev: { effect: 'SlideLeft' } };}  |

## Header

<!-- markdownlint-disable MD033 -->
|**Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
|Header position | **Property** : headerPosition<br/> `<EJ.Tab id="Tab" headerPosition="Bottom" ></EJ.Tab>`  | **Property** : headerPlacement<br/> `<TabComponent  id="Tab" headerPlacement="Bottom" ></TabComponent >`  |
|Header size | **Property** : headerSize<br/> `<EJ.Tab id="Tab" headerSize="100px" ></EJ.Tab>`  | <b>Not Applicable</b> |
|OverflowModes | <b>Not Applicable</b>| **Property:** overflowMode<br/> `<TabComponent  id='tab' overflowMode='Popup'> </TabComponent >`  |
|TabScroll | **Property:** enableTabScroll<br/> `<EJ.Tab id="Tab" enableTabScroll={false} ></EJ.Tab>` | <b>Not Applicable</b> |

## Items

<!-- markdownlint-disable MD033 -->
|**Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
|Default | <b>Not Applicable</b> | **Property** : items<br/> `<TabComponent  id="tab" items={this.items}> </TabComponent >` |
|Content | <b>Not Applicable</b> | **Property** : items[0].content <br/> `<TabComponent  id="tab" items={this.items}> </TabComponent >`<br/> <br/> constructor(props: {}) {<br/> this.items = {content: 'Contents'};}|
|Custom class | <b>Not Applicable</b>  | **Property** : items[0].cssClass <br/> `<TabComponent  id="tab" items={this.items}> </TabComponent >`<br/> <br/> constructor(props: {}) {<br/> this.items = { cssClass: 'customClass'};}|
|Header| <b>Not Applicable</b> | **Property** : items[0].Header <br/> `<TabComponent  id="tab" items={this.items}> </TabComponent >`<br/> <br/>constructor(props: {}) {<br/> this.items = {  header: {  } };}|
|Icon class |<b>Not Applicable</b> | **Property** : items[0].header.iconCss <br/> `<TabComponent  id="tab" items={this.items}> </TabComponent >`<br/> <br/> constructor(props: {}) {<br/> this.items = { header: { iconCss: 'e-icon' } };}|
|Icon position | <b>Not Applicable</b> | **Property** : items[0].header.iconPosition <br/> `<TabComponent  id="tab" items={this.items}> </TabComponent >`<br/> <br/>constructor(props: {}) {<br/> this.items = { header: { iconPosition: 'Left' } };}|
|Header text | <b>Not Applicable</b> | **Property** : items[0].header.text <br/> `<TabComponent  id="tab" items={this.items}> </TabComponent >`<br/> <br/> constructor(props: {}) {<br/> this.items = { header: { text: 'Tab1' } };}|
|Get items length |**Method** :  getItemsCount() <br/> `<EJ.Tab id="Tab"></EJ.Tab>`<br/> <br/>var obj=$('#Tab').ejTab('instance')<br/>obj.getItemsCount();| <b>Not Applicable</b>|
|Add Items |**Method** : addItem(url, displayLabel, index, cssClass, id) <br/> `<EJ.Tab id="Tab"></EJ.Tab>`<br/> <br/>var obj=$('#Tab').ejTab('instance')<br/>obj.addItem("#new", "New Item", 3, "myClass", "newItem");| **Method** :addTab(items, index) <br/> `<TabComponent  id="tab"  ref = {(scope) => {this.TabObj = scope}}> </TabComponent >`<br/> <br/>  constructor(props: {}) {<br/> this.TabObj.addTab([{header: { text: 'Tab1' },content: 'contents' }], 1  ); }|
|BeforeAdd | <b>Not Applicable</b>  | **Event:** adding<br/> `<TabComponent  id="tab" adding={onadding.bind(this)}> </TabComponent >`<br/> <br/> onadding(event){  }  |
|AfterAdd | **Event:** itemAdd<br/> `<EJ.Tab id='tab' itemAdd={this.onitemAdd}></EJ.Tab>`<br/> <br/> onitemAdd(event){  }  | **Event:** added <br/> `<TabComponent  id="tab" added={onadded.bind(this)}></TabComponent >`<br/> <br/> onadded(event){  } |
|Remove Item |**Method** : removeItem(index) <br/> `<EJ.Tab id="Tab"  ></EJ.Tab>`<br/> <br/>var obj=$('#Tab').ejTab('instance')<br/>obj.removeItem(0); }| **Method** :addItem(items, index) <br/> `<TabComponent  id="tab" ref = {(scope) => {this.TabObj = scope}}> </TabComponent >`<br/> <br/>  constructor(props: {}) {<br/> this.TabObj.addItem([{ header: 'App', content: 'text' }], 0);}|
|BeforeRemove | **Event:** beforeItemRemove <br/> `<EJ.Tab id='tab' beforeItemRemove={this.onbeforeItemRemove}></EJ.Tab>`<br/> <br/> onbeforeItemRemove(event){  }  | **Event:** removing <br/> `<TabComponent  id="tab" removing={onremoving.bind(this)}></TabComponent >`<br/> <br/> onremoving(event){  } |
|AfterRemove | **Event:** afterRemove <br/> `<EJ.Tab id='tab' itemRemove={this.onitemRemove}></EJ.Tab>`<br/> <br/> onitemRemove(event){  }  | **Event:** removed <br/> `<TabComponent  id="tab" removed={onremoved.bind(this)} ></TabComponent >`<br/> <br/> onremoved(event){  } |
|Select item |<b>Not Applicable</b>| **Method** :select(index)<br/> `<TabComponent  id="tab" ref = {(scope) => {this.TabObj = scope}} > </TabComponent >`<br/> <br/>  constructor(props: {}) {<br/> this.TabObj.select(1);}|
| SelectedItemIndex | **Property** : selectedItemIndex <br/> `<EJ.Tab id="tab" selectedItemIndex="1" > </EJ.Tab>`| **Property** : selectedItem <br/> `<TabComponent  id="tab" selectedItem="1" > </TabComponent >` |
|BeforeActive | **Event:** beforeActive<br/> `<TabComponent  id="tab" beforeActive={this.onbeforeActive}></TabComponent >`<br/> <br/> onbeforeActive(event){  } |  **Event:** selecting<br/> `<TabComponent  id="tab" selecting={onselecting.bind(this)}></TabComponent >`<br/> <br/> onselecting(event){  } |
|AfterActive | **Event:** itemActive<br/> `<TabComponent  id="tab" itemActive={this.onitemActive}></TabComponent >`<br/> <br/> onitemActive(event){  } |  **Event:** selected<br/> `<TabComponent  id="tab" selected={onselected.bind(this)}></TabComponent >`<br/> <br/> onselected(event){  } |
|Disable items | **Property** : disabledItemIndex <br/> `<EJ.Tab id="tab" disabledItemIndex="[1,2]" > </EJ.Tab>`| <b>Not Applicable</b> |
|Enable items | **Property** : enabledItemIndex <br/> `<EJ.Tab id="tab" enabledItemIndex="[1,2]" > </EJ.Tab>`| <b>Not Applicable</b> |
|Enable/Disable item |<b>Not Applicable</b> | **Property** : items[0].disabled <br/> `<TabComponent  id="tab" items={this.items} > </TabComponent >`<br/> <br/>this.items = {  disabled: true }; |
|Hide items | **Property** : hiddenItemIndex <br/> `<EJ.Tab id="tab" hiddenItemIndex="[1,2]" > </EJ.Tab>` |<b>Not Applicable</b> |
|Hide item |**Method** : hideItem(index) <br/> `<EJ.Tab id="Tab"></EJ.Tab>`<br/> <br/>var obj=$('#Tab').ejTab('instance')<br/>obj.hideItem(1);| **Method** :hideTab(index, true) <br/> `<TabComponent  id="tab" ref = {(scope) => {this.TabObj = scope}}> </TabComponent >`<br/> <br/>  constructor(props: {}) {<br/> this.TabObj.hideTab(1, true); }|
|Show item |**Method** : showItem(index)<br/> `<EJ.Tab id="Tab" ></EJ.Tab>`<br/> <br/>var obj=$('#Tab').ejTab('instance')<br/>obj.showItem(1);| **Method** : hideTab(index, false) <br/> `<TabComponent  id="tab" ref = {(scope) => {this.TabObj = scope}> </TabComponent >`<br/> <br/>  constructor(props: {}) {<br/> this.TabObj.hideTab(1, false); }|

## Common

<!-- markdownlint-disable MD033 -->
|**Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
|Collapse active item | **Property** : collapsible <br/> `<EJ.Tab id="tab" collapsible={true}> </EJ.Tab>`| <b>Not Applicable</b> |
|Custom class | **Property** : cssClass <br/> `<EJ.Tab id="tab" cssClass="customClass" > </EJ.Tab>`| **Property** : cssClass <br/> `<TabComponent  id="tab" cssClass="customClass" > </TabComponent >` |
|Enabled | **Property** : enabled <br/> `<EJ.Tab id="tab" enabled={false}> </EJ.Tab>`| **Method** : disable(false)<br/> `<EJ.Tab id="Tab"></EJ.Tab>`<br/> <br/>constructor(props: {}) {<br/> this.TabObj.disable(false); |
|Persistence | **Property** : enablePersistence <br/> `<EJ.Tab id="tab" enablePersistence={false} > </EJ.Tab>`| **Property** : enablePersistence <br/> `<TabComponent  id="tab" enablePersistence={false} > </TabComponent >` |
|Events | **Property** : events <br/> `<EJ.Tab id="tab" events="click" > </EJ.Tab>`| <b>Not Applicable</b> |
|Height | **Property** : height <br/> `<EJ.Tab id="Tab" height="100%" > </EJ.Tab>`| **Property** : height <br/> `<TabComponent  id="Tab" height="100%" > </TabComponent >` |
|HeightAdjustMode | **Property** : heightAdjustMode <br/> `<EJ.Tab id="Tab" heightAdjustMode="Content" > </EJ.Tab>`| **Property** : heightAdjustMode <br/> `<TabComponent  id="Tab" heightAdjustMode="Content" > </TabComponent >` |
|HtmlAttributes | **Property** : htmlAttributes <br/> `<EJ.Tab id="Tab" [htmlAttributes]="attributes" > </EJ.Tab>`<br/> <br/> this.attributes = {class: "my-class"};|<b>Not Applicable</b>|
|ID prefix | **Property** : idPrefix <br/> `<EJ.Tab id="Tab" [idPrefix]="EJ.Tab-" > </EJ.Tab>`| <b>Not Applicable</b>|
|ShowCloseButton | **Property** : showCloseButton <br/> `<EJ.Tab id="Tab" showCloseButton={true} > </EJ.Tab>`| **Property** : showCloseButton <br/> `<TabComponent  id="Tab" {showCloseButton}="true" > </TabComponent >`|
|showReloadIcon | **Property** : showReloadIcon <br/> `<EJ.Tab id="Tab" showReloadIcon={true} > </EJ.Tab>`| <b>Not Applicable</b> |
|ShowRounderCorner | **Property** : showRoundedCorner <br/> `<EJ.Tab id="Tab" showRoundedCorner={true} > </EJ.Tab>`| <b>Not Applicable</b> |
|Destroy | **Method** : destroy() <br/> `<EJ.Tab id="Tab"></EJ.Tab>`<br/> <br/>var obj=$('#Tab').ejTab('instance')<br/>obj.destroy(); | **Method** : destroy() <br/> `<TabComponent  id="tab"></TabComponent >`<br/> <br/>constructor(props: {}) {<br/> this.TabObj.destroy(); |
|Disable Tab | **Method** : disable() <br/> `<EJ.Tab id="Tab"></EJ.Tab>`<br/> <br/>var obj=$('#Tab').ejTab('instance')<br/>obj.disable(); | **Method** :  disable(true) <br/> `<TabComponent  id="Tab"></TabComponent >`<br/> <br/>constructor(props: {}) {<br/> this.TabObj.disable(true); |
|Enable Tab | **Method** : enable() <br/> `<EJ.Tab id="Tab"></EJ.Tab>`<br/> <br/>var obj=$('#Tab').ejTab('instance')<br/>obj.enable(); | **Method** : disable(false) <br/> `<TabComponent  id="Tab"></TabComponent >`<br/> <br/>constructor(props: {}) {<br/> this.TabObj.disable(false); |
| Show Tab | **Method** : show() <br/> `<EJ.Tab id="Tab"></EJ.Tab>`<br/> <br/>var obj=$('#Tab').ejTab('instance')<br/>obj.show(); | <b>Not Applicable</b> |
|Hide Tab | **Method** : hide() <br/> `<EJ.Tab id="Tab"></EJ.Tab>`<br/> <br/>var obj=$('#Tab').ejTab('instance')<br/>obj.hide(); | <b>Not Applicable</b> |
|Refresh | <b>Not Applicable</b> | **Method** : refresh() <br/> `<TabComponent  id="tab"></TabComponent >`<br/> <br/>constructor(props: {}) {<br/> this.TabObj.refresh(); }|
|Created | **Event:** create<br/> `<EJ.Tab id="tab" create={this.oncreate}></EJ.Tab>`<br/> <br/> oncreate(event) {  } | **Event:** created<br/> `<TabComponent  id="tab" created={oncreated.bind(this)}></TabComponent >`<br/> <br/> oncreated(event) {  } |
|Destroyed | **Event:** destroy<br/> `<EJ.Tab id="tab" destroy={this.ondestroy}></EJ.Tab>`<br/> <br/> ondestroy(event) {  } | **Event:** destroyed<br/> `<TabComponent  id="tab" destroyed={ondestroyed.bind(this)} ></TabComponent >`<br/> <br/> ondestroyed(event) {  } |

