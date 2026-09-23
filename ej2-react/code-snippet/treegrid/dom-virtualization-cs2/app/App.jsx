import * as React from 'react';
import { useEffect } from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Sort, DomVirtualization } from '@syncfusion/ej2-react-treegrid';
import { domVirtualizationData, domVirtualizationDataSource } from './datasource';
import './dom-virtualization.css';
function App() {
    const statusTemplate = (args) => {
        const status = (args.StockStatus || '').toLowerCase();
        let cssClass = 'rg-badge-stock-available';
        if (status.indexOf('discontinued') === 0) {
            cssClass = 'rg-badge-stock-discontinued';
        }
        else if (status.indexOf('low stock') === 0) {
            cssClass = 'rg-badge-stock-low';
        }
        else if (status.indexOf('out of stock') === 0) {
            cssClass = 'rg-badge-stock-out';
        }
        return (<div className={`rg-badge ${cssClass}`}>
            {args.StockStatus}
        </div>);
    };
    const regionTemplate = (args) => {
        const country = args.Country || args.Region || '';
        const region = args.ItemType === 'Warehouse'
            ? country
            : args.Region;
        let flagSvg;
        switch (country) {
            case 'United States':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                    <rect width="20" height="14" fill="#B22234" />
                    <rect y="0" width="20" height="2" fill="#fff" />
                    <rect y="4" width="20" height="2" fill="#fff" />
                    <rect y="8" width="20" height="2" fill="#fff" />
                    <rect y="12" width="20" height="2" fill="#fff" />
                    <rect width="8" height="8" fill="#3C3B6E" />
                </svg>);
                break;
            case 'Canada':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                    <rect width="20" height="14" fill="#fff" />
                    <rect width="5" height="14" fill="#D52B1E" />
                    <rect x="15" width="5" height="14" fill="#D52B1E" />
                    <path d="M10,5 L10.5,7 L9,7.5 L10.5,8 L10,10 L11,8.5 L12,10 L11.5,8 L13,7.5 L11.5,7 L12,5 L11,6.5 Z" fill="#D52B1E" />
                </svg>);
                break;
            case 'United Kingdom':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                    <rect width="20" height="14" fill="#012169" />
                    <path d="M0 0L20 14M20 0L0 14" stroke="#FFF" strokeWidth="3" />
                    <path d="M10 0V14M0 7H20" stroke="#FFF" strokeWidth="4" />
                    <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2" />
                </svg>);
                break;
            case 'France':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                    <rect width="7" height="14" fill="#0055A4" />
                    <rect x="7" width="6" height="14" fill="#FFF" />
                    <rect x="13" width="7" height="14" fill="#EF4135" />
                </svg>);
                break;
            case 'Australia':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                    <rect width="20" height="14" fill="#012169" />
                    <circle cx="15" cy="10" r="1" fill="#fff" />
                    <circle cx="13" cy="8" r="0.8" fill="#fff" />
                    <circle cx="17" cy="8" r="0.8" fill="#fff" />
                </svg>);
                break;
            case 'Japan':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                    <rect width="20" height="14" fill="#fff" />
                    <circle cx="10" cy="7" r="4" fill="#BC002D" />
                </svg>);
                break;
            case 'Germany':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                    <rect width="20" height="4.67" fill="#000" />
                    <rect y="4.67" width="20" height="4.67" fill="#DD0000" />
                    <rect y="9.34" width="20" height="4.66" fill="#FFCE00" />
                </svg>);
                break;
            case 'Singapore':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                    <rect width="20" height="7" fill="#EF3340" />
                    <rect y="7" width="20" height="7" fill="#FFF" />
                    <circle cx="6" cy="4" r="2.2" fill="#FFF" />
                    <circle cx="7" cy="4" r="1.7" fill="#EF3340" />
                </svg>);
                break;
            case 'Brazil':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14">
                    <rect width="20" height="14" fill="#009B3A" />
                    <polygon points="10,2 17,7 10,12 3,7" fill="#FFDF00" />
                    <circle cx="10" cy="7" r="2.5" fill="#002776" />
                </svg>);
                break;
            case 'Netherlands':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14">
                    <rect width="20" height="4.67" fill="#AE1C28" />
                    <rect y="4.67" width="20" height="4.67" fill="#FFFFFF" />
                    <rect y="9.34" width="20" height="4.66" fill="#21468B" />
                </svg>);
                break;
            case 'South Korea':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14">
                    <rect width="20" height="14" fill="#FFFFFF" />
                    <circle cx="10" cy="7" r="2.2" fill="#CD2E3A" />
                </svg>);
                break;
            case 'Switzerland':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14">
                    <rect width="20" height="14" fill="#D52B1E" />
                    <rect x="8" y="3" width="4" height="8" fill="#FFFFFF" />
                    <rect x="6" y="5" width="8" height="4" fill="#FFFFFF" />
                </svg>);
                break;
            case 'Sweden':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14">
                    <rect width="20" height="14" fill="#006AA7" />
                    <rect x="6" width="2" height="14" fill="#FECC00" />
                    <rect y="6" width="20" height="2" fill="#FECC00" />
                </svg>);
                break;
            case 'Italy':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14">
                    <rect width="7" height="14" fill="#009246" />
                    <rect x="7" width="6" height="14" fill="#FFFFFF" />
                    <rect x="13" width="7" height="14" fill="#CE2B37" />
                </svg>);
                break;
            case 'Spain':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14">
                    <rect width="20" height="14" fill="#AA151B" />
                    <rect y="3" width="20" height="8" fill="#F1BF00" />
                </svg>);
                break;
            case 'India':
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14">
                    <rect width="20" height="4.67" fill="#FF9933" />
                    <rect y="4.67" width="20" height="4.67" fill="#FFFFFF" />
                    <rect y="9.34" width="20" height="4.66" fill="#138808" />
                    <circle cx="10" cy="7" r="1.2" fill="none" stroke="#000080" strokeWidth="0.4" />
                </svg>);
                break;
            default:
                flagSvg = (<svg width="20" height="14" viewBox="0 0 20 14">
                    <rect width="20" height="14" fill="#6b7280" />
                </svg>);
        }
        return (<div className="rg-region">
            <span className="rg-region-flag">{flagSvg}</span>
            <span>{region}</span>
        </div>);
    };
    if (domVirtualizationData.length === 0) {
        domVirtualizationDataSource();
    }
    return (<div className='control-pane'>
        <div className='control-section'>

            <TreeGridComponent dataSource={domVirtualizationData} idMapping='ItemID' parentIdMapping='ParentItemID' treeColumnIndex={1} enableDomVirtualization={true} domVirtualizationSettings={{ rowBuffer: 20 }} height='400' rowHeight={50}>

                <ColumnsDirective>

                    <ColumnDirective field='ItemID' headerText='ID' width='110' textAlign='Right' isPrimaryKey={true} />

                    <ColumnDirective field='ItemName' headerText='Inventory Name' width='320' />

                    <ColumnDirective field='Category' headerText='Category' width='200' />

                    <ColumnDirective field='Region' headerText='Location' width='220' template={regionTemplate} />

                    <ColumnDirective field='Supplier' headerText='Supplier' width='240' />

                    <ColumnDirective field='StockStatus' headerText='Stock Status' width='180' template={statusTemplate} />

                    <ColumnDirective field='Quantity' headerText='Quantity' width='120' textAlign='Right' />

                    <ColumnDirective field='UnitPrice' headerText='Unit Price' width='130' textAlign='Right' format={{ format: 'C2', currency: 'USD' }} editType='numericedit' />

                </ColumnsDirective>

                <Inject services={[DomVirtualization, Sort]} />

            </TreeGridComponent>

        </div>
    </div>);
}
;
export default App;
