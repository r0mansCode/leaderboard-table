import './Table.css';
import table_fire from "../assets/images/table_fire.svg"
import data from "../data/data.json"

export const Table = () => {
    return (
        <div className='tableContainer'>
            <img src={table_fire} className="tableFire" />
        <table>
            <thead>
                <tr>
                    <th>Place</th>
                    <th>Player</th>
                    <th>Score</th>
                    <th>Prize</th>
                </tr>
            </thead>
        <tbody>
        {data.map((row, ind) => (
            <tr key={ind}>
              <td>{row.place}</td>
              <td>{row.player}</td>
              <td>{row.score}</td>
              <td>{row.prize}</td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
    )
}