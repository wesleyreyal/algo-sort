import React from 'react';

type ListPropsType = {
  dataSet: number[];
};

export const List: React.FC<ListPropsType> = ({ dataSet }) => {
  return (
    <div className="flex items-end">
      {dataSet.map((data: number, index: number) => {
        return (
          <div
            key={index}
            className="bg-red-400 w-10"
            style={{ height: 'calc(1vh * ' + data * 0.2 + ')' }}
          ></div>
        );
      })}
    </div>
  );
};
