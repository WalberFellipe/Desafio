export enum STATUS_TYPE {
  TO_DO = 'TO_DO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface TaskDTO {
  id: string;
  name: string;
  description?: string;
  status_id: number;
  status_key: STATUS_TYPE;
  created_at: string;
  updated_at: string;
}
