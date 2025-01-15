import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { categoryData } from '@/data/mockData';

export const BarChart = () => {
  return (
    <div className="w-full h-[300px] bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Comparación por Categorías</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={categoryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};