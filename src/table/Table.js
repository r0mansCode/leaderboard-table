import "./Table.css";
import table_fire from "../assets/images/table_fire.svg";
import data from "../data/data.json";

export const Table = () => {
  return (
    <div className="tableContainer">
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
              <td
                className={
                  row.place === 1
                    ? "badge badge--first"
                    : row.place === 2
                    ? "badge badge--second"
                    : row.place === 3
                    ? "badge badge--third"
                    : null
                }
              >
                {row.place}
              </td>
              <td>{row.player}</td>
              <td>{row.score}</td>
              <td>{row.prize}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
