import React from 'react';
import axios from "axios";

class ContractViewListPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.data);
        this.state = {
            contractViewList: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/insurance/view/")
            .then(res => {
                const contractViewList = res.data;
                this.setState({contractViewList});
            })
    }

    render() {
        return (
            <div className="contract-view-list-page">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Серия-Номер</th>
                        <th>Дата заключения</th>
                        <th>Страхователь</th>
                        <th>Премия</th>
                        <th>Срок действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.contractViewList.map(item =>(
                        <tr key={"contractId_" + item.contractId}
                            onClick={this.props.onClick}
                            onDoubleClick={this.props.onDoubleClick} >
                            <td>{item.contractId}</td>
                            <td>{item.contractDate}</td>
                            <td>{item.policyHolder}</td>
                            <td>{item.premium}</td>
                            <td>{item.contractDuration}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        );
    }
}

/*
*
                     { this.props.data.map(item =>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
* */

export default ContractViewListPage;
