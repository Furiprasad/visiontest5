
import React, { useState, useEffect } from 'react';
import { fetchCSVData } from '@/utils/csvUtils';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FlatStatus {
  flat: string;
  status: string;
}

const FloorPlanView: React.FC<{ csvUrl: string }> = ({ csvUrl }) => {
  const [flats, setFlats] = useState<FlatStatus[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(csvUrl);
        const csvText = await response.text();
        
        // Parse the CSV data
        const rows = csvText.trim().split('\n').slice(1); // Skip header
        const parsedFlats = rows.map(row => {
          const [flat, status] = row.split(',');
          return { 
            flat: flat.trim(), 
            status: status.trim().toLowerCase() 
          };
        });
        
        setFlats(parsedFlats);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching CSV data:", err);
        setError("Failed to load flat availability data");
        setLoading(false);
      }
    };

    fetchData();
    // Set up auto-refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    
    return () => clearInterval(interval);
  }, [csvUrl]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-6 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-2 gap-6 p-4">
        {flats.map((flat, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  className={`p-6 text-center border-2 border-gray-800 rounded-lg shadow-md transition-all hover:shadow-lg 
                    ${flat.status === 'available' ? 'bg-green-500' : 'bg-red-500'} text-white font-bold`}
                >
                  <span className="text-lg">{flat.flat}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="p-2">
                  <p className="font-semibold">{flat.flat}</p>
                  <div className="mt-1">
                    <Badge variant={flat.status === 'available' ? "outline" : "secondary"}
                      className={`${flat.status === 'available' ? 'border-green-500 text-green-600' : 'bg-red-100 text-red-600'}`}
                    >
                      {flat.status === 'available' ? 'Available' : 'Sold Out'}
                    </Badge>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default FloorPlanView;
