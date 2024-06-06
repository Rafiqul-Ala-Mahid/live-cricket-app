
const battingData = [
  { match: "Match 1", runs: 30 },
  { match: "Match 2", runs: 50 },
  { match: "Match 3", runs: 70 },
  { match: "Match 4", runs: 20 },
  { match: "Match 5", runs: 90 },
];

const bowlingData = [
  { match: "Match 1", wickets: 2 },
  { match: "Match 2", wickets: 3 },
  { match: "Match 3", wickets: 1 },
  { match: "Match 4", wickets: 4 },
  { match: "Match 5", wickets: 5 },
];

const Stats = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-10">
        Player Statistics
      </h1>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-5">Batting Statistics</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Match</th>
              <th className="py-2 px-4 border-b">Runs</th>
            </tr>
          </thead>
          <tbody>
            {battingData.map((record, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{record.match}</td>
                <td className="py-2 px-4 border-b">{record.runs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-5">Bowling Statistics</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Match</th>
              <th className="py-2 px-4 border-b">Wickets</th>
            </tr>
          </thead>
          <tbody>
            {bowlingData.map((record, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{record.match}</td>
                <td className="py-2 px-4 border-b">{record.wickets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stats;
