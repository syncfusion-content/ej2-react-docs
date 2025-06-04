import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';
import { useRef, useState } from 'react';

// Define the prop type for DashboardItem
type DashboardItemProps = {
    title: string;
};

function DashboardItem({ title }: DashboardItemProps) {
    return (
        <div>
            <p>{title}</p>
        </div>
    );
}

// Define the panel type
type Panel = {
    id: string;
    content: React.ReactNode;
    row: number;
    col: number;
    sizeX: number;
    sizeY: number;
};

function App() {
    const dashboardObj = useRef<DashboardLayoutComponent>(null);
    const cellSpacing: [number, number] = [5, 5];

    const [panels, setPanels] = useState<Panel[]>([
        {
            id: 'one',
            content: <DashboardItem title="Panel 1" />,
            row: 0,
            col: 0,
            sizeX: 1,
            sizeY: 1,
        },
        {
            id: 'two',
            content: <DashboardItem title="Panel 2" />,
            row: 0,
            col: 1,
            sizeX: 1,
            sizeY: 1,
        },
    ]);

    const removePanel = (id: string) => {
        setPanels((prevPanels) => prevPanels.filter((panel) => panel.id !== id));
    };

    return (
        <div>
            <div id="default_target" className="control-section">
                <DashboardLayoutComponent
                    id="default_dashboard"
                    columns={5}
                    ref={dashboardObj}
                    cellSpacing={cellSpacing}
                    allowResizing={true}
                >
                    {panels.map((panel) => (
                        <div
                            key={panel.id}
                            id={panel.id}
                            className="e-panel"
                            data-row={panel.row}
                            data-col={panel.col}
                            data-sizex={panel.sizeX}
                            data-sizey={panel.sizeY}
                        >
                            <span
                                className="e-close-icon e-clear-icon"
                                onClick={() => removePanel(panel.id)}
                            />
                            <div className="e-panel-container">{panel.content}</div>
                        </div>
                    ))}
                </DashboardLayoutComponent>
            </div>
        </div>
    );
}
export default App;
