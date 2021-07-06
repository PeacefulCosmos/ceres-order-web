import { ID } from '@datorama/akita';

export const status = {
  pending: 'Pending',
  occupied: 'Occupied',
};

export interface TableSet {
  tableIndex: number;
  seatIndex: string;
  status: string;
}

export interface TableSets {
  _id: string;
  tableSets: Array<TableSet>;
  companyId: number;
}
export function createTableSets(params: Partial<TableSets>) {
  return {} as TableSets;
}
