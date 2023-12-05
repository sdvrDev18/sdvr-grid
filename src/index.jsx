import React, { Component } from "react";
import GridComponent from "./Grid/GridComponent";
import "./index.css";

const App = props => {
  const gridRef = React.useRef(null);
  return (
    <div className="main-section">
      <GridComponent
        ref={gridRef}
        rowData={props.rowData}
        columnHeaders={props.columnHeaders}
        checkbox={props.checkbox}
        collapsible={props.collapsible}
        collapseArea={props.collapseArea}
        filter={props.filter}
        paginationType={props.paginationType}
        handleServersidePagination={props.handleServersidePagination}
        rowsPerPage={props.rowsPerPage}
      />
    </div>
  );
};

export default App;
