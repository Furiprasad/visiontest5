
import React, { useState, useEffect } from 'react';

interface FlatData {
  project: string;
  flat: string;
  status: string;
}

interface GroupedFlats {
  [floor: string]: {
    flat: string;
    status: string;
  }[];
}

const FloorPlanView: React.FC<{ csvUrl: string }> = ({ csvUrl }) => {
  const [projectData, setProjectData] = useState<{[project: string]: GroupedFlats}>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fix the URL to ensure we're using a valid CSV URL
        const csvUrlToUse = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT0dA3CUrK_jkKJl35ToYh_CeUuCfLzwd5PAJVErjn0etMGdVDUti0tiJ0ex37UqE8MFpHQmDcE2KTL/pub?output=csv";
        
        const response = await fetch(csvUrlToUse);
        const text = await response.text();
        
        const lines = text.trim().split('\n');
        const [header, ...rows] = lines;
        
        const parsedData = rows.map(line => {
          const [project, flat, status] = line.split(',');
          return { 
            project: project?.trim() || 'Unknown Project', 
            flat: flat?.trim() || '', 
            status: status?.trim().toLowerCase() || 'sold' 
          };
        });
        
        // Group by project, then by floor
        const groupedByProject: {[project: string]: GroupedFlats} = {};
        
        parsedData.forEach(({ project, flat, status }) => {
          if (!project || !flat) return;
          
          if (!groupedByProject[project]) {
            groupedByProject[project] = {};
          }
          
          const floor = flat[0] + 'F';
          
          if (!groupedByProject[project][floor]) {
            groupedByProject[project][floor] = [];
          }
          
          groupedByProject[project][floor].push({ flat, status });
        });
        
        setProjectData(groupedByProject);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching CSV data:", err);
        setError("Failed to load flat availability data");
        setLoading(false);
      }
    };

    fetchData();
    // Auto-refresh every 30 seconds
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
    <div className="w-full" id="floorplans">
      {Object.keys(projectData).map((project) => (
        <div key={project} className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">{project}</h2>
          
          {Object.entries(projectData[project])
            .sort(([a], [b]) => b.localeCompare(a)) // Sort floors in descending order
            .map(([floor, flats]) => (
              <div key={floor} className="flex flex-wrap items-center mb-3">
                <div className="font-bold w-12">{floor}</div>
                <div className="flex flex-wrap gap-2">
                  {flats.map((flat, idx) => (
                    <div 
                      key={idx}
                      className={`
                        p-3 rounded-lg w-16 text-center text-white font-medium
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
      ))}
    </div>
  );
};

export default FloorPlanView;
