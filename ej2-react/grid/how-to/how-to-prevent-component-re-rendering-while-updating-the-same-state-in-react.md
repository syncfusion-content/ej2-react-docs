---
layout: post
title: React Grid – Prevent Unnecessary Re-render | Syncfusion
description: React Grid rendering optimization explains strategies to avoid unnecessary re‑renders, using memoization and key patterns to improve performance and efficiency.
control: Prevent React Component Re-Rendering on Same State Update
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Prevent React Component Re-Rendering on Same State Update

React components re-render whenever state is updated, even if the new value is identical to the previous one. To enhance performance and avoid unnecessary re-renders, React provides hooks such as `useCallback` and `useEffect` that help control when updates should trigger re-renders.

This implementation demonstrates a Master-Detail grid structure using the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid. The detail view is rendered in a separate grid, which displays information related to the selected record from the master grid. Selection is handled through row interactions, and updates are optimized using React `useCallback` hook.

Step 1: Optimize state updates with `useCallback`

The [rowSelecting](https://ej2.syncfusion.com/react/documentation/api/grid#rowselecting) event captures the selected row index, while the [rowSelected](https://ej2.syncfusion.com/react/documentation/api/grid#rowselected) event retrieves the corresponding data. Wrapping the `rowSelected` handler in `useCallback` ensures it only re-executes when the row index changes, preventing unnecessary updates. Refer to the code snippet below.

    ```typescript
        const [rowIdx, setRowIdx] = useState(null);
        const [record, setRecord] = useState(null);

        const rowSelecting = (args: any) => {
            setRowIdx(args.rowIndex);
        };

        const rowSelected = useCallback((args: any) => {
            setRecord(args.data);
        }, [rowIdx]);
    ```

Step 2: Bind filtered data to the Detail Grid using `useEffect`

After retrieving the selected record, the `useEffect` hook filters the detail data source based on a "CustomerName" field (e.g., "CustomerName") and binds the result to the Detail grid using the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource) property. This ensures the update occurs only when the selected record changes.

    ```typescript
        useEffect(()=>{
            let showCustomerName: HTMLElement = document.getElementById('CustomerName') as HTMLElement;
            if(props.detailRecord){
                showCustomerName.textContent = props.detailRecord.ContactName;
                detailGrid.dataSource = data.filter((record: any) => record.CustomerName === props.detailRecord.ContactName).slice(0, 5);
            }
        },[detailGrid, props.detailRecord]);
    ```

To display detail data during initial render, the [selectedRowIndex](https://ej2.syncfusion.com/react/documentation/api/grid#selectedrowindex) property of the Master grid can be used to preselect a specific row. This ensures the Detail grid is populated with relevant data on load.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/masterdetail-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/masterdetail-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="Detail.jsx" %}
{% include code-snippet/grid/masterdetail-cs1/app/Detail.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="Detail.tsx" %}
{% include code-snippet/grid/masterdetail-cs1/app/Detail.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/masterdetail-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/masterdetail-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/masterdetail-cs1" %}

 > To prevent unnecessary re-rendering, you can utilize the `useMemo` and `useCallback` hook.