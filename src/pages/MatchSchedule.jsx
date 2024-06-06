// src/components/MatchSchedule.jsx

const matchSchedule = [
  {
    matchNumber: 1,
    team1: "Team A",
    team2: "Team B",
    date: "2024-06-10",
    time: "10:00 AM",
  },
  {
    matchNumber: 2,
    team1: "Team C",
    team2: "Team D",
    date: "2024-06-12",
    time: "02:00 PM",
  },
  // Add more match details as needed
];

const MatchSchedule = () => {
  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-5">
        Cricket Match Schedule
      </h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Match Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Teams
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {matchSchedule.map((match) => (
              <tr key={match.matchNumber}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {match.matchNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {match.team1} vs {match.team2}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{match.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{match.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchSchedule;
