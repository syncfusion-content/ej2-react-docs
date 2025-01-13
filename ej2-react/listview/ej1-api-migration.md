---
layout: post
title: Ej1 api migration in React Listview component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Ej1 api migration in React Listview component

This article describes the API migration process for the ListView component from Essential JS 1 to Essential JS 2. It provides a comparison of APIs and their usage between the two versions.

{% raw %}

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Virtualization | **Property:** *allowVirtualScrolling*  <br /><br /> `<EJ.ListView id="default" allowVirtualScrolling={true}` <br /> `virtualScrollMode="normal" dataSource={dataSourceItem}>`<br /> `</EJ.ListView>`  <br /> | **Property:** *enableVirtualization* <br /><br /> `<ListViewComponent id='ui-list' dataSource={this.dataSource} enableVirtualization={true} >`<br />`<Inject services={[Virtualization]} />`<br />`</ListViewComponent>` |
| Fields | **Property:** *fieldSettings* <br /> <br /> `<EJ.ListView id="default"` <br /> `enableGroupList={true} dataSource={dataSourceItem}>` <br /> `</EJ.ListView>` <br /> | **Property:** *fields*  <br /><br /> **Inner properties:** *child, enabled, groupBy htmlAttributes, iconsCss, id, isChecked, isVisible, sortBy, tableName, text, tooltip.* <br /><br /> `public fields = { enabled: enable_items,` <br /> `groupBy: groupByProp };` <br /><br /> `<ListViewComponent id='list'` <br /> `dataSource={this.dataSource}` <br /> `fields={this.fields}>` <br /> `</ListViewComponent>`|
| Template | **Property:** *renderTemplate* <br /> <br />`<EJ.ListView dataSource={this.dataSource}` <br /> `renderTemplate={true}>` <br /> `<div  id="template">` <br /> `<div> Template1 </div>` <br />  `</div>` <br /> `</EJ.ListView>` <br /><br />| **Property:** *template* <br /><br /> `private listTemplate(data: any): JSX.Element {` <br /> `return (` <br /> `<div className="template">Template Data</div>` <br /> `);` <br /> `}` <br /><br /> `<ListViewComponent id='list'` <br /> `dataSource={this.dataSource}` <br /> `template={this.listTemplate.bind(this)}>` <br /> `</ListViewComponent>` |
| Animation | **Not Applicable** | **Property:**  *animation* <br /><br /> `public animation =  { effect: ‘SlideLeft’,` <br /> `duration: 400, easing: ‘ease’ };` <br /><br /> `<ListViewComponent id='list' dataSource={this.dataSource}` <br /> `animation={this.animation}>` <br /> `</ListViewComponent>` <br />|
| Enable | **Not Applicable** |**Property:**  *enable* <br /> <br /> `<ListViewComponent id='list' dataSource={this.dataSource}` <br/> `enable={true}>` <br/> `</ListViewComponent>` |
| Template for grouping | **Not Applicable** | **Property:**  *groupTemplate* <br /> <br />`private listGroupTemplate(data: any): JSX.Element {` <br /> `return (` <br /> `<div className="template">Template Data</div>` <br /> `);` <br /> `}` <br /><br /> `<ListViewComponent id='list'` <br /> `dataSource={this.dataSource}` <br /> `groupTemplate={this.listGroupTemplate.bind(this)}>` <br /> `</ListViewComponent>`  |
| Template for header |**Not Applicable** | **Property:**  *headerTemplate* <br /><br /> `private listHeaderTemplate(data: any): JSX.Element {` <br /> `return (` <br /> `<div className="template">Template Data</div>` <br /> `);` <br /> `}` <br /><br /> `<ListViewComponent id='list'` <br /> `dataSource={this.dataSource}` <br /> `headerTemplate={this.listHeaderTemplate.bind(this)}>` <br /> `</ListViewComponent>` |
| HTML attributes |**Not Applicable**| **Property:**  *htmlAttributes* <br /><br /> `public attributes =  {id: ‘list_id’,` <br /> `class: ‘.list_test’};` <br /> <br /> `<ListViewComponent id='list' dataSource={this.dataSource}` <br /> `htmlAttributes={this.attributes}>` <br /> `</ListViewComponent>`<br /> |
| Clear | **Method:** *clear()* <br /><br /> `<EJ.ListView id='listView' dataSource={this.dataSource}>`<br /> `</EJ.ListView>` <br /><br /> `var  listObj  =  $("#default").ejListView("instance");` <br/> `listObj.clear();` <br/>| **Property** *dataSource* <br /> <br /> `public emptyDataSrc: { [key: string]: Object }[] = [];` <br /> <br /> `<ListViewComponent id='list' dataSource={this.emptyDataSrc}>` <br /> `</ListViewComponent>` <br /> <br /> `listObj.destroy();` <br />|
| Remove CheckMark | **Method:** *removeCheckMark()* <br /><br/> `<EJ.ListView  id="default"  dataSource={dataSourceItem}` <br/>  `enableCheckMark={true}>` <br/> `</EJ.ListView>` <br/><br/>  `var  listObj  =  $("#default").ejListView("instance");` <br/> `listObj.removeCheckMark(2);` <br/> | **Method:** *uncheckItem()* <br /><br /> `<ListViewComponent id='list' dataSource={this.dataSource}>` <br /> `</ListViewComponent>` <br /><br /> `listObj.uncheckItem ({id:‘2’});` <br />|
| Set Active | **Method:** *setActive()* <br /><br /> `<EJ.ListView  id="default"  dataSource={dataSourceItem}` <br/>  `persistSelection={true}>` <br/> `</EJ.ListView>` <br/><br/>  `var  listObj  =  $("#default").ejListView("instance");` <br/> `listObj.setActive(2);` <br/>| **Method:** *selectItem()* <br /> <br />`<ListViewComponent id='list' dataSource={this.dataSource}>` <br /> `</ListViewComponent>` <br /><br /> `listObj.selectItem({id:‘2’});` <br />|
| Select |**Not Applicable**| **Event:** *select* <br /> <br />`<ListViewComponent id='list' dataSource={this.dataSource}` <br/> `select={this.onSelect}>` <br/> `</ListViewComponent>` <br/> <br/> `private onSelect(args: Event): void { }` <br/> |

{% endraw %}