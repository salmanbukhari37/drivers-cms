import React from 'react'
import { Table } from 'reactstrap';

function ScheduleTable({data}) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Staff Code</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Capacity</th>
                    <th>P-Time</th>
                    <th>Job Area</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {data?.map(({staff_no, fullname, designation, capacity, job_area, location_tmp}) => {
                    return (
                        <tr>
                            <td>{staff_no}</td>
                            <td>{fullname}</td>
                            <td>{designation}</td>
                            <td>{capacity}</td>
                            <td>P-Time</td>
                            <td>{job_area}</td>
                            <td>{location_tmp}</td>
                        </tr>
                    );
                })}
            </tbody>
            </Table>
    )
}

export default ScheduleTable
