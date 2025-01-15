import { Button } from "@/components/ui/button";

const periods = ['1M', '3M', '6M', '1A', 'Todo'];

export const TimeFilter = () => {
  return (
    <div className="flex gap-2 mb-6">
      {periods.map((period) => (
        <Button
          key={period}
          variant="outline"
          className="text-sm"
        >
          {period}
        </Button>
      ))}
    </div>
  );
};