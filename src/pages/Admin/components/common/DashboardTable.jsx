import React from "react";
import Pagination from "../../../../components/common/Pagination";

const DashboardTable = ({ tHeads, tBodies }) => {
  return (
    <>
      <div className="bg-white w-full px-4 py-2 border-2 border-border rounded-lg">
        <table className="border-separate table-auto border-spacing-y-4 w-full">
          <thead>
            <tr>
              {tHeads.map((head) => {
                return <th className="text-right">{head}</th>;
              })}
            </tr>
          </thead>
          <tbody>{tBodies.map((body) => body)}</tbody>
        </table>
        <div className="flex items-center justify-center my-4 border-t-2 border-border pt-4">
          <Pagination totalPage={3} />
        </div>
      </div>
    </>
  );
};

export default DashboardTable;
