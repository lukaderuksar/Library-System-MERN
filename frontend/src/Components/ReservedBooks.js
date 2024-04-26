import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Aditya</td>
                    <td>Rich Dad Poor Dad</td>
                    <td>01/7/2024</td>
                </tr>
                <tr>
                    <td>Sripad</td>
                    <td>The Subtle Art</td>
                    <td>02/17/2024</td>
                </tr>
                <tr>
                    <td>Mahesh</td>
                    <td>Wings Of Fire</td>
                    <td>03/9/2024</td>
                </tr>
                <tr>
                    <td>Mokesh</td>
                    <td>The Secret</td>
                    <td>03/3/2024</td>
                </tr>
                <tr>
                    <td>Ruksar</td>
                    <td>Bad Guys</td>
                    <td>02/14/2024</td>
                </tr>
                <tr>
                    <td>Habi</td>
                    <td>Giovanni Rovelli</td>
                    <td>03/21/2024</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks
