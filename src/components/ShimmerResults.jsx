const ShimmerResults = () => {
  const rows = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
  ];

  return (
    <div className="w-full pb-56 h-[100%] pt-20 flex flex-col bg-[#373A40] ">
      <h1 className="text-center font-bold text-2xl text-white">
        Total Results :
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
            {rows.map((e, i) => {
              return (
                <tr
                  key={i}
                  className={`text-center h-[30px] text-black ${
                    i % 2 === 0 ? "bg-white" : "bg-zinc-200"
                  }`}
                >
                  <td className="px-48"></td>
                  <td className="px-48"></td>
                  <td className="px-48"></td>
                  <td className="px-48"></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShimmerResults;
