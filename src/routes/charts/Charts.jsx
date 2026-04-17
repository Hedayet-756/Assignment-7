import React, { useContext, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { FriendContext } from '../../context/FriendContext';

const COLORS = ['#2E6B47', '#9333EA', '#4ADE80'];

export default function FriendsPieChart({ isAnimationActive = true }) {

  const { storecall, storeText, storeVideo } = useContext(FriendContext);

  const countData = useMemo(() => {

    const frocessData = [
      { name: 'Call', value: storecall?.length || 0 },
      { name: 'Text', value: storeText?.length || 0 },
      { name: 'Video', value: storeVideo?.length || 0 },
    ];
    return frocessData;
  },
    [storecall, storeText, storeVideo]);

  const legendCustom = (props) => {
    const { payload } = props;
    return (
      <div className="flex justify-center gap-6 mt-6">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600 font-normal">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const totalActions = countData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-base-200 min-h-screen py-8">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-slate-800 mb-8">
          Friendship Analytics
        </h2>

        <div className="bg-base-100 rounded-2xl shadow-sm p-8 pb-10">
          <p className="text-lg font-semibold text-green-900 mb-10">By Interaction Type</p>

          <div className="flex flex-col items-center">
            {totalActions > 0 ? (
              <ResponsiveContainer width="100%" aspect={2.5}>
                <PieChart>
                  <Pie
                    data={countData}
                    cx="50%"
                    cy="50%"
                    innerRadius="75%"
                    outerRadius="90%"
                    dataKey="value"
                    isAnimationActive={isAnimationActive}
                    startAngle={90}
                    endAngle={-270}
                    cornerRadius={20}
                    paddingAngle={10}
                    stroke='none'
                  >
                    {countData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend content={legendCustom} verticalAlign="bottom" align="center" />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500">No interaction data available for analytics.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}