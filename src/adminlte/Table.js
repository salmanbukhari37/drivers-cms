import { Table as StrapTable } from 'reactstrap';

const Table = (props) => (
    <StrapTable {...props} className="small-table">
        { props.children }
    </StrapTable>
);

export default Table;