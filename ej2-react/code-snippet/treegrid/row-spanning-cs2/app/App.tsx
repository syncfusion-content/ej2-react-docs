
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ColumnDirective,
  ColumnsDirective,
  TreeGridComponent,
  Inject,
  Page,
  Freeze,
} from "@syncfusion/ej2-react-treegrid";
import { rowSpanData } from "./datasource";

function App() {
  return (<div className='control-pane'>
    <div className='control-section'>
    <TreeGridComponent
          dataSource={rowSpanData}
          enableHover={false}
          allowSelection={false}
          allowPaging={true}
          pageSettings={{ pageSizeMode: "All", pageSize: 18 }}
          rowHeight={50}
          gridLines="Both"
          enableRowSpan={true}
          height={315}
          childMapping="children"
          treeColumnIndex={0}
          clipMode="EllipsisWithTooltip"
        >
          <ColumnsDirective>
            <ColumnDirective
              field="activityName"
              headerText="Phase Name"
              width="250"
              freeze="Left"
            ></ColumnDirective>
            <ColumnDirective
              headerText="Schedule"
              textAlign="Center"
              columns={[
                {
                  field: "startDate",
                  headerText: "Start Date",
                  type: "date",
                  format: "MM/dd/yyyy",
                  width: 140,
                  textAlign: "Center",
                },
                {
                  field: "endDate",
                  headerText: "End Date",
                  type: "date",
                  format: "MM/dd/yyyy",
                  width: 140,
                  textAlign: "Center",
                },
              ]}
            ></ColumnDirective>
            <ColumnDirective
              headerText="Work Status"
              textAlign="Center"
              columns={[
                {
                  field: "status",
                  headerText: "Status",
                  width: 180,
                  textAlign: "Center",
                },
              ]}
            ></ColumnDirective>
            <ColumnDirective
              headerText="Compliance"
              textAlign="Center"
              columns={[
                {
                  field: "permitStatus",
                  headerText: "Permit Status",
                  width: 160,
                  textAlign: "Center",
                },
                {
                  field: "inspectionDate",
                  headerText: "Inspection Date",
                  width: 180,
                  type: "date",
                  format: "MM/dd/yyyy",
                  textAlign: "Center",
                },
                {
                  field: "inspectionStatus",
                  headerText: "Inspection Status",
                  width: 180,
                  textAlign: "Center",
                },
                {
                  field: "punchListStatus",
                  headerText: "Punch List Status",
                  width: 180,
                  textAlign: "Center",
                },
              ]}
            ></ColumnDirective>
            <ColumnDirective
              headerText="Personnel"
              textAlign="Center"
              columns={[
                { field: "supervisor", headerText: "Supervisor", width: 180 },
                { field: "team", headerText: "Crew", width: 200 },
              ]}
            ></ColumnDirective>
            <ColumnDirective
              headerText="Materials"
              textAlign="Center"
              columns={[
                {
                  field: "materialUsed",
                  headerText: "Materials Used",
                  width: 180,
                  textAlign: "Center",
                },
                {
                  field: "materialCost",
                  headerText: "Material Cost",
                  width: 140,
                  format: "C2",
                  textAlign: "Right",
                  enableRowSpan: false,
                },
              ]}
            ></ColumnDirective>
            <ColumnDirective
              headerText="Cost Summary"
              textAlign="Center"
              columns={[
                {
                  field: "totalBudget",
                  headerText: "Planned Budget",
                  width: 140,
                  format: "C2",
                  textAlign: "Center",
                  enableRowSpan: false,
                },
                {
                  field: "paidToDate",
                  headerText: "Actual Spend",
                  width: 140,
                  format: "C2",
                  textAlign: "Center",
                  enableRowSpan: false,
                },
              ]}
            ></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Freeze, Page]} />
        </TreeGridComponent>
      </div>
    </div>
  );
};
export default App;


