---
layout: post
title: Ej1 api migration in React Grid component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Grid component

This article describes the API migration process of Grid component from Essential JS 1 to Essential JS 2.

## Sorting

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *allowSorting* <br><br> `<EJ.Grid allowSorting={true}>` <br> `</EJ.Grid>`| **Property:** *allowSorting* <br><br>`<GridComponent allowSorting={true}>` <br>`</GridComponent>`|
|Clear the Sorted columns | **Method:** *clearSorting()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");`<br>`gridObj.clearSorting();`| **Method:** *clearSorting()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.clearSorting()`
|Get the Sorted Columns by using the Fieldname | **Method:** *getsortColumnByField(field)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getsortColumnByField("OrderID");`| **Property:** *sortSettings.columns* <br><br>You can get a sorted column by iterating `sortSettings.columns` with fieldname
|Remove the Sorted Columns | **Method:** *removeSortedColumns(fieldName)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.removeSortedColumns("OrderID");`| **Method:** *removeSortColumn(fieldName)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.removeSortColumn("OrderID")`
|Sort a Column by using the method| **Method:** *sortColumn(columnName, [sortingDirection])* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.sortColumn("OrderID", "ascending");`| **Method:** *sortColumn(columnName, Direction)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.sortColumn("OrderID", "ascending");`

## Grouping

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *allowGrouping* <br><br> `<EJ.Grid allowGrouping={true}>` <br> `</EJ.Grid>`| **Property:** *allowGrouping* <br><br>`<GridComponent allowGrouping={true}>` <br>`</GridComponent>`|
|Group Columns initially | **Property:** *groupSettings.groupedColumns* <br><br> `var groupSettings = { groupedColumns:["CustomerID"] };`<br>`<EJ.Grid allowGrouping={true}`<br>`groupSettings={groupSettings}>` <br> `</EJ.Grid>`| **Property:** *groupSettings.columns* <br><br>`public groupSettings : Object = { columns: ['CustomerID'] };`<br>`<GridComponent allowGrouping={true}`<br>`groupSettings={this.groupSettings}>` <br>`</GridComponent>`|
|Caption Template | **Property:** *groupSettings.captionFormat* <br><br> `var groupSettings = { captionFormat: "#template" };`<br>`<EJ.Grid allowGrouping={true}`<br>`groupSettings={groupSettings}>` <br> `</EJ.Grid>`| **Property:** *groupSettings.captionTemplate* <br><br>`public groupSettings : Object = { captionTemplate: "#template" };`<br>`<GridComponent allowGrouping={true}`<br>`groupSettings={this.groupSettings}>` <br>`</GridComponent>`|
|Show Drop Area | **Property:** *groupSettings.showDropArea* <br><br> `var groupSettings = { showDropArea: false };`<br>`<EJ.Grid allowGrouping={true}`<br>`groupSettings={groupSettings}>` <br> `</EJ.Grid>`| **Property:** *groupSettings.showDropArea* <br><br>`public groupSettings : Object = { showDropArea: false };`<br>`<GridComponent allowGrouping={true}`<br>`groupSettings={this.groupSettings}>` <br>`</GridComponent>`|
|Collapse all group caption rows | **Method:** *collapseAll()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.collapseAll();`| **Method:** *collapseAll()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.groupModule.collapseAll()`
|Expand all group caption rows | **Method:** *expandAll()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.expandAll();`| **Method:** *expandAll()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.groupModule.expandAll()`
|Expand or collapse the row based <br>on the row state in grid | **Method:** *expandCollapse($target)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.expandCollapse($("tr td.recordplusexpand > div").first());`| **Method:** *expandCollapseRows()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>`<br>`this.gridInstance.groupModule.expandCollapseRows(`<br>`this.gridInstance.getContent().querySelectorAll('.e-recordplusexpand')[0])`
|Collapse the group drop area in grid | **Method:** *collapseGroupDropArea()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.collapseGroupDropArea();`| Not Applicable
|Expand the group drop area in grid | **Method:** *expandGroupDropArea()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.expandGroupDropArea();`| Not Applicable
|Group a column by using the method | **Method:** *groupColumn(fieldName)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.groupColumn("OrderID");`| **Method:** *groupColumn(fieldName)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.groupColumn("OrderID")`
|Ungroup a grouped column by using the method | **Method:** *ungroupColumn(fieldName)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.ungroupColumn("OrderID");`| **Method:** *ungroupColumn(fieldName)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.ungroupColumn("OrderID")`

## Filtering

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *allowFiltering* <br><br> `<EJ.Grid allowFiltering={true}>` <br> `</EJ.Grid>`| **Property:** *allowFiltering* <br><br>`<GridComponent allowFiltering={true}>` <br>`</GridComponent>`|
|Menu Filtering | **Property:** *filterSettings.filterType* <br><br> `var filterSettings = { filterType : "menu" };`<br>`<EJ.Grid allowFiltering={true}`<br>`filterSettings={filterSettings}>` <br> `</EJ.Grid>`| **Property:** *filterSettings.type* <br><br>`public filterSettings : Object = { type:'Menu };`<br>`<GridComponent allowFiltering={true}`<br>`filterSettings={this.filterSettings}>` <br>`</GridComponent>`|
|Excel Filtering | **Property:** *filterSettings.filterType* <br><br> `var filterSettings = { filterType : "excel" };`<br>`<EJ.Grid allowFiltering={true}`<br>`filterSettings={filterSettings}>` <br> `</EJ.Grid>`| **Property:** *filterSettings.type* <br><br>`public filterSettings : Object = { type:'Excel };`<br>`<GridComponent allowFiltering={true}`<br>`filterSettings={this.filterSettings}>` <br>`</GridComponent>`|
|Clear the Filtered values | **Method:** *clearFiltering(field) - field is optional* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.clearFiltering();`| **Method:** *clearFiltering()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.clearFiltering()`
|Filter a column by using the method| **Method:** *filterColumn(fieldName, filterOperator, filterValue, <br>predicate, [matchcase],[actualFilterValue])* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.filterColumn("OrderID",`<br>`"equal","10248","and", true);`| **Method:** *filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br>`this.gridInstance.filterByColumn("OrderID","equal",10248)`
|Filter columns by Collection| **Method:** *filterColumn(filterCollection)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.filterColumn([{field:"OrderID",`<br>&nbsp;`operator:"lessthan",value:"10266",`<br>`predicate:"and",matchcase:true},`<br>&nbsp;`{field:"EmployeeID",operator:`<br>&nbsp;`"equal",value:2,predicate:"and", matchcase:true}])`| **Property:** *filterSettings.columns* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br>`this.gridInstance.filterSettings:{columns: [{ field: 'ShipCity', matchCase: false, operator: 'startswith', predicate: 'and', value: 'reims' },`<br>`{ field: 'ShipCountry', matchCase: false, operator: 'startswith', predicate: 'and', value: 'France' }]}`
|Get the Filtered Records| **Method:** *getFilteredRecords()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getFilteredRecords();`| Not Applicable

## Searching

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *toolbarSettings.toolbarItems* <br><br> `var toolbarSettings = { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Search] };`<br>`<EJ.Grid toolbarSettings={toolbarSettings}>`<br> `</EJ.Grid>`| **Property:** *toolbar* <br><br>`public toolbar: Object = ['Search'];`<br>`<GridComponent toolbar={this.toolbar}`<br>`</GridComponent>`|
|Clear the Searched values | **Method:** *clearSearching()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.clearSearching();`| **Method:** *searchModule.search()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.searchModule.search("");`
|Search a value | **Method:** *search(searchString)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.search("France");`| **Method:** *searchModule.search(searchString)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.searchModule.search("France");`

## Paging

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *allowPaging* <br><br> `<EJ.Grid allowPaging={true}>` <br> `</EJ.Grid>`| **Property:** *allowPaging* <br><br>`<GridComponent allowPaging={true}>` <br>`</GridComponent>`|
|Customize Paging | **Property:** *pageSettings.pageSize* <br><br>`var pageSettings = { pageSize: 5 };`<br>`<EJ.Grid allowPaging={true}`<br>`pageSettings={pageSettings}>`<br> `</EJ.Grid>`| **Property:** *pageSettings.pageSize* <br><br>`public pageSettings: Object = {pageSize = 5,pageSizes: [10,15]};`<br>`<GridComponent allowPaging={true}`<br>`pageSettings={this.pageSettings}>`<br>`</GridComponent>`|
|Change Page Size | **Method:** *changePageSize(pageSize)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.changePageSize(7);`| **Property:** *pageSettings.pageSize* <br><br>Pagesize can be modified by using the below code<br>`public pageSettings: Object = {pageSize = 7};`<br>`<GridComponent allowPaging={true}`<br>`pageSettings={this.pageSettings}>`<br>`</GridComponent>`|
|Get Current Page Index | **Method:** *getCurrentIndex()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getCurrentIndex();`| **Property:** *pageSettings.currentPage* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `var currentPage = this.gridInstance.pageSettings.currentPage;`
|Get Pager Element | **Method:** *getPager()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getPager();`| **Method:** *getPager()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getPager();`
|Send a paging request to specified Page | **Method:** *gotoPage(pageIndex)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.gotoPage(3);`| **Method:** *gotoPage(pageIndex)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.gotoPage(3);`
|Calculate Pagesize of grid by using its Parent height(containerHeight) | **Method:** *calculatePageSizeBy*<br>*ParentHeight(containerHeight)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.`<br>`calculatePageSizeByParentHeight(400);`| Not Applicable

## Selection

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *allowSelection* <br><br> `<EJ.Grid allowSelection={true}>` <br> `</EJ.Grid>`| **Property:** *allowSelection* <br><br>`<GridComponent allowSelection={true}>` <br>`</GridComponent>`|
|Single Selection | **Property:** *selectionType* <br><br> `<EJ.Grid allowSelection={true}`<br>`selectionType="single">` <br> `</EJ.Grid>`| **Property:** *selectionSettings.type* <br><br>`public selectionSettings : Object = { type : "Single" };`<br>`<GridComponent allowSelection={true}`<br>`selectionSettings={this.selectionSettings}>` <br>`</GridComponent>`|
|Multiple Selection | **Property:** *selectionType* <br><br> `<EJ.Grid allowSelection={true}`<br>`selectionType="multiple">` <br> `</EJ.Grid>`| **Property:** *selectionSettings.type* <br><br>`public selectionSettings : Object = { type : "Multiple" };`<br>`<GridComponent allowSelection={true}`<br>`selectionSettings={this.selectionSettings}>` <br>`</GridComponent>`|
|Row Selection | **Property:** *selectionSettings.selectionMode* <br><br> `var selectionSettings = { selectionMode: ["row"] };`<br>`<EJ.Grid allowSelection={true}`<br>`selectionSettings={selectionSettings}>` <br> `</EJ.Grid>`| **Property:** *selectionSettings.mode* <br><br>`public selectionSettings: Object = { mode: 'Row' };`<br>`<GridComponent allowSelection={true}`<br>`selectionSettings={this.selectionSettings}>` <br>`</GridComponent>`|
|Cell Selection | **Property:** *selectionSettings.selectionMode* <br><br> `var selectionSettings = { selectionMode: ["cell"] };`<br>`<EJ.Grid allowSelection={true}`<br>`selectionSettings={selectionSettings}>` <br> `</EJ.Grid>`| **Property:** *selectionSettings.mode* <br><br>`public selectionSettings: Object = { mode: 'Cell' };`<br>`<GridComponent allowSelection={true}`<br>`selectionSettings={this.selectionSettings}>` <br>`</GridComponent>`|
|Clear the selected Cells | **Method:** *clearCellSelection()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.clearCellSelection();`| **Method:** *clearCellSelection()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.selectionModule.clearCellSelection()`
|Clear the selected Columns | **Method:** *clearColumnSelection([index]) - index is optional* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.clearColumnSelection();`| Not Applicable
|Get the selected Records | **Method:** *getSelectedRecords()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getSelectedRecords();`| **Method:** *getSelectedRecords()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getSelectedRecords();`
|Get the selected Rows | **Method:** *getSelectedRows()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getSelectedRows();`| **Method:** *getSelectedRows()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getSelectedRows();`
|Select Cells | **Method:** *selectCells(rowCellIndexes)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.selectCells([[1, [4, 3, 2]]]);`| **Method:** *selectionModule.selectCells(rowCellIndexes);* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.selectionModule.selectCells([{ rowIndex: 0, cellIndexes: [0] }, { rowIndex: 1, cellIndexes: [1] }]);;`
|Select Rows | **Method:** *selectRows(fromIndex, toIndex)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.selectRows(1, 4);`| **Method:** *selectionModule.selectRows(rowIndexes)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>`<br> `this.gridInstance.selectionModule.selectRows([0, 2])`
|Triggers when a <br>cell is selected| **Event:** *cellSelected* <br><br> `<EJ.Grid cellSelected={cellSelected}>` <br> `</EJ.Grid>`<br> `function cellSelected (args){}`| **Event:** *cellSelected* <br><br> `<GridComponent cellSelected ={cellSelected}>` <br>`</GridComponent>`<br>`function cellSelected (args){}`
|Triggers before the cell is being selected| **Event:** *cellSelecting* <br><br> `<EJ.Grid cellSelecting={cellSelecting}>`<br> `</EJ.Grid>` <br> `function cellSelecting (args){}` | **Event:** *cellSelecting* <br><br> `<GridComponent cellSelecting ={cellSelecting}>` <br>`</GridComponent>`<br>`function cellSelecting (args){}`
|Triggers when a <br>cell is deselected| **Event:** *cellDeselected* <br><br> `<EJ.Grid cellDeselected={cellDeselected}>`<br> `</EJ.Grid>` <br> `function cellDeselected (args){}` | **Event:** *cellDeselected* <br><br> `<GridComponent cellDeselected ={cellDeselected}>` <br>`</GridComponent>`<br>`function cellDeselected (args){}`
|Triggers before the cell is being deselected| **Event:** *cellDeselecting* <br><br> `<EJ.Grid cellDeselecting={cellDeselecting}>` <br> `</EJ.Grid>`<br> `function cellDeselecting (args){}` | **Event:** *cellDeselecting* <br><br> `<GridComponent cellDeselecting ={cellDeselecting}>` <br>`</GridComponent>`<br>`function cellDeselecting (args){}`
|Triggers when the <br>row is selected| **Event:** *rowSelected* <br><br> `<EJ.Grid rowSelected={rowSelected}>`<br> `</EJ.Grid>` <br> `function rowSelected (args){}` | **Event:** *rowSelected* <br><br> `<GridComponent rowSelected ={rowSelected}>` <br>`</GridComponent>`<br>`function rowSelected (args){}`
|Triggers before the row is being selected| **Event:** *rowSelecting* <br><br> `<EJ.Grid rowSelecting={rowSelecting}>`<br> `</EJ.Grid>` <br> `function rowSelecting (args){}` | **Event:** *rowSelecting* <br><br> `<GridComponent rowSelecting ={rowSelecting}>` <br>`</GridComponent>`<br>`function rowSelecting (args){}`
|Triggers when the <br>row is deselected| **Event:** *rowDeselected* <br><br> `<EJ.Grid rowDeselected={rowDeselected}>`<br> `</EJ.Grid>` <br> `function rowDeselected (args){}` | **Event:** *rowDeselected* <br><br> `<GridComponent rowDeselected ={rowDeselected}>` <br>`</GridComponent>`<br>`function rowDeselected (args){}`
|Triggers before the row is being deselected| **Event:** *rowDeselecting* <br><br> `<EJ.Grid rowDeselecting={rowDeselecting}>`<br> `</EJ.Grid>` <br> `function rowDeselecting (args){}` | **Event:** *rowDeselecting* <br><br> `<GridComponent rowDeselecting ={rowDeselecting}>` <br>`</GridComponent>`<br>`function rowDeselecting (args){}`
|Triggers when the column is selected| **Event:** *columnSelected* <br><br> `<EJ.Grid columnSelected={columnSelected}>` <br> `</EJ.Grid>`<br> `function columnSelected (args){}` | Not Applicable
|Triggers before the column is being selected | **Event:** *columnSelecting* <br><br> `<EJ.Grid columnSelecting={columnSelecting}>` <br> `</EJ.Grid>`<br> `function columnSelecting (args){}`| Not Applicable
|Triggers when the column is deselected| **Event:** *columnDeselected* <br><br> `<EJ.Grid columnDeselected={columnDeselected}>`<br> `</EJ.Grid>` <br> `function columnDeselected (args){}`| Not Applicable
|Triggers before the column is being deselected| **Event:** *columnDeselecting* <br><br> `<EJ.Grid columnDeselecting={columnDeselecting}>` <br> `</EJ.Grid>`<br> `function columnDeselecting (args){}`| Not Applicable

## Editing

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *editSettings* <br><br> `var editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };`<br>`<EJ.Grid editSettings={editSettings}>` <br> `</EJ.Grid>`| **Property:** *editSettings* <br><br>`public editSettings: Object = { allowEditing: true, allowAdding: true, allowDeleting: true };`<br>`<GridComponent allowSelection={true}`<br>`editSettings={this.editSettings}>` <br>`</GridComponent>`|
|Inline Editing | **Property:** *editSettings.editMode* <br><br> `var editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, editMode : "normal" };`<br>`<EJ.Grid editSettings={editSettings}>` <br> `</EJ.Grid>`| **Property:** *editSettings.mode* <br><br>`public editSettings: Object = { allowEditing: true, allowAdding: true, allowDeleting: true, mode : "Normal" };`<br>`<GridComponent allowSelection={true}`<br>`editSettings={this.editSettings}>` <br>`</GridComponent>`|
|Dialog Editing | **Property:** *editSettings.editMode* <br><br> `var editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, editMode : "dialog" };`<br>`<EJ.Grid editSettings={editSettings}>` <br> `</EJ.Grid>`| **Property:** *editSettings.mode* <br><br>`public editSettings: Object = { allowEditing: true, allowAdding: true, allowDeleting: true, mode : "Dialog" };`<br>`<GridComponent allowSelection={true}`<br>`editSettings={this.editSettings}>` <br>`</GridComponent>`|
|Batch Editing | **Property:** *editSettings.editMode* <br><br> `var editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, editMode : "batch" };`<br>`<EJ.Grid editSettings={editSettings}>` <br> `</EJ.Grid>`| **Property:** *editSettings.mode* <br><br>`public editSettings: Object = { allowEditing: true, allowAdding: true, allowDeleting: true, mode : "Batch" };`<br>`<GridComponent allowSelection={true}`<br>`editSettings={this.editSettings}>` <br>`</GridComponent>`|
|Add a new Record | **Method:** *addRecord([data,[serverChange]])* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.addRecord({"OrderID":12333});`| **Method:** *addRecord(data(optional), rowIndex(optional))* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.addRecord({OrderID:10000});`
|Batch Cancel | **Method:** *batchCancel()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.batchCancel();`| Not Applicable
|Batch Save | **Method:** *batchSave()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.batchSave();`| **Method:** *editModule.batchSave()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.editModule.batchSave()`
|Save a Cell - If *preventSaveEvent* is true, then it <br>will prevent the client side cellSave event| **Method:** *saveCell([preventSaveEvent])* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.saveCell();`| **Method:** *editModule.saveCell()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.editModule.saveCell()`
|End Edit | **Method:** *endEdit()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.endEdit();`| **Method:** *endEdit()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.endEdit()`
|Cancel Edit | **Method:** *cancelEdit()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.cancelEdit();`| **Method:** *closeEdit()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.closeEdit()`
|Delete Record | **Method:** *deleteRecord(fieldName, data)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.deleteRecord("OrderID", { OrderID: 10249, EmployeeID: 3 });`| **Method:** *deleteRecord(field, data)- Field and*<br>* data are optional* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.deleteRecord()`
|Delete Row | **Method:** *deleteRow($tr)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.deleteRow($(".gridcontent tr").first());`| **Method:** *deleteRow(tr)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.deleteRow(this.gridInstance.getContentTable()`<br>`.querySelector("tbody").firstChild)`
|Edit a cell in Batch edit mode| **Method:** *editCell(index, fieldName)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.editCell(2, "OrderID");`| **Method:** *editModule.editCell()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br>`this.gridInstance.editModule.editCell(0,gridObj`<br>`.columns[0].field)`
|Edit Form Validation | **Method:** *editFormValidate()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.editFormValidate();`| **Method:** *editModule.formObj.validate()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br>`this.gridInstance.editModule.formObj.validate()`
|Get Batch Changes | **Method:** *getBatchChanges()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getBatchChanges();`| **Method:** *editModule.getBatchChanges()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br>`this.gridInstance.editModule.getBatchChanges()`
|Refresh Batch Edit Changes | **Method:** *refreshBatchEditChanges()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.refreshBatchEditChanges();`| Not Applicable
|Set Default Data for adding| **Method:** *setDefaultData(defaultData)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `var defaultData = {OrderID:"10000"};` <br> `gridObj.setDefaultData(defaultData);`| **Method:** *editModule.addRecord(data)-data is optional* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.editModule.addRecord({OrderID:10000})`
|Start Edit | **Method:** *startEdit($tr)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.startEdit($(".gridcontent tr").first());`| **Method:** *startEdit()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.startEdit(gridObj.selectRow(0))`
|Update Record | **Method:** *updateRecord(fieldName, data)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.updateRecord("OrderID", { OrderID: 10249, EmployeeID: 3 });`| Not Applicable
|Set Cell value | **Method:** *setCellText(rowIndex, cellIndex, value)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.setCellText(0, 1, "France");`| **Method:** *setCellValue(key, field, value)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.setCellValue(10248,"CustomerID","A")`
|Get Currently edited cell value| **Method:** *getCurrentEditCellData()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getCurrentEditCellData();`| **Method:** *editModule.getCurrentEditCellData()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.`<br>`editModule.getCurrentEditCellData();`
|Triggers when adding a <br>record in batch editing| **Event:** *batchAdd* <br><br> `<EJ.Grid batchAdd={batchAdd}>`<br> `</EJ.Grid>` <br> `function batchAdd (args){}` | **Event:** *batchAdd* <br><br> `<GridComponent batchAdd ={batchAdd}>` <br>`</GridComponent>`<br>`function batchAdd (args){}`
|Triggers when deleting a <br>record in batch editing| **Event:** *batchDelete* <br><br> `<EJ.Grid batchDelete={batchDelete}>` <br> `</EJ.Grid>`<br> `function batchDelete (args){}` | **Event:** *batchDelete* <br><br> `<GridComponent batchDelete ={batchDelete}>` <br>`</GridComponent>`<br>`function batchDelete (args){}`
|Triggers before adding a record in batch editing| **Event:** *beforeBatchAdd* <br><br> `<EJ.Grid beforeBatchAdd={beforeBatchAdd}>`<br> `</EJ.Grid>` <br> `function beforeBatchAdd (args){}` | **Event:** *beforeBatchAdd* <br><br> `<GridComponent beforeBatchAdd ={beforeBatchAdd}>` <br>`</GridComponent>`<br>`function beforeBatchAdd (args){}`
|Triggers before deleting a record in batch editing| **Event:** *beforeBatchDelete* <br><br> `<EJ.Grid beforeBatchDelete={beforeBatchDelete}>`<br> `</EJ.Grid>` <br> `function beforeBatchDelete (args){}` | **Event:** *beforeBatchDelete* <br><br> `<GridComponent beforeBatchDelete ={beforeBatchDelete}>` <br>`</GridComponent>`<br>`function beforeBatchDelete (args){}`
|Triggers before saving a record in batch editing| **Event:** *beforeBatchSave* <br><br> `<EJ.Grid beforeBatchSave={beforeBatchSave}>`<br> `</EJ.Grid>`<br> `function beforeBatchSave (args){}` | **Event:** *beforeBatchSave* <br><br> `<GridComponent beforeBatchSave ={beforeBatchSave}>` <br>`</GridComponent>`<br>`function beforeBatchSave (args){}`
|Triggers before the <br>record in being edited| **Event:** *beginEdit* <br><br> `<EJ.Grid beginEdit={beginEdit}>`<br> `</EJ.Grid>` <br> `function beginEdit (args){}` | **Event:** *beginEdit* <br><br> `<GridComponent beginEdit ={beginEdit}>` <br>`</GridComponent>`<br>`function beginEdit (args){}`
|Triggers when the <br>cell is being edited| **Event:** *cellEdit* <br><br> `<EJ.Grid cellEdit={cellEdit}>`<br> `</EJ.Grid>` <br> `function cellEdit (args){}` | **Event:** *cellEdit* <br><br> `<GridComponent cellEdit ={cellEdit}>` <br>`</GridComponent>`<br>`function cellEdit (args){}`
|Triggers when the <br>cell is saved| **Event:** *cellSave* <br><br> `<EJ.Grid cellSave={cellSave}>` <br> `</EJ.Grid>`<br> `function cellSave (args){}` | **Event:** *cellSave* <br><br> `<GridComponent cellSave ={cellSave}>` <br>`</GridComponent>`<br>`function cellSave (args){}`
|Triggers when the record is added| **Event:** *endAdd* <br><br> `<EJ.Grid endAdd={endAdd}>`<br> `</EJ.Grid>` <br>`function endAdd (args){}` | **Event:** *actionComplete* <br><br> `<GridComponent actionComplete ={actionComplete}>` <br>`</GridComponent>`<br>`function actionComplete (args){}`
|Triggers when the record is deleted| **Event:** *endDelete* <br><br> `<EJ.Grid endDelete={endDelete}>`<br> `</EJ.Grid>` <br> `function endDelete (args){}` | **Event:** *actionComplete* <br><br> `<GridComponent actionComplete ={actionComplete}>` <br>`</GridComponent>`<br>`function actionComplete (args){}`
|Triggers when the record is edited| **Event:** *endEdit* <br><br> `<EJ.Grid endEdit={endEdit}>`<br> `</EJ.Grid>` <br> `function endEdit (args){}` | **Event:** *actionComplete* <br><br> `<GridComponent actionComplete ={actionComplete}>` <br>`</GridComponent>`<br>`function actionComplete (args){}`

## Resizing

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *allowResizing* <br><br> `<EJ.Grid allowResizing={true}>` <br> `</EJ.Grid>`| **Property:** *allowResizing* <br><br>`<GridComponent allowResizing={true}>` <br>`</GridComponent>`|
|Resize a column by using the method| **Method:** *resizeColumns(column,width)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.resizeColumns("OrderID",'150');`| **Property:** *columns.width* <br><br>To resize a column, set width to that particular column and then refresh the grid by using the refresh method.<br>`<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.columns[1].width = 100;`<br> `this.gridInstance.refresh();`
|Triggers when a column resize starts| **Event:** *resizeStart* <br><br> `<EJ.Grid resizeStart={resizeStart}>` <br> `</EJ.Grid>`<br> `function resizeStart (args){}` | **Event:** *resizeStart* <br><br> `<GridComponent resizeStart ={resizeStart}>` <br>`</GridComponent>`<br>`function resizeStart (args){}`
|Triggers when a column is resized| **Event:** *resized* <br><br> `<EJ.Grid resized={resized}>` <br> `</EJ.Grid>`<br> `function resized (args){}` | **Event:** *resizeStop* <br><br> `<GridComponent resizeStop ={resizeStop}>` <br>`</GridComponent>`<br>`function resizeStop (args){}`
|Triggers when a column resize stops| **Event:** *resizeEnd* <br><br> `<EJ.Grid resizeEnd={resizeEnd}>`<br> `</EJ.Grid>` <br> `function resizeEnd (args){}`| Not Applicable

## Reordering

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *allowReordering* <br><br> `<EJ.Grid allowReordering={true}>` <br> `</EJ.Grid>`| **Property:** *allowReordering* <br><br>`<GridComponent allowReordering={true}>` <br>`</GridComponent>`|
|Reorder Columns| **Method:** *reorderColumns(fromFieldName, toFieldName)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.reorderColumns("OrderID", "CustomerID");`| **Method:** *reorderColumns(fromFieldName, toFieldName)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.reorderColumns("OrderID", "CustomerID");`
|Reorder Rows| **Method:** *reorderRows(indexes, toIndex)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.reorderRows([0,1],3);`| Not Applicable

## Context Menu

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *contextMenuSettings.enableContextMenu* <br><br> `var contextMenuSettings = { enableContextMenu : true };`<br>`<EJ.Grid`<br>`contextMenuSettings={contextMenuSettings}>` <br> `</EJ.Grid>`| **Property:** *contextMenuItems* <br><br>`public contextMenuItems : Object = {'AutoFit', 'AutoFitAll'};`<br>`<GridComponent`<br>`contextMenuItems={this.contextMenuItems}>` <br>`</GridComponent>`|
|Triggers when context menu item is clicked| **Event:** *contextClick* <br><br> `<EJ.Grid contextClick={contextClick}>`<br> `</EJ.Grid>` <br> `function contextClick (args){}` | **Event:** *contextMenuClick* <br><br> `<GridComponent contextMenuClick ={contextMenuClick}>` <br>`</GridComponent>`<br>`function contextMenuClick (args){}`
|Triggers when context menu opens| **Event:** *contextOpen* <br><br> `<EJ.Grid contextOpen={contextOpen}>`<br> `</EJ.Grid>` <br> `function contextOpen (args){}` | **Event:** *contextMenuOpen* <br><br> `<GridComponent contextMenuOpen ={contextMenuOpen}>` <br>`</GridComponent>`<br>`function contextMenuOpen (args){}`

## Toolbar

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Print | **Property:** *toolbarSettings.toolbarItems* <br><br> `var toolbarSettings = { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Print] };`<br>`<EJ.Grid toolbarSettings={toolbarSettings}>`<br> `</EJ.Grid>`| **Property:** *toolbar* <br><br>`public toolbar: Object = ['Print'];`<br>`<GridComponent toolbar={this.toolbar}`<br>`</GridComponent>`|
|Add | **Property:** *toolbarSettings.toolbarItems* <br><br> `var toolbarSettings = { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Add] };`<br>`<EJ.Grid toolbarSettings={toolbarSettings}>`<br> `</EJ.Grid>`| **Property:** *toolbar* <br><br>`public toolbar: Object = ['Add'];`<br>`<GridComponent toolbar={this.toolbar}`<br>`</GridComponent>`|
|Edit | **Property:** *toolbarSettings.toolbarItems* <br><br> `var toolbarSettings = { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Edit] };`<br>`<EJ.Grid toolbarSettings={toolbarSettings}>`<br> `</EJ.Grid>`| **Property:** *toolbar* <br><br>`public toolbar: Object = ['Edit'];`<br>`<GridComponent toolbar={this.toolbar}`<br>`</GridComponent>`|
|Delete | **Property:** *toolbarSettings.toolbarItems* <br><br> `var toolbarSettings = { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Delete] };`<br>`<EJ.Grid toolbarSettings={toolbarSettings}>`<br> `</EJ.Grid>`| **Property:** *toolbar* <br><br>`public toolbar: Object = ['Delete'];`<br>`<GridComponent toolbar={this.toolbar}`<br>`</GridComponent>`|
|Update | **Property:** *toolbarSettings.toolbarItems* <br><br> `var toolbarSettings = { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Update] };`<br>`<EJ.Grid toolbarSettings={toolbarSettings}>`<br> `</EJ.Grid>`| **Property:** *toolbar* <br><br>`public toolbar: Object = ['Update'];`<br>`<GridComponent toolbar={this.toolbar}`<br>`</GridComponent>`|
|Cancel | **Property:** *toolbarSettings.toolbarItems* <br><br> `var toolbarSettings = { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Cancel] };`<br>`<EJ.Grid toolbarSettings={toolbarSettings}>`<br> `</EJ.Grid>`| **Property:** *toolbar* <br><br>`public toolbar: Object = ['Cancel'];`<br>`<GridComponent toolbar={this.toolbar}`<br>`</GridComponent>`|
|ExcelExport | **Property:** *toolbarSettings.toolbarItems* <br><br> `var toolbarSettings = { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.ExcelExport] };`<br>`<EJ.Grid toolbarSettings={toolbarSettings}>`<br> `</EJ.Grid>`| **Property:** *toolbar* <br><br>`public toolbar: Object = ['ExcelExport'];`<br>`<GridComponent toolbar={this.toolbar}`<br>`</GridComponent>`|
|WordExport | **Property:** *toolbarSettings.toolbarItems* <br><br> `var toolbarSettings = { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.WordExport] };`<br>`<EJ.Grid toolbarSettings={toolbarSettings}>`<br> `</EJ.Grid>`| Not Applicable
|PdfExport | **Property:** *toolbarSettings.toolbarItems* <br><br> `var toolbarSettings = { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.PdfExport] };`<br>`<EJ.Grid toolbarSettings={toolbarSettings}>`<br> `</EJ.Grid>`| **Property:** *toolbar* <br><br>`public toolbar: Object = ['PdfExport'];`<br>`<GridComponent toolbar={this.toolbar}`<br>`</GridComponent>`|
|Refresh Toolbar| **Method:** *refreshToolbar()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.refreshToolbar();`| Not Applicable
|Triggers when toolbar item is clicked| **Event:** *toolbarClick* <br><br> `<EJ.Grid toolbarClick={toolbarClick}>`<br> `</EJ.Grid>` <br> `function toolbarClick (args){}` | **Event:** *toolbarClick* <br><br> `<GridComponent toolbarClick ={toolbarClick}>` <br>`</GridComponent>`<br>`function toolbarClick (args){}`

## GridLines

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *gridLines* <br><br> `<EJ.Grid gridLines='Default'>` <br> `</EJ.Grid>`| **Property:** *gridLines* <br><br>`<GridComponent gridLines='Default'>` <br>`</GridComponent>`|

## Templates

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Detail Template | **Property:** *detailsTemplate* <br><br> `<EJ.Grid detailsTemplate : "#detailsTemplate">` <br> `</EJ.Grid>`| **Property:** *detailTemplate* <br><br>`<GridComponent  detailTemplate: '#detailTemplate'>` <br>`</GridComponent>`|
|Row Template | **Property:** *rowTemplate* <br><br> `<EJ.Grid rowTemplate : "#rowTemplate">` <br> `</EJ.Grid>`| **Property:** *rowTemplate* <br><br>`<GridComponent  rowTemplate: '#rowtemplate'>` <br>`</GridComponent>`|
|Refresh Template| **Method:** *refreshTemplate()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.refreshTemplate();`| Not Applicable
|Triggers when detail template row is clicked to collapse| **Event:** *detailsCollapse* <br><br> `<EJ.Grid detailsCollapse={detailsCollapse}>`<br> `</EJ.Grid>` <br> `function detailsCollapse (args){}`| Not Applicable
|Triggers when detail template row is initialized| **Event:** *detailsDataBound* <br><br> `<EJ.Grid detailsDataBound={detailsDataBound}>`<br> `</EJ.Grid>` <br> `function detailsDataBound (args){}`| Not Applicable
|Triggers when detail template<br>row is clicked to expand| **Event:** *detailsExpand* <br><br> `<EJ.Grid detailsExpand={detailsExpand}>`<br> `</EJ.Grid>` <br> `function detailsExpand (args){}` | **Event:** *detailDataBound* <br><br> `<GridComponent detailDataBound ={detailDataBound}>` <br>`</GridComponent>`<br>`function detailDataBound (args){}`
|Triggers when refresh the template column elements in the Grid| **Event:** *templateRefresh* <br><br> `<EJ.Grid templateRefresh={templateRefresh}>` <br> `</EJ.Grid>`<br> `function templateRefresh (args){}`| Not Applicable

## Row/Column Drag and Drop

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *allowRowDragAndDrop* <br><br> `<EJ.Grid allowRowDragAndDrop={true}>` <br> `</EJ.Grid>`| **Property:** *allowRowDragAndDrop* <br><br>`<GridComponent allowRowDragAndDrop={true}`<br>`</GridComponent>`|
|Triggers when the row is<br>being dragged| **Event:** *rowDrag* <br><br> `<EJ.Grid rowDrag={rowDrag}>`<br> `</EJ.Grid>` <br> `function rowDrag (args){}` | **Event:** *rowDrag* <br><br> `<GridComponent rowDrag ={rowDrag}>` <br>`</GridComponent>`<br>`function rowDrag (args){}`
|Triggers when the row drag begins| **Event:** *rowDragStart* <br><br> `<EJ.Grid rowDragStart={rowDragStart}>`<br> `</EJ.Grid>` <br> `function rowDragStart (args){}` | **Event:** *rowDragStart* <br><br> `<GridComponent rowDragStart ={rowDragStart}>` <br>`</GridComponent>`<br>`function rowDragStart (args){}`
|Triggers when the row is dropped| **Event:** *rowDrop* <br><br> `<EJ.Grid rowDrop={rowDrop}>`<br> `</EJ.Grid>` <br> `function rowDrop (args){}` | **Event:** *rowDrop* <br><br> `<GridComponent rowDrop ={rowDrop}>` <br>`</GridComponent>`<br>`function rowDrop (args){}`
|Triggers before the row is being dropped| **Event:** *beforeRowDrop* <br><br> `<EJ.Grid beforeRowDrop={beforeRowDrop}>`<br> `</EJ.Grid>` <br> `function beforeRowDrop (args){}`| Not Applicable
|Triggers when the <br>column is being dragged| **Event:** *columnDrag* <br><br> `<EJ.Grid columnDrag={columnDrag}>`<br> `</EJ.Grid>` <br> `function columnDrag (args){}`| Not Applicable
|Triggers when the <br>column drag begins| **Event:** *columnDragStart* <br><br> `<EJ.Grid columnDragStart={columnDragStart}>`<br> `</EJ.Grid>` <br> `function columnDragStart (args){}`| Not Applicable
|Triggers when the <br>column is dropped| **Event:** *columnDrop* <br><br> `<EJ.Grid columnDrop={columnDrop}>`<br> `</EJ.Grid>` <br> `function columnDrop (args){}`| Not Applicable

## Frozen Rows and Columns

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *scrollSettings.frozenRows* <br><br>`var scrollSettings = {frozenRows:2,frozenColumns: 2}`<br>`<EJ.Grid allowScrolling={true}`<br>`scrollSettings={scrollSettings}>` <br> `</EJ.Grid>`| **Property:** *frozenRows* <br><br>`<GridComponent frozenRows={2}`<br> `frozenColumns={2}>`<br>`</GridComponent>`|
|isFrozen | **Property:** *columns.isFrozen* <br><br>`<EJ.Grid>`<br>`<columns>` <br>`<column field="CustomerID" isFrozen={true}/>`<br>`</columns>`<br>`</EJ.Grid>`| **Property:** *columns.isFrozen* <br><br>`<GridComponent>`<br> `<ColumnsDirective>`<br>`<ColumnDirective field='CustomerID' isFrozen= {true}/>`<br>`</ColumnsDirective>`<br>`</GridComponent>`|

## ForeignKey

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *columns.foreignKeyValue* <br><br>`<EJ.Grid>`<br>`<columns>` <br>`<column field="EmployeeID" foreignKeyField="EmployeeID", foreignKeyValue="FirstName",dataSource=window.employeeView/>`<br>`</columns>`<br>`</EJ.Grid>`| **Property:** *columns.foreignKeyValue* <br><br>`<GridComponent>`<br> `<ColumnsDirective>`<br>`<ColumnDirective field='EmployeeID' foreignKeyValue= 'FirstName', dataSource= employeeData/>`<br>`</ColumnsDirective>`<br>`</GridComponent>`|

## Auto Wrap

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *allowTextWrap* <br><br> `<EJ.Grid allowTextWrap={true}>` <br> `</EJ.Grid>`| **Property:** *allowTextWrap* <br><br>`<GridComponent allowTextWrap={true}>`<br>`</GridComponent>`|
|Both | **Property:** *textWrapSettings.wrapMode* <br><br> `var textWrapSettings= {wrapMode:"both"};`<br>`<EJ.Grid allowTextWrap={true}`<br>`textWrapSettings=textWrapSettings>` <br> `</EJ.Grid>`| **Property:** *textWrapSettings.wrapMode* <br><br>`public textWrapSettings: Object = { wrapMode: 'Both' };`<br>`<GridComponent allowTextWrap={true} textWrapSettings={this.textWrapSettings}>`<br>`</GridComponent>`|
|Header | **Property:** *textWrapSettings.wrapMode* <br><br> `var textWrapSettings= {wrapMode:"header"};`<br>`<EJ.Grid allowTextWrap={true}`<br>`textWrapSettings=textWrapSettings>` <br> `</EJ.Grid>`| **Property:** *textWrapSettings.wrapMode* <br><br>`public textWrapSettings: Object = { wrapMode: 'Header' };`<br>`<GridComponent allowTextWrap={true} textWrapSettings={this.textWrapSettings}>`<br>`</GridComponent>`|
|Content | **Property:** *textWrapSettings.wrapMode* <br><br> `var textWrapSettings= {wrapMode:"content"};`<br>`<EJ.Grid allowTextWrap={true}`<br>`textWrapSettings=textWrapSettings>` <br> `</EJ.Grid>`| **Property:** *textWrapSettings.wrapMode* <br><br>`public textWrapSettings: Object = { wrapMode: 'Content' };`<br>`<GridComponent allowTextWrap={true} textWrapSettings={this.textWrapSettings}>`<br>`</GridComponent>`|

## Responsive

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *isResponsive* <br><br> `<EJ.Grid isResponsive={true}>` <br> `</EJ.Grid>`| Not Applicable

## State Persistence

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *enablepersistence* <br><br> `<EJ.Grid enablepersistence={true}>` <br> `</EJ.Grid>`| **Property:** *enablepersistence* <br><br>`<GridComponent enablepersistence={true}>`<br>`</GridComponent>`|

## Right to Left - RTL

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *enableRTl* <br><br> `<EJ.Grid enableRTl={true}>` <br> `</EJ.Grid>`| **Property:** *enableRTl* <br><br>`<GridComponent enableRTl={true}>`<br>`</GridComponent>`|

## ToolTip

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *clipMode* <br><br>`var columns = [`<br>`{ field: "ShipCity",clipMode:`<br>`ej.Grid.ClipMode.EllipsisWithTooltip}`<br>`{ field: "ShipCountry",clipMode:`<br>`ej.Grid.ClipMode.Ellipsis}`<br>`{ field: "ShipName",clipMode:`<br>`ej.Grid.ClipMode.Clip}];`<br>`<EJ.Grid columns={columns}>`<br>`</EJ.Grid>`| **Property:** *clipMode* <br><br>`<GridComponent>`<br> `<ColumnsDirective>`<br>`<ColumnDirective field='ShipCity' clipMode='EllipsisWithTooltip'/>`<br>`<ColumnDirective field='ShipCountry' clipMode='Ellipsis'/>`<br>`<ColumnDirective field='ShipName' clipMode='Clip'/>`<br>`</ColumnsDirective>`<br>`</GridComponent>`|

## Aggregate/Summary

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Footer Aggregate | **Property:** *showSummary* <br><br> `var summaryRows = [{`<br>`summaryColumns:[ { summaryType:`<br>`ej.Grid.SummaryType.Average,`<br>`displayColumn: "Freight",`<br>`dataMember: "Freight",`<br>`format: "{0:c2}",`<br>`prefix: "Average = "}]}];`<br>`<EJ.Grid showSummary={true} summaryRows={summaryRows}>` <br> `</EJ.Grid>`|**Property:** *aggregates* <br><br>`<GridComponent>`<br>`<AggregatesDirective>`<br>`<AggregateDirective>`<br>`<AggregateColumnsDirective>`<br>`field='Freight'`<br>`type='Sum'`<br>`format='C2'`<br>`footerTemplate={this.footerSum}>`<br>`</AggregateColumnDirective>`<br>`</AggregateDirective>`<br>`</AggregatesDirective>`<br>`</GridComponent>`|
|Caption Aggregate | **Property:** *showSummary* <br><br> `var summaryRows = [{`<br>`showCaptionSummary:true,`<br>`summaryColumns:[ { summaryType:`<br>`ej.Grid.SummaryType.Average,`<br>`displayColumn: "Freight",`<br>`dataMember: "Freight",`<br>`format: "{0:c2}",`<br>`prefix: "Average = "}],`<br>`showTotalSummary: false }];`<br>`<EJ.Grid showSummary={true} summaryRows={summaryRows}>` <br> `</EJ.Grid>`| **Property:** *aggregates* <br><br>`<GridComponent>`<br>`<AggregatesDirective>`<br>`<AggregateDirective>`<br>`<AggregateColumnsDirective>`<br>`field='Freight'`<br>`type='Sum'`<br>`format='C2'`<br>`groupCaptionTemplate={this.groupcFootertMax}>`<br>`</AggregateColumnDirective>`<br>`</AggregateDirective>`<br>`</AggregatesDirective>`<br>`</GridComponent>`|
|Get Summary values | **Method:** *getSummaryValues(summaryCol, summaryData)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getSummaryValues(summaryCol, window.gridData);`| Not Applicable

## Grid Export

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Adds a grid model property which is <br>to be ignored on exporting grid | **Method:** *addIgnoreOnExport(propertyNames)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.addIgnoreOnExport("filterSettings");`| Not Applicable |

## Columns

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Add or Remove Columns | **Method:** *columns(columnDetails, [action])()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.columns("OrderID", "remove");` <br> `gridObj.columns("CustomerID", "add");`| **Property:** *columns* <br><br> Grid is initially rendered with `OrderID` and `CustomerId` columns.Then if you want to add `ShipAddress` column, you have to reset the value for `column` property as `gridObj.columns = [{field:"OrderID"}, {field:"CustomerId"}, {field:"ShipAddress"}];` Then to remove the `CustomerId` column, reset the `column` property as, `gridObj.columns = [{field:"OrderID"}, {field:"ShipAddress"}];`
|Get Column By Field | **Method:** *getColumnByField(fieldName)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getColumnByField("OrderID");`| **Method:** *getColumnByField(fieldName)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br>`this.gridInstance.getColumnByField("OrderID")`
|Get Column By HeaderText | **Method:** *getColumnByHeaderText(headerText)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getColumnByHeaderText("Order ID");`| You can get the column object by iterating the gridObj.columns with the corresponding headerText
|Get Column By Index | **Method:** *getColumnByIndex(columnIndex)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getColumnByIndex(1);`| **Method:** *getColumnByIndex(columnIndex)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br>`this.gridInstance.getColumnByIndex(1)`
|Get Column Fieldnames | **Method:** *getColumnFieldNames()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getColumnFieldNames();`| **Method:** *getColumnFieldNames()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br>`this.gridInstance.getColumnFieldNames()`
|Get Column Index By Field | **Method:** *getColumnIndexByField(fieldName)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getColumnIndexByField("OrderID");`| **Method:** *getColumnIndexByField(fieldName)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br>`this.gridInstance.getColumnIndexByField("OrderID");`
|Get Column Index By headerText | **Method:** *getColumnIndexByHeaderText(headerText, [field])* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getColumnIndexByHeaderText("Order ID");`| You can get the Column object with the index value by iterating the gridObj.columns with headerText
|Set Width to columns | **Method:** *setWidthToColumns()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.setWidthToColumns();`| **Method:** *widthService.setWidthToColumns()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br>`this.gridInstance.widthService.setWidthToColumns()`
|Get HeaderText By FieldName | **Method:** *getHeaderTextByFieldName()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getHeaderTextByFieldName("OrderID");`| Not Applicable
|Get Hidden Columnname | **Method:** *getHiddenColumnNames()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getHiddenColumnNames();`| Not Applicable
|Get Visible Columnsname| **Method:** *getVisibleColumnNames()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getVisibleColumnNames();`| **Method:** *getVisibleColumns()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getVisibleColumns();`
|Select Columns | **Method:** *selectColumns(fromIndex)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.selectColumns(1);`| Not Applicable
|Select the Specified Columns based on the index provided | **Method:** *selectColumns(columnIndex,[toIndex])* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.selectColumns(1,4);`| Not Applicable

## Row

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|EnableHover | **Property:** *enableRowHover* <br><br> `<EJ.Grid enableRowHover={true}>` <br> `</EJ.Grid>`| **Property:** *enableHover* <br><br>`<GridComponent enableHover={true}>`<br>`</GridComponent>`|
|Get Row Height | **Method:** *getRowHeight()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getRowHeight();`| **Method:** *getRowHeight()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getRowHeight();`
|Refresh Row Height| **Method:** *rowHeightRefresh()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.rowHeightRefresh();`| Not Applicable
|Get index by Row Element | **Method:** *getIndexByRow($tr)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getIndexByRow($(".gridcontent tr").first());`| Not Applicable
|Get Row by its Index | **Method:** *getRowByIndex(from, to)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getRowByIndex(3, 6);`| **Method:** *getRowByIndex(index)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getRowByIndex(1);`
|Get rendered rows | **Method:** *getRows()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getRows();`| **Method:** *getRows()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getRows();`
|Triggers while hover the grid row| **Event:** *rowHover* <br><br> `<EJ.Grid rowHover={rowHover}>` <br> `</EJ.Grid>`<br> `function rowHover (args){}`| Not Applicable

## Show/Hide Columns

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Hide Columns by using method| **Method:** *hideColumns(headerText)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.hideColumns("Order ID");`| **Method:** *hideColumns(headerText)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.hideColumns("Order ID");`
|Show Columns by using method| **Method:** *showColumns(headerText)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.showColumns("Order ID");`| **Method:** *showColumns(headerText)* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.showColumns("Order ID");`

## Column Chooser

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Default | **Property:** *showColumnChooser* <br><br>`var columns = [`<br>`{ field: "ShipCity",`<br>`showInColumnChooser={false}}`<br>`{ field: "ShipCountry"}`<br>`<EJ.Grid showColumnChooser={true} columns={columns}>`<br>`</EJ.Grid>`| **Property:** *showColumnChooser* <br><br>`<GridComponent showColumnChooser={true}>`<br> `<ColumnsDirective>`<br>`<ColumnDirective field='ShipCity' showInColumnChooser={false}/>`<br>`<ColumnDirective field='ShipCountry' showInColumnChooser={true}/>`<br>`</ColumnsDirective>`<br>`</GridComponent>`|

## Header

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Refresh Header| **Method:** *refreshHeader()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.refreshHeader();`| **Method:** *refreshHeader()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.refreshHeader();`
|Triggers every time a request is made to access particular header cell information, element and data.| **Event:** *mergeHeaderCellInfo* <br><br> `<EJ.Grid mergeHeaderCellInfo={mergeHeaderCellInfo}>` <br> `</EJ.Grid>`<br> `function mergeHeaderCellInfo (args){}`| Not Applicable
|Triggers every time a request is made to access particular cell information, element and data | **Event:** *mergeCellInfo* <br><br> `<EJ.Grid mergeCellInfo={mergeCellInfo}>`<br> `</EJ.Grid>` <br> `function mergeCellInfo (args){}`| Not Applicable

## DataSource

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
| DataSource | **Method:** *dataSource(newdatasource,[templateRefresh])* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.dataSource(newdataSource);`| **Property:** *dataSource* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.datasource = newdataSource`

## Print

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Print the grid| **Method:** *print()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.print();`| **Method:** *print()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.print();`
|Triggers before printing the grid| **Event:** *beforePrint* <br><br> `<EJ.Grid beforePrint={beforePrint}>` <br> `</EJ.Grid>`<br> `function beforePrint (args){}` | **Event:** *beforePrint* <br><br> `<GridComponent beforePrint ={beforePrint}>` <br>`</GridComponent>`<br>`function beforePrint (args){}`

## Scrolling

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Get ScrollObject | **Method:** *getScrollObject()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getScrollObject();`| **Property:** *grid.scrollModule* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `var scrollObj = this.gridInstance.scrollModule;`

## PrimaryKey

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Set PrimaryKey Column | **Property:** *columns.isPrimaryKey* <br><br>`var columns = [`<br>`{ field: "OrderID",`<br>`isPrimaryKey={true}}]`<br>`<EJ.Grid columns={columns}>`<br>`</EJ.Grid>`| **Property:** *columns.isPrimaryKey* <br><br>`<GridComponent>`<br> `<ColumnsDirective>`<br>`<ColumnDirective field='OrderID' isPrimaryKey={true}/>`<br>`<ColumnDirective field='ShipCountry' />`<br>`</ColumnsDirective>`<br>`</GridComponent>`|
|Get the PrimaryKey fieldnames | **Method:** *getPrimaryKeyFieldNames()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getPrimaryKeyFieldNames();`| **Method:** <br>*getPrimaryKeyFieldNames()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getPrimaryKeyFieldNames();`

## Grid

|Behavior | API in Essential JS 1 | API in Essential JS 2 |
|--------- | ----------- | ----------- |
|Get the Browser Details| **Method:** *getBrowserDetails()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getBrowserDetails();`| In Essential JS 2, it can be <br>achieved by using `Browser` class of `ej2-base`
|Set dimension for the grid | **Method:** *setDimension(height, width)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.setDimension(300,400);`| Not Applicable
|set maximum width for mobile | **Method:** *setPhoneModeMaxWidth(value)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.setPhoneModeMaxWidth(500);`| Not Applicable
|Render the grid| **Method:** *render()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.render();`| **Method:** *render()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.render();`
|Reset the model collections like pageSettings, <br>groupSettings, filterSettings, sortSettings and summaryRows.| **Method:** *resetModelCollections()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.resetModelCollections();`| Not Applicable
|Destroy the grid| **Method:** *destroy()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.destroy();`| **Method:** *destroy()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.destroy()`
|Get Content Element| **Method:** *getContent()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getContent();`| **Method:** *getContent()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getContent();`
|Get Content Table | **Method:** *getContentTable()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getContentTable();`| **Method:** *getContentTable()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getContentTable();`
|Get Current View Data | **Method:** *getCurrentViewData()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getCurrentViewData();`| **Method:** *getCurrentViewRecords()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getCurrentViewRecords();`
|Get Data Row| **Method:** *getDataByIndex(rowIndex)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getDataByIndex(0);`| **Method:** *getDataRows()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getDataRows();`
|Get Fieldname by using the headertext| **Method:** *getFieldNameByHeaderText(headerText)* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getFieldNameByHeaderText("Order ID");`| Not Applicable
|Get FooterContent | **Method:** *getFooterContent()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getFooterContent();`| **Method:** *getFooterContent()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getFooterContent();`
|Get FooterContent Table | **Method:** *getFooterTable()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getFooterTable();`| **Method:** *getFooterContentTable()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getFooterContentTable();`
|Get HeaderContent | **Method:** *getHeaderContent()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getHeaderContent();`| **Method:** *getHeaderContent()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getHeaderContent();`
|Get HeaderContent Table | **Method:** *getHeaderTable()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.getHeaderTable();`| **Method:** *getHeaderTable()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.getHeaderTable();`
|Refresh Content| **Method:** *refreshContent()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.refreshContent();`| **Method:**<br> *contentModule.refreshContentRows()* <br><br> `<GridComponent ref={ grid =>`<br>`this.gridInstance = grid}>`<br>`</GridComponent>` <br> `this.gridInstance.`<br>`contentModule.refreshContentRows();`
|Refresh Data| **Method:** *refreshData()* <br><br> `<EJ.Grid dataSource={window.gridData}>`<br> `</EJ.Grid>` <br> `var gridObj = $(".e-grid")`<br>`.ejGrid("instance");` <br> `gridObj.refreshData();`| Not Applicable
|Triggers every time a request is <br>made to access particular cell <br>information, element and data| **Event:** *queryCellInfo* <br><br> `<EJ.Grid queryCellInfo={queryCellInfo}>`<br> `</EJ.Grid>`<br> `function queryCellInfo (args){}` | **Event:** *queryCellInfo* <br><br> `<GridComponent queryCellInfo ={queryCellInfo}>` <br>`</GridComponent>`<br>`function queryCellInfo (args){}`
|Triggers every time a request is <br>made to access row information, <br>element and data| **Event:** *rowDataBound* <br><br> `<EJ.Grid rowDataBound={rowDataBound}>`<br> `</EJ.Grid>` <br> `function rowDataBound (args){}` | **Event:** *rowDataBound* <br><br> `<GridComponent rowDataBound ={rowDataBound}>` <br>`</GridComponent>`<br>`function rowDataBound (args){}`
|Triggers for every grid <br>action before it get started| **Event:** *actionBegin* <br><br> `<EJ.Grid actionBegin={actionBegin}>`<br> `</EJ.Grid>` <br> `function actionBegin (args){}` | **Event:** *actionBegin* <br><br> `<GridComponent actionBegin ={actionBegin}>` <br>`</GridComponent>`<br>`function actionBegin (args){}`
|Triggers for every grid <br>action success event| **Event:** *actionComplete* <br><br> `<EJ.Grid actionComplete={actionComplete}>`<br> `</EJ.Grid>` <br> `function actionComplete (args){}` | **Event:** *actionComplete* <br><br> `<GridComponent actionComplete ={actionComplete}>` <br>`</GridComponent>`<br>`function actionComplete (args){}`
|Triggers for every grid <br>server failure event| **Event:** *actionFailure* <br><br> `<EJ.Grid actionFailure={actionFailure}>`<br> `</EJ.Grid>` <br> `function actionFailure (args){}` | **Event:** *actionFailure* <br><br> `<GridComponent actionFailure ={actionFailure}>` <br>`</GridComponent>`<br>`function actionFailure (args){}`
|Triggers when the grid is bound <br>with data during rendering| **Event:** *dataBound* <br><br> `<EJ.Grid dataBound={dataBound}>`<br> `</EJ.Grid>` <br> `function dataBound (args){}`| **Event:** *dataBound* <br><br> `<GridComponent dataBound ={dataBound}>` <br>`</GridComponent>`<br>`function dataBound (args){}`
|Triggers when the grid is<br>going to destroy| **Event:** *destroy* <br><br> `<EJ.Grid destroy={destroy}>`<br> `</EJ.Grid>` <br> `function destroy (args){}`| **Event:** *destroyed* <br><br> `<GridComponent destroyed ={destroyed}>` <br>`</GridComponent>`<br>`function destroyed (args){}`
|Triggers when initial load of the grid| **Event:** *load* <br><br> `<EJ.Grid load={load}>`<br> `</EJ.Grid>` <br> `function load (args){}`| **Event:** *load* <br><br> `<GridComponent load ={load}>` <br>`</GridComponent>`<br>`function load (args){}`
|Triggers when the grid is rendered completely| **Event:** *create* <br><br> `<EJ.Grid create={create}>`<br> `</EJ.Grid>` <br> `function create (args){}` | **Event:** *created* <br><br> `<GridComponent created ={created}>` <br>`</GridComponent>`<br>`function created (args){}`
|Triggers when the record is clicked| **Event:** *recordClick* <br><br> `<EJ.Grid recordClick={recordClick}>`<br> `</EJ.Grid>` <br> `function recordClick (args){}`| Not Applicable
|Triggers when right clicked on grid element| **Event:** *rightClick* <br><br> `<EJ.Grid rightClick={rightClick}>`<br> `</EJ.Grid>` <br> `function rightClick (args){}`| Not Applicable
|Triggers when the <br>record is double clicked| **Event:** *recordDoubleClick* <br><br> `<EJ.Grid recordDoubleClick={recordDoubleClick}>` <br> `</EJ.Grid>`<br> `function recordDoubleClick (args){}`| **Event:** *recordDoubleClick* <br><br> `<GridComponent recordDoubleClick ={recordDoubleClick}>` <br>`</GridComponent>`<br>`function recordDoubleClick (args){}`