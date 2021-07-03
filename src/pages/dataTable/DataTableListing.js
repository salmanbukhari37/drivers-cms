import React from 'react'
import DataTable from "react-data-table-component";

function DataTableListing({title, data, columns}) {
    return (
        <DataTable
            highlightOnHover
            pointerOnHover
            striped
            title={title}
            columns={columns}
            data={data}
            defaultSortField="title"
            pagination
        />
    )
}

DataTableListing.defaultProps = {
    title: "Listing",
}

export default DataTableListing
