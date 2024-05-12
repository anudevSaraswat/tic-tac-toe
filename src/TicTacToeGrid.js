import { useState } from 'react';
import './TicTacToeGrid.css';

export function TicTacToeGrid() {

    const [cells, setCellValue] = useState(Array(9).fill(""));
    const [xOrO, setXOrO] = useState('X');

    function handleClick(num) {
        if (xOrO === 'X') {
            cells[num] = 'O';
            setCellValue(cells);
            setXOrO('O');
        } else {
            cells[num] = 'X';
            setCellValue(cells);
            setXOrO('X');
        }
    }

    function handleButtonClick() {
        setCellValue(Array(9).fill(""));
    }

    return (
        <div>
            <table className="table">
                <tr className="table-row-1">
                    <td className="cell" onClick={() => handleClick(0)}>{cells[0]}</td>
                    <td className="cell" onClick={() => handleClick(1)}>{cells[1]}</td>
                    <td className="cell" onClick={() => handleClick(2)}>{cells[2]}</td>
                </tr>
                <tr className="table-row-2">
                    <td className="cell" onClick={() => handleClick(3)}>{cells[3]}</td>
                    <td className="cell" onClick={() => handleClick(4)}>{cells[4]}</td>
                    <td className="cell" onClick={() => handleClick(5)}>{cells[5]}</td>
                </tr>
                <tr className="table-row-3">
                    <td className="cell" onClick={() => handleClick(6)}>{cells[6]}</td>
                    <td className="cell" onClick={() => handleClick(7)}>{cells[7]}</td>
                    <td className="cell" onClick={() => handleClick(8)}>{cells[8]}</td>
                </tr>
            </table>
            <button onClick={handleButtonClick}>Reset</button>
        </div>

    )

}