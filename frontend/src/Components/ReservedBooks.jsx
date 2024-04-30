import React from 'react';

const booksOnHold = [
    { id: 1, name: "Aditya", book: "Rich Dad Poor Dad", date: "01/07/2024" },
    { id: 2, name: "Sripad", book: "The Subtle Art", date: "02/17/2024" },
    { id: 3, name: "Mahesh", book: "Wings Of Fire", date: "03/09/2024" },
    { id: 4, name: "Mokesh", book: "The Secret", date: "03/03/2024" },
    { id: 5, name: "Ruksar", book: "Bad Guys", date: "02/14/2024" },
    { id: 6, name: "Shyam", book: "Giovanni Rovelli", date: "03/21/2024" },
];

function ReservedBooks() {
    return (
        <div className="max-w-4xl mx-auto p-5 shadow-lg">
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Books On Hold</h1>
            <table className="table-auto w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Book</th>
                        <th className="px-4 py-2 text-left">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {booksOnHold.map((entry) => (
                        <tr key={entry.id} className="border-b">
                            <td className="px-4 py-2">{entry.name}</td>
                            <td className="px-4 py-2">{entry.book}</td>
                            <td className="px-4 py-2">{entry.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReservedBooks;
