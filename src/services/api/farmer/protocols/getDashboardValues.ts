export interface IGetDashboardValuesResponse {
  totalFarms: number;
  totalArea: number;
  totalPerState: {
      AC: number;
      AL: number;
      AP: number;
      AM: number;
      BA: number;
      CE: number;
      DF: number;
      ES: number;
      GO: number;
      MA: number;
      MT: number;
      MS: number;
      MG: number;
      PA: number;
      PB: number;
      PR: number;
      PE: number;
      PI: number;
      RJ: number;
      RN: number;
      RS: number;
      RO: number;
      RR: number;
      SC: number;
      SP: number;
      SE: number;
      TO: number;
  },
  totalPerCulture: {
      soy: number;
      corn: number;
      cotton: number;
      coffee: number;
      sugarCane: number;
  },
  totalAreaAgriculturalAndVegetation: {
      agricultural: number;
      vegetation: number;
  }
}
