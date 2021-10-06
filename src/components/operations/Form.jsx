import React from 'react';

const Form = ({operation, setOperation}) => {
    const handleChange = e => {
        setOperation({
            ...operation,
            [e.target.name]: e.target.value
        })
    }
    const {concept, amount, date, category, type } = operation
    const handleSubmit = () => {
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(operation)
        }
        fetch('http://localhost:5000/operation/createOperation', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        setOperation({
            concept: "", 
            amount: "",
            date: "",
            category: "",
            type: "",
            user_id: ""
        })
    }
    return ( 
        <div className="m-10 flex justify-center">
            <form onSubmit={handleSubmit} className="mb-20">
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label htmlFor="concept" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Concept</label>
                        <input value={concept} name="concept" onChange={handleChange} type="text" id="concept" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Concept" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label htmlFor="amount" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Amount
                        </label>
                        <input value={amount} name="amount" onChange={handleChange} type="number" id="amount" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="1000" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label htmlFor="date" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Date
                        </label>
                        <input value={date} name="date" onChange={handleChange} type="date" id="date" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label htmlFor="category" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Category
                        </label>
                        <div className="relative">
                            <select value={category} name="category" onChange={handleChange} type="text" id="category" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option selected hidden>Choose here</option>
                                <option>Food</option>
                                <option>Health</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label htmlFor="type" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Type
                        </label>
                        <div className="relative">
                            <select value={type} name="type" onChange={handleChange} type="type" id="type" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option selected hidden>Choose here</option>
                                <option>Income</option>
                                <option>Expense</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button
                            type="submit"
                            className="bg-primary p-3 rounded-md text-background transform shadow-lg hover:bg-primary hover:scale-110 duration-200"
                        >
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default Form;