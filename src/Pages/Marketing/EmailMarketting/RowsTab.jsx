const RowsTab = () => {
  const rows = [
    {
      title: "One row – one column",
      layout: [1],
    },
    {
      title: "One row – two columns (left narrow, right wide)",
      layout: [1, 2],
    },
    {
      title: "One row – two columns (left wide, right narrow)",
      layout: [2, 1],
    },
    {
      title: "One row – two columns (equal)",
      layout: [1, 1],
    },
    {
      title: "One row – two columns (left wide, right narrow)",
      layout: [2, 1],
    },
  ];

  return (
    <div className="space-y-4 text-sm">
      {rows.map((row, index) => (
        <div
          key={index}
          className="cursor-pointer hover:bg-[#EAF4FF] p-2 rounded"
        >
          <p className="inter font-medium mb-1">{row.title}</p>

          {/* Visual layout */}
          <div className="flex gap-1">
            {row.layout.map((col, i) => (
              <div
                key={i}
                className={`h-3 bg-black ${
                  col === 1 ? "flex-1" : "flex-[2]"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default RowsTab