{% raw %}

function handleLayoutUpdated(args){
        if (args.state === 'Started') {
            console.log('Layout started rendering');
        }
}

<DiagramComponent id="diagram" width={'100%'} height={'550px'}
    nodes={nodes} connectors={connectors}
    layout={{ type: 'HierarchicalTree'}}
    // Event Triggers when the state of the layout rendering changes
    layoutUpdated={handleLayoutUpdated}>
    {/* Inject necessary services for the diagram */}
    <Inject services={[HierarchicalTree]} />
</DiagramComponent>

{% endraw %}