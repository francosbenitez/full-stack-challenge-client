import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import moment from "moment";
import { Link } from 'react-router-dom'

const List = () => {
    const [operations, setOperations] = useState([]);
    const [listUpdated, setListUpdated] = useState(false)
    useEffect(() => {
        const userToken = window.localStorage.getItem("user-token");
        const getOperations = () => {
            const requestInit = {
                method: "get",
                headers: {
                    "user-token": userToken
                }
            }
            fetch('http://localhost:5000/operation/getOperations', requestInit)
            .then(res => res.json())
            .then(res => setOperations(res))
        }
        getOperations()
        setListUpdated(false)
    }, [listUpdated])
    const handleDelete = id => {
        const userToken = window.localStorage.getItem("user-token");
        const requestInit = {
            method: 'DELETE',
            headers: {
                "user-token": userToken
            }
        }
        fetch('http://localhost:5000/operation/delete/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(error => console.log(error))
        setListUpdated(true)
    }
    const Balance = operations.reduce((acc, { amount, type }) => {
        if (type === 'Income') {
          return acc + Number(amount);
        } else {
          return acc - Number(amount);
        }
    }, 0);
    return (
        <div className="flex flex-col items-center justify-center px-5 m-auto text-center lg:w-2/3">
            <h1 className="my-5 font-bold">Balance</h1>
            <span className="w-5/6 text-center lg:text-lg text-md">
                ${Balance}
            </span>
            <div className="p-10">
                <h1 className="mb-5 text-center font-bold">Last 10 Records</h1>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-white">
                                <th className="p-1 border border-text">#</th>
                                <th className="p-1 border border-text">Concept</th>
                                <th className="p-1 border border-text">Amount</th>
                                <th className="p-1 border border-text">Date</th>
                                <th className="p-1 border border-text">Category</th>
                                <th className="p-1 border border-text">Type</th>
                                <th className="p-1 border border-text">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                                {operations.map(operation => 
                                    <tr className="bg-white" key={operation.operation_id}>
                                        <td className="p-1 border border-text" tableheaddata="#">{operation.operation_id}</td>
                                        <td className="p-1 border border-text" tableheaddata="Concept">{operation.concept}</td>
                                        <td className="p-1 border border-text" tableheaddata="Amount">{new Intl.NumberFormat("en-EN").format(operation.amount)}</td>
                                        <td className="p-1 border border-text" tableheaddata="Date">{moment.utc(operation.date).format("DD/MM/YY")}</td>
                                        <td className="p-1 border border-text" tableheaddata="Category">{operation.category}</td>
                                        <td className="p-1 border border-text" tableheaddata="Type">{operation.type}</td>
                                        <td className="p-1 border border-text">
                                            <Link to={`/update/${operation.operation_id}`} style={{backgroundImage: 'none'}}>
                                                <button className="mr-1 px-3 bg-green-400"><FontAwesomeIcon icon={faEdit}/></button>
                                            </Link>
                                            <button onClick={() => handleDelete(operation.operation_id)}  className="ml-1 px-3 bg-red-400"><FontAwesomeIcon icon={faTrashAlt}/></button>
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default List;