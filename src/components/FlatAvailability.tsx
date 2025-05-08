
import React, { useEffect, useState } from 'react';
import { Check, X, Filter } from 'lucide-react';
import { fetchCSVData, FlatData } from '../utils/csvUtils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

interface FlatAvailabilityProps {
  csvUrl: string;
}

const FlatAvailability: React.FC<FlatAvailabilityProps> = ({ csvUrl }) => {
  const [flats, setFlats] = useState<FlatData[]>([]);
  const [filteredFlats, setFilteredFlats] = useState<FlatData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCSVData(csvUrl);
        setFlats(data);
        setFilteredFlats(data);
      } catch (err) {
        setError("Failed to load flat availability data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [csvUrl]);
  
  useEffect(() => {
    let result = [...flats];
    
    if (showOnlyAvailable) {
      result = result.filter(flat => flat.status === "Available");
    }
    
    if (selectedProject !== "all") {
      result = result.filter(flat => flat.project === selectedProject);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(flat => 
        flat.flatNumber.toLowerCase().includes(query) || 
        flat.floor.toLowerCase().includes(query) || 
        flat.type.toLowerCase().includes(query)
      );
    }
    
    setFilteredFlats(result);
  }, [flats, showOnlyAvailable, selectedProject, searchQuery]);
  
  const availableProjects = [...new Set(flats.map(flat => flat.project))];
  
  if (isLoading) return (
    <div className="w-full py-20 text-center">
      <div className="animate-pulse flex justify-center">
        <div className="h-8 w-8 bg-primary/40 rounded-full"></div>
      </div>
      <p className="mt-4 text-gray-500">Loading availability data...</p>
    </div>
  );
  
  if (error) return (
    <div className="w-full py-10 text-center">
      <p className="text-destructive">{error}</p>
      <Button 
        variant="outline" 
        className="mt-4"
        onClick={() => window.location.reload()}
      >
        Try Again
      </Button>
    </div>
  );
  
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-2xl font-semibold">Flat Availability</h3>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Switch
              id="available-switch"
              checked={showOnlyAvailable}
              onCheckedChange={setShowOnlyAvailable}
            />
            <label 
              htmlFor="available-switch"
              className="text-sm cursor-pointer"
            >
              Available Only
            </label>
          </div>
          
          <Select
            value={selectedProject}
            onValueChange={setSelectedProject}
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by Project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              {availableProjects.map(project => (
                <SelectItem key={project} value={project}>
                  {project}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <div className="relative w-full sm:w-[200px]">
            <Input
              placeholder="Search flats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
      
      {filteredFlats.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No flats match your filters</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setShowOnlyAvailable(false);
              setSelectedProject("all");
              setSearchQuery("");
            }}
          >
            <Filter className="mr-2 h-4 w-4" /> 
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFlats.map((flat) => (
            <TooltipProvider key={flat.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className={`overflow-hidden transition-all ${flat.status === "Available" ? "hover:shadow-md hover:border-green-300" : "opacity-90 hover:border-red-300"}`}>
                    <div className={`h-2 w-full ${flat.status === "Available" ? "bg-green-500" : "bg-red-500"}`}></div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold">{flat.project}</h4>
                          <p className="text-sm text-gray-600">Flat {flat.flatNumber}</p>
                        </div>
                        <Badge 
                          variant={flat.status === "Available" ? "default" : "destructive"}
                          className="flex items-center gap-1"
                        >
                          {flat.status === "Available" 
                            ? <><Check className="h-3 w-3" /> Available</> 
                            : <><X className="h-3 w-3" /> Sold</>}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-gray-500">Type</p>
                          <p>{flat.type || "N/A"}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Floor</p>
                          <p>{flat.floor || "N/A"}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Area</p>
                          <p>{flat.area || "N/A"}</p>
                        </div>
                        {flat.price && (
                          <div>
                            <p className="text-gray-500">Price</p>
                            <p>{flat.price}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {flat.status === "Available" 
                      ? "This flat is available for purchase" 
                      : "This flat has been sold"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlatAvailability;
