const ShimmerResults = () => {
  const twentyRows = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="w-full pt-20 flex flex-col items-center justify-center bg-[#373A40]">
    <h1 className="text-center font-bold text-2xl text-white">
      Total Results :{" "}
    </h1>

    <div className="w-full mt-10 flex flex-col items-center justify-center">
      <table>
        <thead>
          <tr className="h-[40px] text-white bg-zinc-700">
            <th>AIR</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Application No</th>
          </tr>
        </thead>

        <tbody className="w-full">
          {twentyRows.map((e, i) => {
            return (
              <tr
                key={i}
                className={`text-center text-black h-[30px] ${
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
