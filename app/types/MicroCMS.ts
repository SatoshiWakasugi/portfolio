export interface MicroCMSContents<T = unknown> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
