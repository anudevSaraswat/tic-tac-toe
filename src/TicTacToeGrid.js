import { useState } from 'react';
import './TicTacToeGrid.css';

export function TicTacToeGrid() {

    const [cells, setCellValue] = useState(Array(9).fill(""));
    const [xOrO, setXOrO] = useState('X');
    const [winning, setWinning] = useState('');

    function handleClick(num) {
        let player = '';
        if (xOrO === 'X') {
            cells[num] = 'O';
            player = 'O';
            setCellValue(cells);
            setXOrO('O');
        } else {
            cells[num] = 'X';
            player = 'X';
            setCellValue(cells);
            setXOrO('X');
        }
        let status = checkWinning(cells)
        console.log(status)
        if (status) {
            setWinning(player);
        }
    }

    function checkWinning(cellsArr) {
        console.log({ cellsArr })
        // check for all the rows
        if (((cellsArr[0] !== '' && cellsArr[1] !== '' && cellsArr[2] !== '') && cellsArr[0] === cellsArr[1] && cellsArr[1] === cellsArr[2]) ||
        ((cellsArr[3] !== '' && cellsArr[4] !== '' && cellsArr[5] !== '') && cellsArr[3] === cellsArr[4] && cellsArr[4] === cellsArr[5]) ||
        ((cellsArr[6] !== '' && cellsArr[7] !== '' && cellsArr[8] !== '') && cellsArr[6] === cellsArr[7] && cellsArr[7] === cellsArr[8])) {
            return true
        }

        //check for all the columns
        if (((cellsArr[0] !== '' && cellsArr[3] !== '' && cellsArr[6] !== '') && cellsArr[0] === cellsArr[3] && cellsArr[3] === cellsArr[6]) ||
            ((cellsArr[1] !== '' && cellsArr[4] !== '' && cellsArr[7] !== '') && cellsArr[1] === cellsArr[4] && cellsArr[4] === cellsArr[7]) ||
            ((cellsArr[2] !== '' && cellsArr[5] !== '' && cellsArr[8] !== '') && cellsArr[2] === cellsArr[5] && cellsArr[5] === cellsArr[8])) {
            return true
        }

        // check for diagonals
        if (((cellsArr[0] !== '' && cellsArr[4] !== '' && cellsArr[8] !== '') && cellsArr[0] === cellsArr[4] && cellsArr[4] === cellsArr[8]) ||
            ((cellsArr[2] !== '' && cellsArr[4] !== '' && cellsArr[6] !== '') && cellsArr[2] === cellsArr[4] && cellsArr[4] === cellsArr[6])) {
            return true
        }

    }

    function handleResetButtonClick() {
        setWinning('');
        setCellValue(Array(9).fill(""));
    }

    return (
        <div>
            <h2 className={winning ? `winner-winner` : 'winner'}>Winner is {winning}</h2>
            <table className="table">
                <tr className="table-row-1">
                    <td className={cells[0] ? `cell-${cells[0]}` : 'cell'} onClick={() => handleClick(0)}>{cells[0]}</td>
                    <td className={cells[1] ? `cell-${cells[1]}` : 'cell'} onClick={() => handleClick(1)}>{cells[1]}</td>
                    <td className={cells[2] ? `cell-${cells[2]}` : 'cell'} onClick={() => handleClick(2)}>{cells[2]}</td>
                </tr>
                <tr className="table-row-2">
                    <td className={cells[3] ? `cell-${cells[3]}` : 'cell'} onClick={() => handleClick(3)}>{cells[3]}</td>
                    <td className={cells[4] ? `cell-${cells[4]}` : 'cell'} onClick={() => handleClick(4)}>{cells[4]}</td>
                    <td className={cells[5] ? `cell-${cells[5]}` : 'cell'} onClick={() => handleClick(5)}>{cells[5]}</td>
                </tr>
                <tr className="table-row-3">
                    <td className={cells[6] ? `cell-${cells[6]}` : 'cell'} onClick={() => handleClick(6)}>{cells[6]}</td>
                    <td className={cells[7] ? `cell-${cells[7]}` : 'cell'} onClick={() => handleClick(7)}>{cells[7]}</td>
                    <td className={cells[8] ? `cell-${cells[8]}` : 'cell'} onClick={() => handleClick(8)}>{cells[8]}</td>
                </tr>
            </table>
            <button className="reset" onClick={handleResetButtonClick}>Reset</button>
        </div>

    )

}