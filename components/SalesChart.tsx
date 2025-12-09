import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lun', views: 120 },
  { name: 'Mar', views: 150 },
  { name: 'Mie', views: 180 },
  { name: 'Jue', views: 220 },
  { name: 'Vie', views: 300 },
  { name: 'Sab', views: 280 },
  { name: 'Dom', views: 350 },
];

export const SalesChart: React.FC = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FACC15" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#FACC15" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#FFF', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ color: '#EAB308' }}
            labelStyle={{ color: '#64748B' }}
            formatter={(value: number) => [`${value} vistas`, 'Popularidad']}
          />
          <Area type="monotone" dataKey="views" stroke="#FACC15" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};