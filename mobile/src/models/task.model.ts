export type TaskModel = {
  id: string;
  name: string;
  email: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
};

export enum STATUS_TYPE {
  TO_DO = 'TO_DO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface TaskDTO {
  id: string;
  name: string;
  description?: string;
  status: number;
  status_key: STATUS_TYPE;
  created_at: string;
  updated_at: string;
}
