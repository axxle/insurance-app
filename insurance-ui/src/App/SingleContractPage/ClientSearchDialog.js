import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container";
import { DialogContentText } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function ClientSearchDialog(props) {

    const handleSelect = () => {
        console.log("777");
        props.selectClient({clientId: 777, firstName: "Иван", lastName: "Сидоров", parentName: "Отчество"});
        props.setIsOpen(false);
    };

    const handleAddNew = () => {
        props.handleOpenAddNewDialog();
    };

    const handleClose = () => {
        props.setIsOpen(false);
    };

    return (
        <div>
            <Dialog
                open={props.isOpen}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth="1000"
            >
                <DialogTitle id="form-dialog-title">Выбор клиента</DialogTitle>
                <DialogContent>
                    <Container>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="lastName"
                            label="(Фамилия)"
                            type="text"
                        />
                        <span> </span>
                        <TextField
                            margin="dense"
                            id="firstName"
                            label="(Имя)"
                            type="text"
                        />
                        <span> </span>
                        <TextField
                            margin="dense"
                            id="parentName"
                            label="(Отчество)"
                            type="text"
                        />
                        <IconButton color="primary" aria-label="Поиск">
                            <SearchIcon />
                        </IconButton>
                    </Container>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">ФИО</TableCell>
                                    <TableCell align="center">Дата рождения</TableCell>
                                    <TableCell align="center">Паспортные данные</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">Иванов Иван Иванович</TableCell>
                                    <TableCell align="center">28.07.1988</TableCell>
                                    <TableCell align="center">8008 500500</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <DialogContentText align="center">
                        Нет подходящих записей
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSelect} color="primary">
                        Выбрать
                    </Button>
                    <Button onClick={handleAddNew} color="default">
                        Новый
                    </Button>
                    <Button onClick={handleClose} color="second">
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
