---
layout: post
title: Ej1 api migration in React Splitter component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Splitter component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Splitter component

This article describes the API migration process of Splitter component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Common

{% raw %}

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Adding custom class | **Property:** *cssClass* <br /><br /> `<EJ.Splitter id=”splitter” cssClass=”customClass”><EJ.Splitter>` | **Property:** *cssClass* <br />`<SplitterComponent cssClass=”customClass”></SplitterComponent>` <br /> |
| Adjusting Height | **Property:** *height* <br /><br /> `<EJ.Splitter id=”splitter” height=”100%”><EJ.Splitter>` | **Property:** *height* <br /> `<SplitterComponent height=”100%”></SplitterComponent>` |
| Adjusting Width | **Property:** *width* <br /><br /> `<EJ.Splitter id=”splitter” width=”600”><EJ.Splitter>` | **Property:** *width* <br /><br /> `<SplitterComponent width=”100%”></SplitterComponent>` |
| Orientation | **Property:** *orientation* <br /><br /> `<EJ.Splitter id=”splitter” orientation={ej.Orientation.Vertical}><EJ.Splitter>`<br/> | **Property:** *orientation* <br /> <br /> `<SplitterComponent orientation=”Vertical”></SplitterComponent>` |
| Separator Size | Not Available | **Property:** *separatorSize* <br /> <br /> `<SplitterComponent separatorSize={4}></SplitterComponent>` |
| Adding HTML attributes | **Property:** *htmlAttributes* <br /><br /> `<EJ.Splitter id=”splitter” htmlAttributes ={htmlAttributes}><EJ.Splitter>`<br/>var htmlAttributes = { class: “my-class”, style: “border: 1px solid red”}<br/> | Not Available |
| Customize expand/collapse icons | **Property:** <br /> *expanderTemplate* <br /><br /> `<EJ.Splitter id=”splitter” expanderTemplate =‘<img class=”eimg” src=”expander.png” alt=”employee”/>’><EJ.Splitter>` | Not Available |
| Make control flexible for mobile view | **Property:** *isResponsive* <br /><br /> `<EJ.Splitter id=”splitter” isResponsive={true}><EJ.Splitter>` | By default, Splitter works with mobile mode.|
| Refresh the Splitter | **Method:** *refresh()* <br /><br /> `<EJ.Splitter id=”splitter”><EJ.Splitter>`<br/>$(“#splitter”).ejSplitter(“refresh”)<br/> | **Method:** *refresh()* <br /><br /> `<SplitterComponent id=”splitter” ref={splitter=>this.splitterInstance = splitter}/></SplitterComponent>`<br/> constructor(props: {}) { this.splitterInstace.refresh();} <br/> |
| Destroy the Control | **Method:** *destroy()* <br /><br /> `<EJ.Splitter id=”splitter”><EJ.Splitter>` <br/>$(“#splitter”).ejSplitter(“destroy”)<br/> | **Method:** *destroy()* <br /> `<SplitterComponent id=”splitter” ref={splitter=>this.splitterInstance = splitter}/></SplitterComponent>`<br/>constructor(props: {}) { this.splitterInstace.destroy();}<br /> |
| Event triggers after the Splitter created successfully | **Event:** *create* <br /><br /> `<EJ.Splitter id=”splitter” create={create}><EJ.Splitter>`<br/>function create(args) {}<br/> | **Event:** *created* <br /><br />`<SplitterComponent id=”splitter” created={this.onCreated.bind(this)}/></SplitterComponent>`<br/>private onCreated() {}<br/> |
| Event triggers when Splitter has been destroyed | **Event:**  *destroy* <br /><br /> `<EJ.Splitter id=”splitter” destroy={destroy}><EJ.Splitter>` <br/>function destroy(args) { }<br/> | Not Available |

## Accessibility and Localization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Keyboard Navigation | **Property:** *allowKeyboardNavigation* <br /><br /> `<EJ.Splitter id=”splitter” allowKeyboardNavigation ={true}><EJ.Splitter>` | No separate property for enable/disable keyboard navigation.  Its enabled by default. |
| Right to Left | **Property:** *enableRTL* <br /><br /> `<EJ.Splitter id=”splitter” enableRTL ={false}><EJ.Splitter>` | **Property:** *enableRtl*<br /><br /> `<SplitterComponent enableRtl={true}></SplitterComponent>` |

## Control State

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Enable/Disable the control | Not Available | **Property:** *enabled* <br /><br /> `<SplitterComponent enabled={true}></SplitterComponent>` |

## State Maintenance

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Save the model value in local storage or cookies | Not Available | **Property:** *enablePersistence* <br /><br /> `<SplitterComponent enablePersistence={true}></SplitterComponent>` |

## Pane Properties

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property:** *properties* <br /><br /> `<EJ.Splitter id=”splitter” properties={property}><EJ.Splitter>`<br/>var property = []; <br/> | **Property:** *paneSettings* <br /> `<SplitterComponent> <PanesDirective> <PaneDirective/> </PanesDirective></SplitterComponent>`<br/>  |
| Pane Content | Not Available | **Property:** *content* <br /> `<SplitterComponent> <PanesDirective> <PaneDirective content=”<div>First Pane Content</div>”/> </PanesDirective> </SplitterComponent>`<br/> |
| Change the size of the pane | **Property:** *paneSize* <br /> `<EJ.Splitter id=”splitter” properties={property}><EJ.Splitter>` <br/>var property = [{paneSize: “30px”}];<br/> | **Property:** *size* <br /> `<SplitterComponent><PanesDirective><PaneDirective size=”25%”/></PanesDirective></SplitterComponent>`<br/> |
| Minimum pane size | **Property:** *minSize* <br />`<EJ.Splitter id=”splitter” properties={property}><EJ.Splitter>`<br/>var property = [{minSize: 30}];<br/> | **Property:** *min* <br /><br />`<SplitterComponent><PanesDirective><PaneDirective min=”60px”/></PanesDirective></SplitterComponent>`<br/> |
| Maximum pane size | **Property:** *maxSize* <br /><br />`<EJ.Splitter id=”splitter” properties={property}><EJ.Splitter>`<br/>var property = [{maxSize: 30}];<br/>| **Property:** *max* <br /><br />`<SplitterComponent><PanesDirective><PaneDirective max=”60px”/></PanesDirective></SplitterComponent>`<br/> |
| Enable/Disable the Pane Resizable behavior | **Property:** *resizable* <br /><br />`<EJ.Splitter id=”splitter” properties={property}><EJ.Splitter>`<br />var property = [{resizable: false }];<br/> | **Property:** *resizable* <br /><br />`<SplitterComponent><PanesDirective><PaneDirective resizable={false}/></PanesDirective></SplitterComponent>`<br/> |
| Collapsible |**Property:** *collapsible* <br /><br />`<EJ.Splitter id=”splitter” properties={property}><EJ.Splitter>`<br />var property = [{collapsible: true }];<br/> | **Property:** *collapsible* <br /><br />`<SplitterComponent><PanesDirective><PaneDirective collapsible={true}/></PanesDirective></SplitterComponent>`<br/> |
| Expandable | **Property:** *expandable* <br /><br /> `<EJ.Splitter id=”splitter” properties={property}><EJ.Splitter>` <br />var property = [{expandable: true }];<br/> | Not Available |
| Collapsed | Not Available | **Property:** *collapsed* <br /><br />`<SplitterComponent><PanesDirective><PaneDirective collapsed={true}/></PanesDirective></SplitterComponent>`<br/> |
| Add Pane | **Method:** *addItem()* <br /><br />`<EJ.Splitter id=”splitter”><EJ.Splitter>`<br/>$(“#splitter”).ejSplitter(“addItem”, “New Pane 0”, {paneSize:20, minSize:20, maxSize: 100}, 0);<br/> |**Method:** *addPane()* <br /> <br /> `<SplitterComponent id=”splitter” ref={splitter=>this.splitterInstance = splitter}/></SplitterComponent>`<br/>constructor(props: {}) {this.splitterInstace. addPane({size: “25%”, content: “Pane”}, 0)}<br/> |
| Remove Pane | **Method:** *removeItem()* <br /><br /> `<EJ.Splitter id=”splitter”><EJ.Splitter>`<br />$(“#splitter”).ejSplitter(“removeItem”, 0);<br/> | **Method:** *removePane()* <br /><br />`<SplitterComponent id=”splitter” ref={splitter=>this.splitterInstance = splitter}/></SplitterComponent>`<br/>constructor(props: {}) { this.splitterInstace. removePane(0);}<br/> |
| Collapse Pane | **Method:** *collapse()* <br /><br /> `<EJ.Splitter id=”splitter”><EJ.Splitter>`<br />$(“#splitter”).ejSplitter(“collapse”, 0);<br/> | **Method:** *collapse()* <br /><br />`<SplitterComponent id=”splitter” ref={splitter=>this.splitterInstance = splitter}/></SplitterComponent>`<br/>constructor(props: {}) {this.splitterInstace.collapse(0);}<br/> |
| Expand Pane | **Method:** *expand()* <br /><br />`<EJ.Splitter id=”splitter”><EJ.Splitter>`<br />$(“#splitter”).ejSplitter(“expand”, 0);<br/> | **Method:** *expand()* <br /><br />`<SplitterComponent id=”splitter” ref={splitter=>this.splitterInstance = splitter}/></SplitterComponent>`<br/>constructor(props: {}) { this.splitterInstace.expand(0);}<br/> |
| Event triggers when before panes get expanded/collapsed | **Event:** *beforeExpandCollapse* <br /><br />`<EJ.Splitter id=”splitter” beforeExpandCollapse ={ beforeExpandCollapse }><EJ.Splitter>`<br />function beforeExpandCollapse (args) {}<br/> | **Event:** *beforeExpand* <br /><br />`<SplitterComponent id=”splitter” beforeExpand ={this. onBeforeExpand.bind(this)}/></SplitterComponent>`<br />private onBeforeExpand () {}<br/> **Event:** beforeCollapse <br />`<SplitterComponent id=”splitter” beforeCollapse ={this. onBeforeCollapse.bind(this)}/></SplitterComponent>`<br/>private onBeforeCollapse() {}<br/> |
| Event triggers when after panes get expanded/collapsed | **Event:** *expandCollapse* <br /><br />`<EJ.Splitter id=”splitter” expandCollapse ={ expandCollapse}><EJ.Splitter>`<br />function expandCollapse (args) { }<br/> | **Event:** *expand* <br /><br />`<SplitterComponent id=”splitter” expand ={this. onExpand.bind(this)}/></SplitterComponent>`<br />private onExpand () {}<br/> **Event:** collapse <br />`<SplitterComponent id=”splitter” collapse={this. onCollapse.bind(this)}/></SplitterComponent>`<br/>private onCollapse () {}<br/> |
|  Event triggers when Resizing the pane | **Event:** *resize* <br /><br />`<EJ.Splitter id=”splitter” resize ={ resize }><EJ.Splitter>`<br />function resize (args) { }<br/> | **Event:** *resizing* <br /><br />`<SplitterComponent id=”splitter” resizing={this.onResizing.bind(this)}/></SplitterComponent>`<br/>private onResizing() {}<br/> |
| Event triggers when pane is started to resize | Not Available | **Event:** *resizeStart* <br /><br />`<SplitterComponent id=”splitter” resizeStart={this.onResizeStart.bind(this)}/></SplitterComponent>`<br/>private onResizeStart () {}<br/> |
| Event triggers when pane is stopped to resize | Not Available | **Event:** *resizeStop* <br /><br />`<SplitterComponent id=”splitter” resizeStop ={this.onResizeStop.bind(this)}/></SplitterComponent>`<br/>private onResizeStop () {}<br/> |
| Event triggers when click template icon | **Event:** *clickOnExpander* <br /><br />`<EJ.Splitter id=”splitter” clickOnExpander ={ clickOnExpander }><EJ.Splitter>`<br />function clickOnExpander (args) { }<br/> | Not Available |

## Animation

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| EnableAnimation | **Property:** *enableAnimation* <br /><br />`<EJ.Splitter id=”splitter” enableAnimation ={true}><EJ.Splitter>`<br /> &nbsp; | Not Available |
| AnimationSpeed | **Property:** *animationSpeed* <br /><br /> `<EJ.Splitter id=”splitter” animationSpeed ={150}><EJ.Splitter>` <br />&nbsp; | Not Available |

{% endraw %}