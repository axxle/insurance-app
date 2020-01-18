import React, {useEffect} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import ClientSearchDialog from "./ClientSearchDialog";
import ClientAddNewDialog from "./ClientAddNewDialog";
import ClientEditDialog from "./ClientEditDialog";
import Container from "@material-ui/core/Container";
import axios from "axios";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const styles = {
    formControl: {
        margin: 0,
        fullWidth: true,
        backgroundColor: "#9ee",
        display: "flex",
        wrap: "nowrap"
    }
};

export default function SingleContractPage(props) {
    const classes = useStyles();

    let [selectedDate, setSelectedDate] = React.useState(new Date() /*new Date("2014-08-18T21:11:54")*/);
    let handleDateChange = date => {
        setSelectedDate(date);
    };

    const [age, setAge] = React.useState('');
    const handleChange = event => {
        setAge(event.target.value);
    };

    let [selectedClient, setSelectedClient] = React.useState({clientId: null});

    let [isOpenClientSearchDialog, setIsOpenClientSearchDialog] = React.useState(false);
    let [isOpenAddNewDialog, setIsOpenAddNewDialog] = React.useState(false);
    let [isOpenClientEditDialog, setIsOpenClientEditDialog] = React.useState(false);

    useEffect(() => {

    }, []);

    let handleOpenClientSearchDialog = () => {
        setIsOpenClientSearchDialog(true);
    }

    let handleOpenClientEditDialog = () => {
        console.log(selectedClient);
        setIsOpenClientEditDialog(true);
    }

    let handleOpenAddNewDialog = () => {
        setIsOpenClientSearchDialog(false);
        setIsOpenAddNewDialog(true);
    }

    let handleSaveContract = () => {
        console.log('handleSaveContract');
        props.returnToViewList();
    }

    let handleReturnToViewListPage = () => {
        console.log('handleReturnToViewListPage');
        props.returnToViewList();
    }

    //	 12 колонок
    //	 xs 	 sm		 md и lg			xl
    // >=0px   >=576px	 >=768px		  >=1200px

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={2}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="insuranceSum5"
                        label="Страховая сумма"
                        type="text"
                    />
                </Grid>
                <Grid item xs={12} lg={1}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            autoOk={true}
                            disableToolbar
                            variant="inline"
                            format="dd.MM.yyyy"
                            margin="dense"
                            id="policyStartDate"
                            value={selectedDate}
                            label="Срок действия с"
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                "aria-label": "change date"
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} lg={1}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            autoOk={true}
                            disableToolbar
                            variant="inline"
                            format="dd.MM.yyyy"
                            margin="dense"
                            id="policyEndDate"
                            value={selectedDate}
                            label="по"
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                "aria-label": "change date"
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>

                <Grid item xs={12} lg={8}>
                </Grid>

                <Grid item xs={12} lg={2}>
                    <FormControl required margin="dense" fullWidth={true}>
                        <InputLabel id="demo-simple-select-required-label">Тип недвижимости</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            autoWidth={true}
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"apartment"}>квартира</MenuItem>
                            <MenuItem value={"house"}>дом</MenuItem>
                            <MenuItem value={"room"}>комната</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} lg={1}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="buildYear"
                        label="Год постройки"
                        type="text"
                    />
                </Grid>

                <Grid item xs={12} lg={1}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="realtyArea"
                        label="Площадь, кв.м."
                        type="text"
                    />
                </Grid>
                <Grid item xs={12} lg={8}>
                </Grid>

                <Grid item xs={12} lg={1}>
                    <Button fullWidth={true} margin="dense" variant="contained" color="primary">
                        Рассчитать
                    </Button>
                </Grid>

                <Grid item xs={12} lg={2}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="insurancePremium"
                        label="Страховая премия"
                        type="text"
                        defaultValue=""
                    />
                </Grid>

                <Grid item xs={12} lg={1}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="calcDate"
                        label="Дата расчета"
                        type="text"
                        value="10.10.10"
                        disabled
                    />
                </Grid>

                <Grid item xs={12} lg={8}>
                </Grid>

                <Grid item xs={12} lg={5}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        label="СТРАХОВАТЕЛЬ"
                        type="text"
                        disabled={true}
                    />
                </Grid>
                <Grid item xs={12} lg={7}>
                </Grid>

                <Grid item xs={12} lg={1}>
                    <Button
                        fullWidth={true}
                        margin="dense"
                        variant="contained"
                        color="primary"
                        onClick={handleOpenClientSearchDialog}
                    >
                        Выбрать
                    </Button>
                </Grid>

                <Grid item xs={12} lg={3}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="insuranceHolderFullName"
                        label="ФИО"
                        type="text"
                        defaultValue=""
                    />
                </Grid>

                <Grid item xs={12} lg={1}>
                    <Button variant="contained"
                            fullWidth={true}
                            margin="dense"
                            color="primary"
                            disabled={selectedClient.clientId === null}
                            onClick={handleOpenClientEditDialog}>
                        Изменить
                    </Button>
                </Grid>
                <Grid item xs={12} lg={7}>
                </Grid>


                <Grid item xs={12} lg={1}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            autoOk={true}
                            disableToolbar
                            variant="inline"
                            format="dd.MM.yyyy"
                            margin="dense"
                            id="date-picker-inline"
                            value={selectedDate}
                            label="Дата рождения"
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                "aria-label": "change date"
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} lg={1}>
                </Grid>
                <Grid item xs={12} lg={1}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        label="Паспорт"
                        type="text"
                        disabled={true}
                    />
                </Grid>
                <Grid item xs={12} lg={1}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="passportSeries"
                        label="Серия"
                        type="text"
                    />
                </Grid>
                <Grid item xs={12} lg={1}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="passportNumber"
                        label="Номер"
                        type="text"
                    />
                </Grid>
                <Grid item xs={12} lg={7}>
                </Grid>


                <Grid item xs={12} lg={6}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        label="АДРЕС НЕДВИЖИМОСТИ"
                        type="text"
                        disabled={true}
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                </Grid>


                <Grid item xs={12} lg={1}>
                    <FormControl required margin="dense" fullWidth={true}>
                        <InputLabel id="selectContry">государство</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="selectContry"
                            autoWidth={true}
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"russia"}>Россия</MenuItem>
                            <MenuItem value={"other"}>Другое</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


                <Grid item xs={12} lg={1}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="postIndex"
                        label="индекс"
                        type="text"
                    />
                </Grid>
                <Grid item xs={12} lg={2}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="federalRegion"
                        label="республика, край, область"
                        type="text"
                    />
                </Grid>

                <Grid item xs={12} lg={2}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="region"
                        label="район"
                        type="text"
                    />
                </Grid>

                <Grid item xs={12} lg={6}>
                </Grid>


                <Grid item xs={12} lg={1}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="postIndex23"
                        label="нас. пункт"
                        type="text"
                    />
                </Grid>
                <Grid item xs={12} lg={1}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="postIndex54"
                        label="улица"
                        type="text"
                    />
                </Grid>
                <Grid item xs={12} lg={1}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="postIndex2154"
                        label="дом"
                        type="text"
                    />
                </Grid>
                <Grid item xs={12} lg={1}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="postIndex5124"
                        label="корпус"
                        type="text"
                    />
                </Grid>
                <Grid item xs={12} lg={1}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="region"
                        label="строение"
                        type="text"
                    />
                </Grid>
                <Grid item xs={12} lg={1}>
                    <TextField
                        fullWidth={true}
                        margin="dense"
                        id="region"
                        label="квартира"
                        type="text"
                    />
                </Grid>
                <Grid item xs={12} lg={6}/>


                <Grid item xs={12} lg={5}>
                    <TextField
                        fullWidth={true}
                        label="Комментарий к договору (не печатается на полисе)"
                        placeholder="Текст комментария"
                        multiline={true}
                        rows={3}
                        rowsMax={8}
                    />
                </Grid>
                <Grid item xs={12} lg={7}>
                </Grid>

                <Grid item xs={12} lg={1}/>
                <Grid item xs={12} lg={1}>
                    <Button variant="contained" fullWidth={true} color="primary" onClick={handleSaveContract}>
                        Сохранить
                    </Button>
                </Grid>
                <Grid item xs={12} lg={1}>
                    <Button variant="contained" fullWidth={true} color="primary" onClick={handleReturnToViewListPage}>
                        К списку
                    </Button>
                </Grid>
                <Grid item xs={12} lg={9}>
                </Grid>
            </Grid>
            <ClientSearchDialog
                isOpen={isOpenClientSearchDialog}
                setIsOpen={setIsOpenClientSearchDialog}
                handleOpenAddNewDialog={handleOpenAddNewDialog}
                selectClient={(client) => setSelectedClient(client)}
            />
            <ClientEditDialog
                isOpen={isOpenClientEditDialog}
                setIsOpen={setIsOpenClientEditDialog}
            />
            <ClientAddNewDialog
                isOpen={isOpenAddNewDialog}
                setIsOpen={setIsOpenAddNewDialog}
            />
        </div>
    );
}
