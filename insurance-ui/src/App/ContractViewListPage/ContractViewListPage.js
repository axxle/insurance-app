import React, {useState, useEffect} from "react";
import axios from 'axios';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.grey[500],
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.background.default
        }
    }
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700
    }
});

const selectedRowJumpRule = (savedOldValue, newValueForSave) => {
    if (savedOldValue === newValueForSave) {
        return null;
    }
    return newValueForSave;
};

export default function CustomizedTables(props) {
    const classes = useStyles();

    let [contractViews, setContractViews] = useState({loaded: false, list: null});
    useEffect(() => {
        axios.get("insurance/view/contracts/")
            .then(res => setContractViews({loaded: true, list: res.data}));
    }, []);

    let [selectedContractId, setSelectedContractId] = useState(null);

    let handleClickCreateContract = () => {
        props.openSingleContractPage();
    };

    let handleClickOpenContract = (contractId) => {
        console.log(contractId);
        props.openSingleContractPage();
    };

    if (!contractViews.loaded) {
        return <div>Загрузка...</div>
    }

    let contractViewList = contractViews.list.map((contractView) => {
            return <StyledTableRow key={contractView.contractId}
                                   hover
                                   role="checkbox"
                                   onClick={() => setSelectedContractId(selectedRowJumpRule(selectedContractId, contractView.contractId))}
                                   onDoubleClick={() => handleClickOpenContract(contractView.contractId)}
                                   selected={selectedContractId === contractView.contractId}>
                <StyledTableCell component="th" scope="row" align="center">
                    {contractView.contractNumber}
                </StyledTableCell>
                <StyledTableCell align="center">
                    {contractView.contractDate}
                </StyledTableCell>
                <StyledTableCell align="left">
                    {contractView.policyHolder}
                </StyledTableCell>
                <StyledTableCell align="right">
                    {contractView.insurancePremium}
                </StyledTableCell>
                <StyledTableCell align="center">
                    {contractView.policyDuration}
                </StyledTableCell>
            </StyledTableRow>
        }
    );

    return (
        <div className={classes.root}>
            <Button
                variant="contained"
                onClick={() => handleClickCreateContract}
            >Создать договор</Button>
            <span> </span>
            <Button
                variant="contained"
                color="primary"
                disabled={selectedContractId === null}
                onClick={() => handleClickOpenContract(selectedContractId)}
            >
                Открыть договор
            </Button>
            <br />
            <br />
            <Box display="flex" flexDirection="row" bgcolor="background.paper">
                <Box bgcolor="grey.300">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Серия-Номер</StyledTableCell>
                                    <StyledTableCell align="center">
                                        Дата заключения
                                    </StyledTableCell>
                                    <StyledTableCell align="center">Страхователь</StyledTableCell>
                                    <StyledTableCell align="center">Премия</StyledTableCell>
                                    <StyledTableCell align="center">
                                        Срок действия
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {contractViewList}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </div>
    );
}
