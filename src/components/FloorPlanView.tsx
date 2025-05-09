
import React, { useState, useEffect } from 'react';

interface FlatData {
  project: string;
  flat: string;
  status: string;
}

interface FloorPlanViewProps {
  adityaUrl: string;
  blueUrl: string;
}

const FloorPlanView: React.FC<FloorPlanViewProps> = ({ adityaUrl, blueUrl }) => {
  const [adityaData, setAdityaData] = useState<FlatData[]>([]);
  const [blueData, setBlueData] = useState<FlatData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch CSV data
  const fetchCSV = async (url: string): Promise<FlatData[]> => {
    try {
      const response = await fetch(url);
      const text = await response.text();
      const lines = text.trim().split('\n');
      const rows = lines.slice(1); // Skip header
      
      return rows.map(line => {
        const [project, flat, status] = line.split(',');
        return { 
          project: project?.trim() || '', 
          flat: flat?.trim() || '', 
          status: status?.trim().toLowerCase() || 'sold' 
        };
      });
    } catch (err) {
      console.error("Error fetching CSV data:", err);
      throw new Error("Failed to load flat availability data");
    }
  };

  // Group flats by floor
  const groupByFloor = (flats: FlatData[]): { [floor: string]: FlatData[] } => {
    const grouped: { [floor: string]: FlatData[] } = {};
    
    flats.forEach((flat) => {
      if (!flat.flat) return;
      
      const floor = flat.flat[0] + 'F';
      
      if (!grouped[floor]) {
        grouped[floor] = [];
      }
      
      grouped[floor].push(flat);
    });
    
    return grouped;
  };

  // Fetch data from both sources
  useEffect(() => {
    const fetchBothSources = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch Aditya Gold data
        const adityaCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT0dA3CUrK_jkKJl35ToYh_CeUuCfLzwd5PAJVErjn0etMGdVDUti0tiJ0ex37UqE8MFpHQmDcE2KTL/pub?output=csv";
        const adityaFlats = await fetchCSV(adityaCsvUrl);
        setAdityaData(adityaFlats);
        
        // Fetch Blue Horizon data
        const blueCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsGdcKTTzQbaF-RqphoV2ebirtGqoB0OGYNB2XChh3ofBDl5pn11J86rhaVqVBIdPXqq0i3n63yJMv/pub?output=csv";
        const blueFlats = await fetchCSV(blueCsvUrl);
        setBlueData(blueFlats);
        
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
        setLoading(false);
      }
    };

    fetchBothSources();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchBothSources, 30000);
    return () => clearInterval(interval);
  }, []);

  // Render a single project's floor plan
  const renderProject = (title: string, flats: FlatData[]) => {
    const groupedFlats = groupByFloor(flats);
    
    return (
      <div className="flex-1 min-w-[250px]">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-6">{title}</h3>
        
        {Object.entries(groupedFlats)
          .sort(([a], [b]) => b.localeCompare(a)) // Sort floors in descending order
          .map(([floor, flats]) => (
            <div key={floor} className="flex items-center mb-3">
              <div className="font-bold w-8">{floor}</div>
              <div className="flex flex-wrap gap-2 justify-center mx-auto">
                {flats.map((flat, idx) => (
                  <div 
                    key={idx}
                    className={`
                      p-2 rounded-lg w-14 text-center text-white font-medium
                      ${flat.status === 'available' ? 'bg-green-600' : 'bg-red-600'}
                    `}
                    title={`${flat.flat} - ${flat.status.charAt(0).toUpperCase() + flat.status.slice(1)}`}
                  >
                    {flat.flat}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    );
  };

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
    <div className="w-full" id="floorplans">
      <div className="flex flex-col md:flex-row gap-8">
        {renderProject("Aditya Gold", adityaData)}
        {renderProject("Blue Horizon", blueData)}
      </div>
    </div>
  );
};

export default FloorPlanView;
