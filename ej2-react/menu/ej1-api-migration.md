---
layout: post
title: Ej1 api migration in React Menu component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Menu component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Menu component

This article describes the API migration process of Menu component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Properties

{% raw %}

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Animation type on hover or click on the menu items** | **Property:** *animationType* <br/><br/> var animationType = ej.AnimationType.Default; <br/> `<EJ.Menu id="menu" animationType={animationType}></EJ.Menu>` | **Not applicable** |
| **Context menu target**  | **Property:** *contextMenuTarget* <br/><br/> `<EJ.Menu id="menu" contextMenuTarget="#target"></EJ.Menu>` | **Not applicable** |
| **Container element for submenu’s collision** | **Property:** *container* <br/><br/> `<EJ.Menu id="menu" contextMenuTarget="#target" container="#target"></EJ.Menu>` | **Not applicable** |
| **Menu items** | **Not applicable** | **Property:** *items* <br/><br/> `<MenuComponent id="menu" items={this.menuItems}></MenuComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.menuItems = [<br/> &nbsp; {<br/> &nbsp; &nbsp; text: "File", id: "file_id"<br/> &nbsp; },<br/> &nbsp; { <br/> &nbsp; &nbsp; text: "Edit", <br/> &nbsp; &nbsp; id: "edit_id", <br/> &nbsp; &nbsp; items: [ <br/> &nbsp; &nbsp; &nbsp; { text" "Cut", iconCss: "e-icons e-cut" }, <br/> &nbsp; &nbsp; &nbsp; { text: "Copy", iconCss: "e-icons e-copy" }, <br/> &nbsp; &nbsp; &nbsp; { text: "Paste", iconCss: "e-icons e-paste" } <br/> &nbsp; &nbsp; ] <br/> &nbsp; }, <br/> &nbsp; { <br/> &nbsp; &nbsp;  text: "view", id: "view_id", url: "#" <br/> &nbsp; }, <br/> &nbsp; {<br/> &nbsp; &nbsp; text: "Help", id: "help_id" <br/> &nbsp; } <br/> ]; <br/> } |
| **Adding custom class**  | **Property:** *cssClass* <br/><br/> `<EJ.Menu id="menu" cssClass="custom-class"></EJ.Menu>` | **Property:** *cssClass* <br/><br/> `<MenuComponent id="menu" cssClass="custom-class" items={this.menuItems}></MenuComponent>` |
| **Enables or disables the animation on hover or click on the menu items** | **Property:** *enableAnimation* <br/><br/> `<EJ.Menu id="menu" enableAnimation={true}></EJ.Menu>` | **Not applicable** |
| **Animation settings** | **Not applicable** | **Property:** *animationSettings* <br/><br/>  `<MenuComponent id="menu" animationSettings={this.animation} items={this.menuItems}></MenuComponent>`  <br/> constructor(props: {}) { <br/> &nbsp; this.animationSettings = { effect: 'ZoomIn' }; <br/> } |
| **Root menu items to be aligned center in horizontal menu** | **Property:** *enableCenterAlign* <br/><br/> `<EJ.Menu id="menu" enableCenterAlign={true}></EJ.Menu>` | **Not applicable** |
| **Disabled state** | **Property:** enabled <br/><br/> `<EJ.Menu id="menu" enabled={false}></EJ.Menu>` | **Property:** disabled <br/><br/> `<MenuComponent id="menu" disabled={true} items={this.menuItems}></MenuComponent>` |
| **RTL**  | **Property:** enableRTL <br/><br/> `<EJ.Menu id="menu" enableRTL={true}></EJ.Menu>` | **Property:** enableRtl <br/><br/> `<MenuComponent id="menu" disabled={true} items={this.menuItems} enableRtl={true}></MenuComponent>` |
| **Enables/Disables the separator**  | **Property:** *enableSeparator* <br/><br/> `<EJ.Menu id="menu" enableSeparator={false}></EJ.Menu>` | **Not applicable** |
| **Menu Type** | **Property:** *menuType* <br/><br/> `<EJ.Menu id="menu" menuType="contextmenu"></EJ.Menu>` | **Not applicable** |
| **Exclude target for context menu**  | **Property:** *excludeTarget* <br/><br/> `<EJ.Menu id="menu" menu-type="contextmenu" contextMenuTarget="#target" excludeTarget=".inner"></EJ.Menu>` | **Not applicable** |
| **Fields** | **Property:** *fields* <br/><br/> var data = [ <br/> &nbsp; { id: "file_id", text: "File", parentId: null }, <br/> &nbsp; { id: "edit_id", text: "Edit", parentId: null }, <br/> &nbsp; { id: "view_id", text: "View", parentId: null }, <br/> &nbsp; { id: "help_id", text: "Help", parentId: null } <br/> ]; <br/> `<EJ.Menu id="menu" fields-dataSource={data} fields-id="id" fields-text="text" fields-parentid="parentId"></EJ.Menu>` | **Property:** *fields* <br/><br/> `<MenuComponent id="menu" disabled={true} items={this.menuItems} fields={this.menuFields}></MenuComponent>`<br/> constructor(props: {}) { <br/> &nbsp; this.menuFields = { text: ["text"], children: ["children"] }; <br/> } |
| **Height** | **Property:** *height* <br/><br/> `<EJ.Menu id="menu" height="50px"></EJ.Menu>` | **Not applicable** |
| **Width** | **Property:** *width* <br/><br/> `<EJ.Menu id="menu" width="800px"></EJ.Menu>` | **Not applicable** |
| **HTML Attributes** | **Property:** *htmlAttributes* <br/><br/> var attributes = { "aria-label":"menu" } <br/> `<EJ.Menu id="menu" htmlAttribute={attributes}></EJ.Menu>` | **Not applicable** |
| **Responsive** | **Property:** *isResponsive* <br/><br/> `<EJ.Menu id="menu" isResponsive={true}></EJ.Menu>` | **Not applicable** |
| **Show item on click**  | **Property:** *openOnClick* <br/><br/> `<EJ.Menu id="menu" openOnClick={true}></EJ.Menu>` | **Property:** *showItemOnClick* <br/><br/> `<MenuComponent id="menu" showItemOnClick={true} items={this.menuItems}></MenuComponent>` |
| **Orientation**  | **Property:** *orientation* <br/><br/> `<EJ.Menu id="menu" orientation="vertical"></EJ.Menu>` | **Property:** *orientation* <br/><br/> `<MenuComponent id="menu" orientation="Vertical" items={this.menuItems}></MenuComponent>` |
| **Show root level arrows** | **Property:** *showRootLevelArrows* <br/><br/> `<EJ.Menu id="menu" showRootLevelArrows={false}></EJ.Menu>` | **Not applicable** |
| **Show sub level arrows** | **Property:** *showSubLevelArrows* <br/><br/> `<EJ.Menu id="menu" showSubLevelArrows={false}></EJ.Menu>` | **Not applicable** |
| **Sub menu direction** | **Property:** *subMenuDirection* <br/><br/> `<EJ.Menu id="menu" subMenuDirection="left"></EJ.Menu>` | **Not applicable** |
| **Title** | **Property:** *titleText* <br/><br/> `<EJ.Menu id="menu" titleText="Title of the Menu"></EJ.Menu>` | **Not applicable** |
| **Template**  | **Not applicable** | **Property:** *template* <br/><br/> `<MenuComponent id="menu" items={this.data} fields={this.menuFields} template="#menuTemplate"></MenuComponent>` |
| **Pop up menu height** | **Property:** *overflowHeight* <br/><br/> `<EJ.Menu id="menu" overflowHeight="200px"></EJ.Menu>` | **Not applicable** |

## Methods

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Disable Method** | **Method:** *disable* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>` <br/> var menu = $('#menu').ejMenu('instance'); <br/> menu.disable(); | **Not applicable** |
| **Disable menu items** | **Method:** *disableItem* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>`<br/> var menu = $('#menu').ejMenu('instance');<br/> menu.disableItem("File");| **Method:** *enableItems* <br/><br/> `<MenuComponent id="menu" ref={(scope) => {this.menu = scope}} items={this.menuItems}></MenuComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.menu.enableItems("File", false); <br/> } |
| **Disable menu items by ID** | **Method:** *disableItemByID* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>`<br/> var menu = $('#menu').ejMenu('instance'); <br/> menu.disableItemByID("file_id"); | **Method:** *enableItems* <br/><br/> `<MenuComponent id="menu" ref={(scope) => {this.menu = scope}} items={this.menuItems}></MenuComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.menu.enableItems("file_id", false, true); <br/> } |
| **Enable Method** | **Method:** *enable* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>` <br/> var menu = $('#menu').ejMenu('instance'); <br/> menu.enable(); | **Not applicable** |
| **Enable menu items** | **Method:** *enableItem* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>`<br/> var menu = $('#menu').ejMenu('instance'); <br/> menu.enableItem("File"); | **Method:** *enableItems* <br/><br/> `<MenuComponent id="menu" ref={(scope) => {this.menu = scope}} items={this.menuItems}></MenuComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.menu.enableItems("File", true); <br/> } |
| **Enable menu items by ID** | **Method:** *enableItemByID* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>`<br/> var menu = $('#menu').ejMenu('instance'); <br/> menu.enableItemByID("file_id");| **Method:** *enableItems* <br/><br/> `<MenuComponent id="menu" ref={(scope) => {this.menu = scope}} items={this.menuItems}></MenuComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.menu.enableItems("file_id", true, true); <br/> } |
| **Hide Method** | **Method:** *hide* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>`<br/> var menu = $('#menu').ejMenu('instance'); <br/> menu.hide(); | **Not applicable** |
| **Hide menu items** | **Method:** *hideItems* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>`<br/> var menu = $('#menu').ejMenu('instance'); <br/> menu.hideItems(["#help_id","#edit_id"]); | **Method:** *hideItems* <br/><br/> `<MenuComponent id="menu" ref={(scope) => {this.menu = scope}} items={this.menuItems}></MenuComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.menu.hideItems(["edit_id","help_id"], true); <br/> } |
| **Insert menu items** | **Method:** *insert* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>`<br/> var menu = $('#menu').ejMenu('instance'); <br/> menu.insert([{ id: "view_id", text: "View" }], "#edit_id"); | **Not applicable** |
| **Insert menu items after the specified menu item** | **Method:** *insertAfter* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>`<br/> var menu = $('#menu').ejMenu('instance'); <br/> menu.insertAfter([{ id: "view_id", text: "View" }], "#edit_id"); | **Method:** *insertAfter* <br/><br/> `<MenuComponent id="menu" ref={(scope) => {this.menu = scope}} items={this.menuItems}></MenuComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.menu.insertAfter([{ id: "view_id", text: "View" }], "Edit"); <br/> } |
| **Insert menu items before the specified menu item** | **Method:** *insertBefore* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>`<br/> var menu = $('#menu').ejMenu('instance'); <br/> menu.insertBefore([{ id: "view_id", text: "View" }], "#help_id"); | **Method:** *insertBefore* <br/><br/> `<MenuComponent id="menu" ref={(scope) => {this.menu = scope}} items={this.menuItems}></MenuComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.menu.insertBefore([{ id: "view_id", text: "View" }], "Help"); <br/> } |
| **Remove menu items** | **Method:** *remove* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>`<br/> var menu = $('#menu').ejMenu('instance'); <br/> menu.remove(["#Edit"]);| **Method:** *removeItems* <br/><br/> `<MenuComponent id="menu" ref={(scope) => {this.menu = scope}} items={this.menuItems}></MenuComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.menu.removeItems(["Edit"]); <br/> } |
| **To show menu** | **Method:** *show* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>`<br/> var menu = $('#menu').ejMenu('instance'); <br/> menu.show();| **Not applicable** |
| **Destroy method** | **Method:** *destroy* <br/><br/> `<EJ.Menu id="menu"></EJ.Menu>`<br/> var menu = $('#menu').ejMenu('instance'); <br/> menu.destroy();| **Method:** *destroy* <br/><br/> `<MenuComponent id="menu" ref={(scope) => {this.menu = scope}} items={this.menuItems}></MenuComponent>` <br/> constructor(props: {}) { <br/> &nbsp; this.menu.destroy(); <br/> } |

## Events

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| **Triggers before opening the menu** | **Events:** *beforeOpen* <br/><br/> `<EJ.Menu id="menu" beforeOpen={beforeOpen}></EJ.Menu>` <br/> function beforeOpen(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Events:** *beforeOpen* <br/><br/> `<MenuComponent id="menu" items={this.menuItems} beforeOpen={this.beforeOpen.bind(this)}"></MenuComponent>` <br/> beforeOpen(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| **Triggers before closing the menu** | **Not applicable** | **Events:** *beforeClose* <br/><br/> `<MenuComponent id="menu" items={this.menuItems} beforeClose={this.beforeClose.bind(this)}></MenuComponent>` <br/> beforeClose(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| **Triggers before rendering each menu item** | **Not applicable** | **Events:** *beforeItemRender* <br/><br/> `<MenuComponent id="menu" items={this.menuItems} beforeItemRender={this.beforeItemRender.bind(this)}></MenuComponent>` <br/> beforeItemRender(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| **Triggers while selecting the menu item** | **Events:** *click* <br/><br/> `<EJ.Menu id="menu" click={click}></EJ.Menu>` <br/> function click(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Events:** *select* <br/><br/> `<MenuComponent id="menu" items={this.menuItems} select={this.select.bind(this)}></MenuComponent>` <br/> select(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| **Triggers after closing the menu** | **Events:** *close* <br/><br/> `<EJ.Menu id="menu" close={close}></EJ.Menu>` <br/> function close(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Events:** *onClose* <br/><br/> `<MenuComponent id="menu" items={this.menuItems} onClose={this.onClose.bind(this)}></MenuComponent>` <br/> onClose(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| **Triggers after opening the menu** | **Events:** *open* <br/><br/> `<EJ.Menu id="menu" open={open}></EJ.Menu>` <br/> function open(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Events:** *onOpen* <br/><br/> `<MenuComponent id="menu" items={this.menuItems} onOpen={this.onOpen.bind(this)}></MenuComponent>` <br/> onOpen(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| **Triggers once the component rendering is completed** | **Events:** *create* <br/><br/> `<EJ.Menu id="menu" create={create}></EJ.Menu>` <br/> function create(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Events:** *created* <br/><br/> `<MenuComponent id="menu" items={this.menuItems} created={this.created.bind(this)}></MenuComponent>` <br/> created() { <br/> &nbsp; &nbsp; /** code block */ <br/> } |
| **Triggers once the component is destroyed** | **Events:** *destroy* <br/><br/> `<EJ.Menu id="menu" destroy={destroy}></EJ.Menu>` <br/> function destroy(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Not applicable** |
| **Triggers when key down on menu items** | **Events:** *keydown* <br/><br/> `<EJ.Menu id="menu" keydown={keydown}></EJ.Menu>` <br/> function keydown(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Not applicable** |
| **Triggers when mouse out from menu items** | **Events:** *mouseout* <br/><br/> `<EJ.Menu id="menu" mouseout={mouseout}></EJ.Menu>` <br/> function mouseout(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Not applicable** |
| **Triggers when mouse over the Menu items** | **Events:** *mouseover* <br/><br/> `<EJ.Menu id="menu" mouseover={mouseover}></EJ.Menu>` <br/> function mouseover(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Not applicable** |
| **Triggers when overflow popup menu opens** | **Events:** *overflowOpen* <br/><br/> `<EJ.Menu id="menu" overflowOpen={overflowOpen}></EJ.Menu>` <br/> function overflowOpen(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Not applicable** |
| **Triggers when overflow popup menu closes** | **Events:** *overflowClose* <br/><br/> `<EJ.Menu id="menu" overflowClose={overflowClose}></EJ.Menu>` <br/> function overflowClose(args) { <br/> &nbsp; &nbsp; /** code block */ <br/> } | **Not applicable** |

{% endraw %}