export interface Job {
  id: string;
  title: string;
  description: string;
  resolved: boolean;
  result?: string;
}
