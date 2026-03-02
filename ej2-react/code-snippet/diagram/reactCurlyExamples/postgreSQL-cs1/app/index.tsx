
{% raw %}

import { useEffect, useState } from 'react';
import {
  DiagramComponent,
  Inject,
  HierarchicalTree,
  DataBinding,
  Node,
  Connector
} from '@syncfusion/ej2-react-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
import type { LayoutNode } from '../types/layout.types';
import { fetchLayoutData } from '../services/layoutService';

const OrganizationalLayout = () => {
  // State management for data, loading, and error states
  const [data, setData] = useState<LayoutNode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data when component mounts
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // Call service layer to fetch data from backend
        const layoutData = await fetchLayoutData();
        setData(layoutData);
        setError(null);
      } catch (err) {
        // Handle fetch errors gracefully
        const errorMessage = err instanceof Error 
          ? err.message 
          : 'Failed to load diagram data';
        setError(errorMessage);
        console.error('Error loading layout data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []); // Empty dependency array - runs once on mount

  // Show loading message while fetching data
  if (loading) {
    return <div>Loading diagram...</div>;
  }

  // Show error message if fetch failed
  if (error) {
    return (
      <div>
        <h3>Error Loading Diagram</h3>
        <p>{error}</p>
      </div>
    );
  }

  // Render diagram once data is loaded
  return (
    <DiagramComponent
      id="diagram"
      width="100%"
      height="700px"
      
      // Data binding configuration
      dataSourceSettings={{
        id: 'id',                           // Field name for unique identifier
        parentId: 'parent_id',              // Field name for parent reference
        dataSource: new DataManager(data)   // Wrap data with `DataManager`
      }}
      
      // Layout algorithm configuration
      layout={{
        type: 'OrganizationalChart',  // Use org chart layout
        horizontalSpacing: 50,        // Horizontal gap between nodes
        verticalSpacing: 50           // Vertical gap between levels
      }}
      
      // Customize default node appearance
      getNodeDefaults={(node: Node) => {
        node.width = 100;
        node.height = 40;
        node.shape = { type: 'Basic', shape: 'Rectangle' };
        node.style = { fill: '#6BA5D7', strokeColor: '#6BA5D7' };
        
        // Add text annotation showing the role field
        node.annotations = [{
          content: (node.data as LayoutNode).role,
          style: { color: 'white' }
        }];
        return node;
      }}
      
      // Customize default connector appearance
      getConnectorDefaults={(connector: Connector) => {
        connector.type = 'Orthogonal';  // 90-degree angle connectors
        connector.targetDecorator = { 
          shape: 'Arrow', 
          width: 10, 
          height: 10 
        };
        connector.style = { strokeColor: '#6BA5D7' };
        return connector;
      }}
    >
      <Inject services={[HierarchicalTree, DataBinding]} />
    </DiagramComponent>
  );
};

export default OrganizationalLayout;

{% endraw %}