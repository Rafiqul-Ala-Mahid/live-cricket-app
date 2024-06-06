// src/components/LiveScore.jsx
const LiveScore = () => {
  // Assuming score is received from an API or state
  const score = {
    team1: "Team A",
    team2: "Team B",
    runs1: 120,
    runs2: 90,
    overs1: 15.4,
    overs2: 15.0,
  };

  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-5">Live Score</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Match Details
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Team 1</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {score.team1}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Runs</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {score.runs1}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Overs</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {score.overs1}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Team 2</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {score.team2}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Runs</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {score.runs2}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Overs</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {score.overs2}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default LiveScore;
