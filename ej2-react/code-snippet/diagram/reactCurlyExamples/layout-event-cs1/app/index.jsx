{% raw %}

  function dataLoaded(args) {
    //we can get diagram instance in args.
    console.log(args);
  }
  <DiagramComponent id="diagram" width={'100%'} height={'600px'}
      nodes={nodes} connectors={connectors}
      // Event Triggers when the state of the layout rendering changes
      dataLoaded={dataLoaded}
      //Uses layout to auto-arrange nodes on the diagram page
      layout={{
          //Sets layout type
          type: 'HierarchicalTree',
      }}>
      {/* Inject necessary services for the diagram */}
      <Inject services={[HierarchicalTree]} />
  </DiagramComponent>

{% endraw %}