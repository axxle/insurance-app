import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Container from "@material-ui/core/Container";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";

export default function ClientEditDialog(props) {
    let [selectedDate, setSelectedDate] = React.useState(new Date() /*new Date("2014-08-18T21:11:54")*/);

    let handleDateChange = date => {
        setSelectedDate(date);
    };

    let handleSave = () => {
        props.setIsOpen(false);
    };

    let handleClose = () => {
        props.setIsOpen(false);
    };

    return (
        <div>
            <Dialog
                open={props.isOpen}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth="lg"
            >
                <DialogTitle id="form-dialog-title">Клиент</DialogTitle>
                <DialogContent>
                    <Container>
                        <TextField
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
                    </Container>
                    <Container>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                autoOk={true}
                                disableToolbar
                                variant="inline"
                                format="dd.MM.yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                value={selectedDate}
                                label="Дата рождения"
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    "aria-label": "change date"
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Container>
                    <Container>
                        <TextField
                            margin="dense"
                            id="passportSeries"
                            label="Паспорт Серия"
                            type="text"
                        />
                        <span> </span>
                        <TextField
                            margin="dense"
                            id="passportNumber"
                            label="Номер"
                            type="text"
                        />
                    </Container>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave} color="primary">
                        Сохранить
                    </Button>
                    <Button onClick={handleClose} color="default">
                        Отменить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
