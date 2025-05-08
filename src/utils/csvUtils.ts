
export interface FlatData {
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

export async function fetchCSVData(url: string): Promise<FlatData[]> {
  try {
    const response = await fetch(url);
    const text = await response.text();
    return parseCSV(text);
  } catch (error) {
    console.error("Error fetching or parsing CSV data:", error);
    return [];
  }
}

function parseCSV(csvText: string): FlatData[] {
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
        description: entry.description || ""
      };
    });
}
