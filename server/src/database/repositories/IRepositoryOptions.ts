export interface IRepositoryOptions {
  language: string;
  database: any;
  currentUser?: any;
  currentTenant?: any;
  session?: any;
  bypassPermissionValidation?: any;
  headers?: any; // Add this line to include the request object
}
