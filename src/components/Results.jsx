import { useEffect, useState } from "react";
import ShimmerResults from "./ShimmerResults";

const Results = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAllUpdatedResults();
  }, []);

  const getAllUpdatedResults = async () => {
    try{

      const res = await fetch("https://neet-orchestrator.100xdevs.com/total");
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch(err){
      console.log(err);
    }
  };

  if (data === null) return <ShimmerResults />;

  return (
    <div className="w-full pt-20 pb-20 flex flex-col bg-[#373A40]">
      <h1 className="text-center font-bold text-2xl text-white">
        Total Results : {data?.len}
      </h1>

      <div className="w-full mt-10 flex flex-col items-center justify-center text-black ">
        <table>
          <thead>
            <tr className="h-[40px] text-white bg-teal-700">
              <th>AIR</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Application No</th>
            </tr>
          </thead>

          <tbody>
            {data?.total?.map((candidate, i) => {
              return (
                <tr
                  key={i}
                  className={`text-center text-black ${
                    i % 2 === 0 ? "bg-white" : "bg-zinc-200"
                  }`}
                >
                  <td className="px-14">{candidate.allIndiaRank}</td>
                  <td className="px-14">{candidate.candidateName}</td>
                  <td className="px-14">
                    {candidate.marks.replace(/(\d+)([A-Za-z]+)/, "$1 $2")}
                  </td>
                  <td className="px-14">{candidate.applicationNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
