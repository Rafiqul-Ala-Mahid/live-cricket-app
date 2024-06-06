// src/components/PointsTable.jsx

const teamsData = [
  { team: "Team A", matches: 10, wins: 8, losses: 2, ties: 0, points: 16 },
  { team: "Team B", matches: 10, wins: 6, losses: 3, ties: 1, points: 13 },
  { team: "Team C", matches: 10, wins: 5, losses: 5, ties: 0, points: 10 },
  { team: "Team D", matches: 10, wins: 3, losses: 6, ties: 1, points: 7 },
  { team: "Team E", matches: 10, wins: 2, losses: 8, ties: 0, points: 4 },
];

const PointsTable = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-10">
        Team Points Table
      </h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Team</th>
            <th className="py-2 px-4 border-b">Matches Played</th>
            <th className="py-2 px-4 border-b">Wins</th>
            <th className="py-2 px-4 border-b">Losses</th>
            <th className="py-2 px-4 border-b">Ties</th>
            <th className="py-2 px-4 border-b">Points</th>
          </tr>
        </thead>
        <tbody>
          {teamsData.map((team, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{team.team}</td>
              <td className="py-2 px-4 border-b">{team.matches}</td>
              <td className="py-2 px-4 border-b">{team.wins}</td>
              <td className="py-2 px-4 border-b">{team.losses}</td>
              <td className="py-2 px-4 border-b">{team.ties}</td>
              <td className="py-2 px-4 border-b">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointsTable;
