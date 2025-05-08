import React, { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FlatData {
  id: string;
  project: string;
  flatNumber: string;
  type: string;
  floor: string;
  area: string;
  status: "Available" | "Sold";
  price?: string;
  description?: string;
}

const FlatCalendarView: React.FC<{ csvUrl: string }> = ({ csvUrl }) => {
  const [flats, setFlats] = useState<FlatData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(csvUrl);
        const csvText = await response.text();
        const parsedFlats = parseCSV(csvText);
        setFlats(parsedFlats);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching CSV data:", err);
        setError("Failed to load flat availability data");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [csvUrl]);

  const parseCSV = (csvText: string): FlatData[] => {
    const lines = csvText.split('\n');
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map(h => h.trim());
    
    return lines.slice(1)
      .filter(line => line.trim() !== '')
      .map((line, index) => {
        const values = line.split(',').map(v => v.trim());
        const entry: Record<string, string> = {};
        
        headers.forEach((header, i) => {
          if (i < values.length) {
            entry[header] = values[i];
          }
        });
        
        return {
          id: entry.id || `flat-${index}`,
          project: entry.project || "Unknown Project",
          flatNumber: entry.flatNumber || entry.flat_number || entry.unit || "",
          type: entry.type || entry.flat_type || "",
          floor: entry.floor || "",
          area: entry.area || "",
          status: (entry.status?.toLowerCase() === "sold" ? "Sold" : "Available") as "Available" | "Sold",
          price: entry.price || "",
          description: entry.description || "",
        };
      });
  };

  const renderCalendarDay = (day: Date) => {
    const dayFlats = flats.filter(flat => {
      // This is a simplified check - in a real app you'd use proper booking/availability data
      // For now we're just simulating some randomized availability
      const flatHash = `${flat.id}-${format(day, 'yyyy-MM-dd')}`;
      const randomValue = hashCode(flatHash) % 100;
      return flat.status === "Available" ? randomValue > 30 : false;
    });

    const availableCount = dayFlats.length;
    const soldCount = flats.length - availableCount;

    if (availableCount === 0) {
      // If no flats available, don't show special styling
      return null;
    }

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-full h-full flex items-center justify-center">
              <div className={`w-2 h-2 rounded-full ${availableCount > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
            </div>
          </TooltipTrigger>
          <TooltipContent className="p-0">
            <div className="p-2 max-w-[300px]">
              <p className="font-semibold mb-1">
                {availableCount} Available / {soldCount} Sold
              </p>
              <div className="max-h-[150px] overflow-y-auto">
                {dayFlats.slice(0, 5).map(flat => (
                  <div key={flat.id} className="text-xs mb-1">
                    <Badge variant={flat.status === "Available" ? "outline" : "secondary"} 
                      className={`mr-1 ${flat.status === "Available" ? 'border-green-500 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {flat.status}
                    </Badge>
                    {flat.project} - {flat.flatNumber} - Floor {flat.floor}
                    {flat.price && ` - ${flat.price}`}
                  </div>
                ))}
                {dayFlats.length > 5 && (
                  <p className="text-xs italic">+ {dayFlats.length - 5} more...</p>
                )}
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  // Simple hash function for consistent pseudo-random values
  const hashCode = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  };

  if (isLoading) {
    return (
      <div className="w-full p-8 text-center">
        <CalendarIcon className="animate-spin h-8 w-8 mx-auto mb-4 text-primary" />
        <p>Loading calendar data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-8 text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  const selectedFlats = flats.filter(flat => {
    // This is a simplified check - in a real app you'd use proper booking/availability data
    const flatHash = `${flat.id}-${format(date, 'yyyy-MM-dd')}`;
    const randomValue = hashCode(flatHash) % 100;
    return flat.status === "Available" ? randomValue > 30 : false;
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 shadow-md">
          <CardContent className="p-4">
            <div className="mb-4 flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Select Date</h3>
            </div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => newDate && setDate(newDate)}
              className="border rounded-md"
              components={{
                DayContent: (props) => (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div>{props.date?.getDate()}</div>
                    {props.date && renderCalendarDay(props.date)}
                  </div>
                ),
              }}
            />
          </CardContent>
        </Card>
        <Card className="lg:col-span-2 shadow-md">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-4">
              Available Flats on {format(date, 'MMMM d, yyyy')}
            </h3>
            {selectedFlats.length === 0 ? (
              <div className="text-center p-6 text-gray-500">
                <p>No availability data for this date.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto">
                {selectedFlats.map((flat) => (
                  <div 
                    key={flat.id} 
                    className="border p-3 rounded-md shadow-sm hover:shadow-md transition-shadow bg-white"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{flat.project}</h4>
                      <Badge 
                        variant={flat.status === "Available" ? "outline" : "secondary"}
                        className={`${flat.status === "Available" 
                          ? 'border-green-500 text-green-600' 
                          : 'bg-red-100 text-red-600'}`}
                      >
                        {flat.status}
                      </Badge>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <p>Flat: {flat.flatNumber}</p>
                      <p>Type: {flat.type}</p>
                      <p>Floor: {flat.floor}</p>
                      <p>Area: {flat.area}</p>
                      {flat.price && <p className="font-semibold">Price: {flat.price}</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlatCalendarView;
