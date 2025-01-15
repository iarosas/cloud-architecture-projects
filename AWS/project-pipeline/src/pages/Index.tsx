import { LineChart } from "@/components/charts/LineChart";
import { BarChart } from "@/components/charts/BarChart";
import { PieChart } from "@/components/charts/PieChart";
import { TimeFilter } from "@/components/TimeFilter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard de Datos</h1>
        <p className="text-gray-600 mb-8">Visualización de métricas y tendencias</p>
        
        <TimeFilter />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <LineChart />
          </div>
          <BarChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Index;