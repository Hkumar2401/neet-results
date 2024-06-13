const Header = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center shadow-xl text-white bg-[#373A40]">
      <div className="bg-teal-500 w-full text-center">Use Allow CORS extension to fetch data</div>
      <div className="p-2">
        <h1 className="font-bold text-5xl">NEET Results 2024</h1>
      </div>
      <div className="flex items-center">
        <p className="text-2xl">
          {
            "(This list is incomplete, we will update as and when we have more data.)"
          }
        </p>
      </div>
    </div>
  );
};

export default Header;
