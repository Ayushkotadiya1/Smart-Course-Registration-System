import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from '@mui/material/TablePagination';
import Paper from "@mui/material/Paper";
import SearchBar from "material-ui-search-bar";
import Adminhero from '../component/Adminhero'

const AdminCourseTable = () => {
    // const [row, setRow] = useState(events)
    // const [pg, setpg] = useState(0);
    // const [rpg, setrpg] = useState(10);
    // const [searched, setSearched] = useState("");

    // for sorting category list descending order(to see recent event first)

    // events.sort((a, b) => new Date(b.date) - new Date(a.date))
    // useEffect(() => {
    //     setRow(events);
    // }, [events]);

    // const requestSearch = (searchedVal) => {
    //     const filteredRows = events.filter((event) => {
    //         return event.eventName.toLowerCase().includes(searchedVal.toLowerCase());
    //     });
    //     setRow(filteredRows);
    // };

    // const cancelSearch = () => {
    //     setSearched("");
    //     requestSearch(searched);
    // };

    // function handleChangePage(event, newpage) {
    //     setpg(newpage);
    // }

    // function handleChangeRowsPerPage(event) {
    //     setrpg(parseInt(event.target.value, 10));
    //     setpg(0);
    // }
    return (
        <>
            <Adminhero pageName={'Course'} />
            <div className="container mb-5">
                <div className='w-100'>
                    <button className='btn btn-primary'>Add Course</button>
                </div>
                <div className="table">
                    <Paper>
                        {/* <SearchBar
                            value={searched}
                            onChange={(searchVal) => requestSearch(searchVal)}
                            onCancelSearch={() => cancelSearch()}
                        /> */}
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Image</TableCell>
                                        <TableCell>Start Date</TableCell>
                                        <TableCell>Total seat</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Location</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                {/* <TableBody>
                                    {row.length === 0 ? <TableCell>No event availabel please add event</TableCell> :
                                        row && row.slice(pg * rpg, pg * rpg + rpg).map((event, index) => {
                                            return <Eventitem showAlert={showAlert} index={index} event={event} key={event._id} updateEvent={updateEvent} handledeleteEvent={handledeleteEvent} />
                                        })}
                                </TableBody> */}
                            </Table>
                        </TableContainer>
                        {/* <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={row.length}
                            rowsPerPage={rpg}
                            page={pg}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        /> */}
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default AdminCourseTable
