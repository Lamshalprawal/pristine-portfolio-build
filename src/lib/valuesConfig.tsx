// Mock API response for company statistics
export interface CompanyStats {
  projectsDelivered: number;
  happyClients: number;
  globalOffices: number;
  yearsExperience: number;
}

export const mockApiResponse: CompanyStats = {
  projectsDelivered: 5,
  happyClients: 4,
  globalOffices: 4,
  yearsExperience: 12,
};

// Mock API function to simulate data fetching
export const fetchCompanyStats = async (): Promise<CompanyStats> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockApiResponse;
};
