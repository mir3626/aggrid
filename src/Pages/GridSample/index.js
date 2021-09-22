import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { AllModules } from '@ag-grid-enterprise/all-modules';
import { Icon } from 'antd';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridSample = () => {

    const gridOptions = {
        resizable: true,
        movable: true,
        sortable: true,
        // domLayout: 'autoHeight',
        // suppressRowTransform: true,
    };

    const sample = [
        { no: 911, make: "Toyota", model: "Celica0", price: 15000, path: "Toyota" },
        { no: 911, make: "Toyota", model: "Celica1", price: 15000, path: "Toyota|Celica1" },
        { no: 911, make: "Toyota", model: "Celica2", price: 15000, path: "Toyota|Celica2" },
        { no: 911, make: "Toyota", model: "Celica3", price: 15000, path: "Toyota|Celica3" },
        { no: 899, make: "Ford", model: "Mondeo0", price: 42000, path: "Ford" },
        { no: 899, make: "Ford", model: "Mondeo1", price: 42000, path: "Ford|Mondeo1" },
        { no: 899, make: "Ford", model: "Mondeo2", price: 52000, path: "Ford|Mondeo2" },
        { no: 899, make: "Ford", model: "Mondeo3", price: 62000, path: "Ford|Mondeo3" },
        { no: 899, make: "Ford", model: "Mondeo4", price: 72000, path: "Ford|Mondeo4" },
        { no: 893, make: "Porsche", model: "Boxter0", price: 82000, path: "Porsche" },
        { no: 893, make: "Porsche", model: "Boxter1", price: 82000, path: "Porsche|Boxter1" },
        { no: 893, make: "Porsche", model: "Boxter2", price: 90000, path: "Porsche|Boxter2" },
        { no: 893, make: "Porsche", model: "Boxter3", price: 102000, path: "Porsche|Boxter3" },
        { no: 893, make: "Porsche", model: "Boxter4", price: 112000, path: "Porsche|Boxter4" },
        { no: 893, make: "Porsche", model: "Boxter5", price: 122000, path: "Porsche|Boxter5" },
        { no: 893, make: "Porsche", model: "Boxter6", price: 132000, path: "Porsche|Boxter6" },
    ];

    const [rowData, setRowData] = useState(sample);

    const columnDef = [
        {
            headerName: 'No',
            field: 'no',
            width: 80,
            minWidth: 80,
            pinned: 'left',
            // lockPosition: true,
            onCellClicked: (grid) => {
                console.log(grid);
            },
            cellRendererFramework: (grid) => {

                const data = grid.data;
                let value = '';
                if (grid.node.allChildrenCount && grid.node.allChildrenCount > 0) {
                    value = Object(data).hasOwnProperty('no') ? data.no : '';
                } else {
                    value = '';
                }

                return value;
            },
        },
        {
            headerName: '메이커',
            field: 'make',
            width: 180,
            minWidth: 180,
            hide: true,
        },
        {
            headerName: '모델',
            field: 'model',
            width: 180,
            minWidth: 180,
        },
        {
            headerName: '가격',
            field: 'price',
            width: 180,
            minWidth: 180,
        },
    ]




    const patse = [
        { make: "Toyota", model: "붙이기1", price: 25000 },
        { make: "Toyota", model: "붙이기2", price: 25000 },
        { make: "Toyota", model: "붙이기3", price: 25000 },
    ];

    const [gridApi, setGridApi] = useState(null);

    return (
        <>
            <div className="ag-theme-alpine" style={{ height: 800, width: 1200 }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDef}
                    onGridReady={(grid) => {
                        setGridApi(grid);
                        console.log(grid);
                        // grid.columnApi.moveColumn("no", 0);
                        //api.api.sizeColumnsToFit();
                    }}
                    gridOptions={gridOptions}
                    defaultColDef={{ flex: 1 }}
                    autoGroupColumnDef={{ headerName: '메이커', field: "make" }}
                    treeData={true}
                    animateRows={true}
                    groupDefaultExpanded={0}
                    getDataPath={function (data) {
                        return data.path.split('|');
                    }}
                    modules={AllModules}
                >
                </AgGridReact>
            </div>
        </>
    );
};

export default GridSample;