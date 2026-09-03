import { useState, useEffect, useRef } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { syncfusionCatalog, SyncfusionA2UIProvider } from '@syncfusion/ej2-react-a2ui';
import { MessageProcessor } from '@a2ui/web_core/v0_9';
import type { SurfaceModel } from '@a2ui/web_core/v0_9';
import type { ReactComponentImplementation } from '@a2ui/react/v0_9';
import './App.css';

const GRID_MESSAGES = [
    {
        version: 'v0.9' as const,
        createSurface: { surfaceId: 'surface-1', catalogId: 'syncfusion-a2ui-catalog' },
    },
    {
        version: 'v0.9' as const,
        updateComponents: {
            surfaceId: 'surface-1',
            components: [
                { id: 'root', component: 'Column', gap: '16px', padding: '24px', children: ['grid1'] },
                {
                    id: 'grid1',
                    component: 'SyncfusionDataGrid',
                    width: '100%',
                    height: '320px',
                    dataSource: { path: '/rows' },
                    allowPaging: true,
                    pageSettings: { pageSize: 5 },
                    allowSorting: true,
                    columns: [
                        { field: 'id', headerText: 'Employee ID', width: 140 },
                        { field: 'name', headerText: 'Name', width: 180 },
                        { field: 'department', headerText: 'Department', width: 160 },
                    ],
                },
            ],
        },
    },
    {
        version: 'v0.9' as const,
        updateDataModel: {
            surfaceId: 'surface-1',
            path: '/rows',
            value: [
                { id: 'EMP001', name: 'Emma Johnson', department: 'Engineering' },
                { id: 'EMP002', name: 'James Wilson', department: 'Sales' },
            ],
        },
    },
];

function App() {
    const [surface, setSurface] = useState<SurfaceModel<ReactComponentImplementation> | null>(null);

    const processor = useRef(
        new MessageProcessor<ReactComponentImplementation>([syncfusionCatalog]),
    ).current;

    useEffect(() => {
        const sub = processor.onSurfaceCreated(setSurface);
        return () => sub.unsubscribe();
    }, [processor]);

    const renderGrid = () => processor.processMessages(GRID_MESSAGES);

    return (
        <div>
            {!surface && (
                <ButtonComponent onClick={renderGrid}>Render Employee Grid</ButtonComponent>
            )}
            {surface && <SyncfusionA2UIProvider surface={surface} />}
        </div>
    );
}
export default App