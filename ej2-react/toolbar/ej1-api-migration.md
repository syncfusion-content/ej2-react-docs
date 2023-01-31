---
layout: post
title: Ej1 api migration in React Toolbar component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Toolbar component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Toolbar component

This article describes the API migration process of Toolbar component from Essential JS 1 to Essential JS 2.

## Accessibility and Localization

{% raw %}

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Localization | <b>Not Applicable</b>  | **Property** : locale<br/> `<ToolbarComponent id='toolbar' locale='fr-BE'></ToolbarComponent>`  |
| Right to left | **Property:** enableRTL<br/> `<EJ.Toolbar id="toolbar" enableRTL={true}></EJ.Toolbar>` | **Property:** enableRTL<br/> `<ToolbarComponent id='toolbar' enableRTL={true}> </ToolbarComponent>`  |

## DataSource

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| DataSource | **Property** : dataSource<br/> `<EJ.Toolbar id="toolbar" dataSource={this.items} ></EJ.Toolbar>` | <b>Not Applicable</b>  |
| Query | **Property** : query <br/> `<EJ.Toolbar id="toolbar" query={this.query}></EJ.Toolbar>`| <b>Not Applicable</b>  |
| Fields | **Property**: fields<br/> `<EJ.Toolbar id="toolbar" fields={this.fields}></EJ.Toolbar>` | <b>Not Applicable</b> |
| Group | **Property** : group<br/> `<EJ.Toolbar id="toolbar" fields={this.fields}></EJ.Toolbar>`<br/> <br/>constructor(props: {}) {<br/> this.fields = { group: '' }; } | <b>Not Applicable</b> |
| HtmlAttributes | **Property** : htmlAttributes<br/> `<EJ.Toolbar id="toolbar" fields={this.fields}></EJ.Toolbar>`<br/> <br/>constructor(props: {}) {<br/> this.fields = { htmlAttributes: {  } };} | <b>Not Applicable</b> |
| Id | **Property** : id <br/> `<EJ.Toolbar id="toolbar" fields={this.fields}></EJ.Toolbar>`<br/> <br/>constructor(props: {}) {<br/> this.fields = { id: '' };} | <b>Not Applicable</b> |
| ImageAttributes | **Property:** imageAttributes<br/> `<EJ.Toolbar id="toolbar" fields={this.fields} ></EJ.Toolbar>`<br/> <br/> constructor(props: {}) {<br/> this.fields = { imageAttributes: {  } };}| <b>Not Applicable</b> |
| ImageUrl | **Property:** imageUrl<br/> `<EJ.Toolbar id="toolbar" fields={this.fields} ></EJ.Toolbar>`<br/> <br/> constructor(props: {}) {<br/> this.fields = { imageUrl: '' };} | <b>Not Applicable</b> |
| SpriteCssClass | **Property:** spriteCssClass<br/> `<EJ.Toolbar id="toolbar" fields={this.fields} ></EJ.Toolbar>`<br/> <br/> constructor(props: {}) {<br/> this.fields = { spriteCssClass: '' };}| <b>Not Applicable</b> |
| Text | **Property:** text<br/> `<EJ.Toolbar id="toolbar" fields={this.fields} ></EJ.Toolbar>`<br/> <br/>constructor(props: {}) {<br/> this.fields = { text: '' };}| <b>Not Applicable</b> |
| TooltipText | **Property:** tooltipText<br/> `<EJ.Toolbar id="toolbar" fields={this.fields} ></EJ.Toolbar>`<br/> <br/>constructor(props: {}) {<br/> this.fields = { tooltipText: ''};} | <b>Not Applicable</b> |
| Template | **Property:** template<br/> `<EJ.Toolbar id="toolbar" fields={this.fields} ></EJ.Toolbar>`<br/> <br/>constructor(props: {}) {<br/> this.fields = { template: '' };} | <b>Not Applicable</b> |

## Items

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Default | <**Property** : items<br/> `<EJ.Toolbar id="toolbar" items={this.items}> </EJ.Toolbar>` | **Property** : items<br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>` |
| Align | <b>Not Applicable</b> | **Property** : items[0].Align <br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>`<br/> <br/>  constructor(props: {}) {<br/> this.items = { align: 'center'};}|
| Custom class | <b>Not Applicable</b> | **Property** : items[0].cssClass <br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>`<br/> <br/> constructor(props: {}) {<br/> this.items = { cssClass: 'e-class'}; }|
| Group Name| **Property** : items[0].group <br/> `<EJ.Toolbar id="toolbar" items={this.items}> </EJ.Toolbar>`<br/> <br/> constructor(props: {}) {<br/> this.items = { group: ''}; } | <b>Not Applicable</b>|
| HtmlAttributes | **Property** : items[0].htmlAttributes <br/> `<EJ.Toolbar id="toolbar" items={this.items}> </EJ.Toolbar> </EJ.Toolbar>`<br/> <br/> constructor(props: {}) {<br/> this.items = { htmlAttributes: {  } };}| **Property** : items[0].htmlAttributes <br/> `<ToolbarComponent id="toolbar" items={this.items}> </EJ.Toolbar> </ToolbarComponent>`<br/> <br/> constructor(props: {}) {<br/> this.items = { htmlAttributes: {  } };}|
| Id |**Property** : items[0].id <br/> `<EJ.Toolbar id="toolbar" items={this.items}> </EJ.Toolbar>`<br/> <br/> constructor(props: {}) {<br/> this.items = {  id: ''  }; }| **Property** : items[0].id <br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>`<br/> <br/> constructor(props: {}) {<br/> this.items = {  id: ''  }; }|
| ImageAttributes | **Property** : items[0].imageAttributes <br/> `<EJ.Toolbar id="toolbar" items={this.items}> </EJ.Toolbar>`<br/> <br/> constructor(props: {}) {<br/> this.items = { imageAttributes: {  } };} | <b>Not Applicable</b>|
| ImageUrl | **Property** : items[0].imageUrl <br/> `<EJ.Toolbar id="toolbar" items={this.items}> </EJ.Toolbar>`<br/> <br/> constructor(props: {}) {<br/> this.items = { imageUrl: '' };} | <b>Not Applicable</b>|
| Overflow | <b>Not Applicable</b> | **Property** : items[0].overflow  <br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>`<br/> <br/> constructor(props: {}) {<br/> this.items = { overflow: 'popup' }; }|
| PrefixIcon | <b>Not Applicable</b> | **Property** : items[0].prefixIcon <br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>`<br/> <br/> constructor(props: {}) {<br/> this.items = {  prefixIcon: 'e-icon' }; }|
| ShowAlwaysInPopup | <b>Not Applicable</b> | **Property** : items[0].showAlwaysInPopup <br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>`<br/> <br/>  constructor(props: {}) {<br/> this.items = { showAlwaysInPopup: true };}|
| ShowTextOn | <b>Not Applicable</b> | **Property** : items[0].showTextOn <br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>`<br/> <br/>  constructor(props: {}) {<br/> this.items = { showTextOn: 'popup' }; }|
| Sprite CssClass | **Property** : items[0].showTextOn <br/> `<EJ.Toolbar id="toolbar" items={this.items}> </EJ.Toolbar>`<br/> <br/>  constructor(props: {}) {<br/> this.items = { spriteCssClass: 'e-class' }; } |<b>Not Applicable</b> |
| SuffixIcon | <b>Not Applicable</b> | **Property** : items[0].suffixIcon <br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>`<br/> <br/>  constructor(props: {}) {<br/> this.items = { suffixIcon: 'e-icon' }; }|
| Template | **Property** : items[0].template <br/> `<EJ.Toolbar id="toolbar" items={this.items}> </EJ.Toolbar>`<br/> <br/> constructor(props: {}) {<br/> this.items = { template: '' }; } | **Property** : items[0].template <br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>`<br/> <br/> constructor(props: {}) {<br/> this.items = { template: '' }; } |
| Text | **Property** : items[0].text <br/> `<EJ.Toolbar id="toolbar" items={this.items}> </EJ.Toolbar>`<br/> <br/> constructor(props: {}) {<br/> this.items = { text: 'Cut' }; } | **Property** : items[0].text <br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>`<br/> <br/> constructor(props: {}) {<br/> this.items = { text: 'Copy' };} |
| TooltipText | **Property** : items[0].tooltipText <br/> `<EJ.Toolbar id="toolbar" items={this.items}> </EJ.Toolbar>`<br/> <br/> constructor(props: {}) {<br/> this.items = { tooltipText: 'Cut' };} | **Property** : items[0].tooltipText <br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>`<br/> <br/> constructor(props: {}) {<br/> this.items = { tooltipText: 'Copy' }; } |
| Type | <b>Not Applicable</b> | **Property** : items[0].type <br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>`<br/> <br/> constructor(props: {}) {<br/> this.items = {type: 'Button'}; } |
| Width | <b>Not Applicable</b> | **Property** : items[0].width <br/> `<ToolbarComponent id="toolbar" items={this.items}> </ToolbarComponent>`<br/> <br/> constructor(props: {}) {<br/> this.items = {width: '50'}; }|
| Disable Items |**Property** : disabledItemIndices  <br/> `<EJ.Toolbar id="toolbar" disabledItemIndices="[]" > </EJ.Toolbar>`| **Method** : enableItems(items, false) <br/> `<ToolbarComponent id="toolbar" ref = {(scope) => {this.ToolbarObj = scope}} ></ToolbarComponent>`<br/> <br/>constructor(props: {}) {<br/> this.ToolbarObj.enableItems([], false); }|
| Add Items |<b>Not Applicable</b>| **Method** :addItems(items, index) <br/> `<ToolbarComponent id="toolbar" ref = {(scope) => {this.ToolbarObj = scope}}> </ToolbarComponent>`<br/> <br/>  constructor(props: {}) {<br/> this.ToolbarObj.addItems([], 0); } |
| Remove Item |**Method** : removeItem(element) <br/> `<EJ.Toolbar id="toolbar" ></EJ.Toolbar>`<br/> <br/>var obj=$('#toolbar').ejToolbar('instance')<br/>obj.removeItem(ele);| **Method** :removeItems(args) <br/> `<ToolbarComponent id="toolbar" ref = {(scope) => {this.ToolbarObj = scope}}> </ToolbarComponent>`<br/> <br/>  constructor(props: {}) {<br/> this.ToolbarObj.removeItems(0); }|
| RemoveItemById |**Method** :select(index)<br/> `<EJ.Toolbar id="toolbar" > </EJ.Toolbar>`<br/> <br/> var obj=$('#toolbar').ejToolbar('instance')<br/>obj.select(1);|<b>Not Applicable</b>|
| Enable item | **Method** :enableItem(element)<br/> `<EJ.Toolbar id="toolbar" > </EJ.Toolbar>`<br/> <br/> var obj=$('#toolbar').ejToolbar('instance')<br/>obj.enableItem(ele);| **Method** : enableItems(items, true)<br/> `<ToolbarComponent id="toolbar" ref = {(scope) => {this.ToolbarObj = scope}}> </ToolbarComponent>`<br/> <br/>  constructor(props: {}) {<br/> this.ToolbarObj.enableItems(items, true); } |
| EnableItemById |**Method** : enableItemById(id)<br/> `<EJ.Toolbar id="toolbar" > </EJ.Toolbar>`<br/> <br/> var obj=$('#toolbar').ejToolbar('instance')<br/>obj.enableItemById('left');|<b>Not Applicable</b>|
| Disable Item | **Method** : disableItem(element)<br/> `<EJ.Toolbar id="toolbar" > </EJ.Toolbar>`<br/> <br/> var obj=$('#toolbar').ejToolbar('instance')<br/>obj.disableItem(ele);| **Method** :enableItems(items, true)<br/> `<ToolbarComponent id="toolbar" ref = {(scope) => {this.ToolbarObj = scope}}> </ToolbarComponent>`<br/> <br/>  constructor(props: {}) {<br/> this.ToolbarObj.enableItems([], false); }|
| DisableItemById |**Method** : disableItemById(id)<br/> `<EJ.Toolbar id="toolbar"> </EJ.Toolbar>`<br/> <br/>  var obj=$('#toolbar').ejToolbar('instance')<br/>obj.disableItemById('left');|<b>Not Applicable</b>|
| Show item |<b>Not Applicable</b>| **Method** : hideItem(index, false)<br/> `<ToolbarComponent id="toolbar" ref = {(scope) => {this.ToolbarObj = scope}}> </ToolbarComponent>`<br/> <br/>  constructor(props: {}) {<br/> this.ToolbarObj.hideItem(0, false); }|
| Hide item |<b>Not Applicable</b>| **Method** : hideItem(index, true)<br/> `<ToolbarComponent id="toolbar" ref = {(scope) => {this.ToolbarObj = scope}}r> </ToolbarComponent>`<br/> <br/>  constructor(props: {}) {<br/> this.ToolbarObj.hideItem(0, true); }|
| Select item | **Method** :selectItem(element)<br/> `<EJ.Toolbar id="toolbar" > </EJ.Toolbar>`<br/> <br/> var obj=$('#toolbar').ejToolbar('instance')<br/>obj.selectItem(ele);|<b>Not Applicable</b>|
| SelectItemById | **Method** : selectItemById(id)<br/> `<EJ.Toolbar id="toolbar" > </EJ.Toolbar>`<br/> <br/> var obj=$('#toolbar').ejToolbar('instance')<br/>obj.selectItemById('left');|<b>Not Applicable</b>|
| DeselectItemById | **Method** : deselectItemById(id)<br/> `<EJ.Toolbar id="toolbar" > </EJ.Toolbar>`<br/> <br/> var obj=$('#toolbar').ejToolbar('instance')<br/>obj.deselectItemById('left');|<b>Not Applicable</b>|
| Clicked | <b>Not Applicable</b>  | **Event:** clicked <br/> `<ToolbarComponent id="toolbar" clicked={onclicked.bind(this)}></ToolbarComponent>`<br/> <br/> onclicked(event){  }  |
| itemHover | **Event:** itemHover<br/> `<EJ.Toolbar id='toolbar' itemHover={this.onitemHover}></EJ.Toolbar>`<br/> <br/> onitemHover(event){  }  | <b>Not Applicable</b> |
| itemLeave | **Event:** itemLeave<br/> `<EJ.Toolbar id='toolbar' itemLeave={this.onitemLeave}></EJ.Toolbar>`<br/> <br/> onitemHover(event){  }  | <b>Not Applicable</b> |

## Common

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Custom class | **Property** : cssClass <br/> `<EJ.Toolbar id="toolbar" cssClass="customClass" > </EJ.Toolbar>`| <b>Not Applicable</b> |
| Enabled | **Property** : enabled <br/> `<EJ.Toolbar id="toolbar" enabled={false}> </EJ.Toolbar>`| <b>Not Applicable</b>|
| EnableSeparator | **Property** : enableSeparator <br/> `<EJ.Toolbar id="Accordion" enableSeparator={false} > </EJ.Toolbar>`| <b>Not Applicable</b> |
| Height | **Property** : height <br/> `<EJ.Toolbar id="toolbar" height="100%" > </EJ.Toolbar>`| **Property** : height <br/> `<ToolbarComponent id="toolbar" height="100%" > </ToolbarComponent>` |
| HtmlAttributes | **Property** : htmlAttributes <br/> `<EJ.Toolbar id="Accordion" htmlAttributes={this.attributes} > </EJ.Toolbar>`<br/> <br/> constructor(props: {}) {<br/> this.attributes = {class: "my-class" };}| <b>Not Applicable</b> |
| Hide | **Property** : hide() <br/> `<EJ.Toolbar id="Accordion" hide={true}> </EJ.Toolbar>` | <b>Not Applicable</b> |
| Orientation | **Property** : orientation <br/> `<EJ.Toolbar id="Accordion" orientation="horizontal" > </EJ.Toolbar>`| <b>Not Applicable</b> |
| OverflowModes | **Property** : responsiveType <br/> `<EJ.Toolbar id="Accordion" responsiveType="popup" > </EJ.Toolbar>`|  **Property** : overflowMode <br/> `<ToolbarComponents id="Accordion" overflowMode="popup" > </ToolbarComponent>` |
| Persistence |<b>Not Applicable</b>| **Property** : enablePersistence <br/> `<ToolbarComponent id="toolbar" enablePersistence={false} > </ToolbarComponent>` |
| Responsive | **Property** : isResponsive <br/> `<EJ.Toolbar id="Accordion" isResponsive={true} > </EJ.Toolbar>` |<b>Not Applicable</b>|
| ShowRounderCorner | **Property** : showRoundedCorner <br/> `<EJ.Toolbar id="toolbar" showRoundedCorner={true} > </EJ.Toolbar>`| <b>Not Applicable</b> |
| Width | **Property** : width <br/> `<EJ.Toolbar id="Accordion" width="600" > </EJ.Toolbar>`|  **Property** : width <br/> `<ToolbarComponent id="Accordion" width="600" > </ToolbarComponent>` |
| Enable | **Method** : enable() <br/> `<EJ.Toolbar id="toolbar" ></EJ.Toolbar>`<br/> <br/>var obj=$('#toolbar').ejToolbar('instance')<br/>obj.enable(); | **Method** : disable(false) <br/> `<ToolbarComponent id="toolbar" ref = {(scope) => {this.ToolbarObj = scope}}></ToolbarComponent>`<br/> <br/>constructor(props: {}) {<br/> this.ToolbarObj.disable(false); |
| Disable | **Method** : disable() <br/> `<EJ.Toolbar id="toolbar" ></EJ.Toolbar>`<br/> <br/>var obj=$('#toolbar').ejToolbar('instance')<br/>obj.disable(); | **Method** :  disable(true) <br/> `<ToolbarComponent id="toolbar" ref = {(scope) => {this.ToolbarObj = scope}} ></ToolbarComponent>`<br/> <br/>constructor(props: {}) {<br/> this.ToolbarObj.disable(true); |
| Show | **Method** : show() <br/> `<EJ.Toolbar id="toolbar" ></EJ.Toolbar>`<br/> <br/>var obj=$('#toolbar').ejToolbar('instance')<br/>obj.show(); | <b>Not Applicable</b> |
| Hide | **Method** : hide() <br/> `<EJ.Toolbar id="toolbar" ></EJ.Toolbar>`<br/> <br/>var obj=$('#toolbar').ejToolbar('instance')<br/>obj.hide(); | <b>Not Applicable</b> |
| Refresh | <b>Not Applicable</b> | **Method** : refresh() <br/> `<ToolbarComponent id="toolbar" ref = {(scope) => {this.ToolbarObj = scope}}></ToolbarComponent>`<br/> <br/>constructor(props: {}) {<br/> this.ToolbarObj.refresh(); |
| Destroy | **Method** : destroy() <br/> `<EJ.Toolbar id="toolbar" ></EJ.Toolbar>`<br/> <br/>var obj=$('#toolbar').ejToolbar('instance')<br/>obj.destroy(); | **Method** : destroy() <br/> `<ToolbarComponent id="toolbar" ref = {(scope) => {this.ToolbarObj = scope}}></ToolbarComponent>`<br/> <br/>constructor(props: {}) {<br/> this.ToolbarObj.destroy(); |
| BeforeCreate | <b>Not Applicable</b> | **Event:** created<br/> `<ToolbarComponent id="toolbar"  created={onbeforeCreate.bind(this)}></ToolbarComponent>`<br/> <br/> onbeforeCreate(event) {  } |
| Created | **Event:** create<br/> `<EJ.Toolbar id="toolbar"  create={this.oncreate}></EJ.Toolbar>`<br/> <br/> oncreate(event) {  } | **Event:** created<br/> `<ToolbarComponent id="toolbar" created={oncreated.bind(this)}></ToolbarComponent>`<br/> <br/> oncreated(event) {  } |
| Destroyed | **Event:** destroy<br/> `<EJ.Toolbar id="toolbar" destroy={this.ondestroy}></EJ.Toolbar>`<br/> <br/> ondestroy(event) {  } | **Event:** destroyed<br/> `<ToolbarComponent id="toolbar" destroyed={ondestroyed.bind(this)}></ToolbarComponent>`<br/> <br/> ondestroyed(event) {  } |
| FocusOut |  **Event:** focusOut<br/> `<EJ.Toolbar id="toolbar" focusOut={onfocusOut.bind(this)}></EJ.Toolbar>`<br/> <br/> onfocusOut(event) {  } |<b>Not Applicable</b> |
| overflowOpen |  **Event:** overflowOpen<br/> `<EJ.Toolbar id="toolbar" (overflowOpen)={this.onoverflowOpen}></EJ.Toolbar>`<br/> <br/> onoverflowOpen(event) {  } |<b>Not Applicable</b> |
| overflowClose | **Event:** overflowClose<br/> `<EJ.Toolbar id="toolbar" (overflowClose)={this.onoverflowClose}></EJ.Toolbar>`<br/> <br/> onoverflowClose(event) {  } | <b>Not Applicable</b> |

{% endraw %}