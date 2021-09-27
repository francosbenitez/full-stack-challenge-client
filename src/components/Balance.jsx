import React from 'react';

const Balance = () => {
    return (
        <main>
            <div className="flex flex-col items-center justify-center px-5 m-auto mt-20 text-center lg:w-2/3">
                <h1 className="mb-5">Balance</h1>
                <span className="w-5/6 text-center lg:text-lg text-md">
                $
                </span>
            </div>
            <div class="p-10">
                <h1 className="mb-5 text-center">Últimos 10 registros</h1>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="bg-white">
                                <th class="pl-2 pt-1 pb-1 border border-indigo-300">#</th>
                                <th class="pl-2 pt-1 pb-1 border border-indigo-300">Concept</th>
                                <th class="pl-2 pt-1 pb-1 border border-indigo-300">Amount</th>
                                <th class="pl-2 pt-1 pb-1 border border-indigo-300">Date</th>
                                <th class="pl-2 pt-1 pb-1 border border-indigo-300">Category</th>
                                <th class="pl-2 pt-1 pb-1 border border-indigo-300">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white">
                            <td class="pl-2 pt-1 pb-1 border border-indigo-300" tableHeadData="#">1</td>
                            <td class="pl-2 pt-1 pb-1 border border-indigo-300" tableHeadData="Concept">Concept 1</td>
                            <td class="pl-2 pt-1 pb-1 border border-indigo-300" tableHeadData="Amount">Amount 1</td>
                            <td class="pl-2 pt-1 pb-1 border border-indigo-300" tableHeadData="Date">Date 1</td>
                            <td class="pl-2 pt-1 pb-1 border border-indigo-300" tableHeadData="Category">Category 1</td>
                            <td class="pl-2 pt-1 pb-1 border border-indigo-300" tableHeadData="Type">Type 1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
        </main>
    );
};

export default Balance;