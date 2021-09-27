import React from 'react';

const Balance = () => {
    return (
        <main>
            <div className="flex flex-col items-center justify-center px-5 m-auto mt-20 text-center lg:w-2/3">
            <button className="lg:mx-4 bg-background border-2 border-primary border-opacity-100 hover:bg-primary text-primary hover:text-background font-bold py-2 px-4 rounded">
                New Operation
            </button>
                <h1 className="my-5 font-bold">Balance</h1>
                <span className="w-5/6 text-center lg:text-lg text-md">
                $
                </span>
            </div>
            <div class="p-10">
                <h1 className="mb-5 text-center font-bold">Last 10 Records</h1>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="bg-white">
                                <th class="p-1 border border-text">#</th>
                                <th class="p-1 border border-text">Concept</th>
                                <th class="p-1 border border-text">Amount</th>
                                <th class="p-1 border border-text">Date</th>
                                <th class="p-1 border border-text">Category</th>
                                <th class="p-1 border border-text">Type</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr class="bg-white">
                            <td class="p-1 border border-text" tableHeadData="#">1</td>
                            <td class="p-1 border border-text" tableHeadData="Concept">Concept 1</td>
                            <td class="p-1 border border-text" tableHeadData="Amount">Amount 1</td>
                            <td class="p-1 border border-text" tableHeadData="Date">Date 1</td>
                            <td class="p-1 border border-text" tableHeadData="Category">Category 1</td>
                            <td class="p-1 border border-text" tableHeadData="Type">Type 1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
        </main>
    );
};

export default Balance;