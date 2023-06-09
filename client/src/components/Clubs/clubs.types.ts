export interface Club {
  id: string;
  name: string;
  foundationDate: string;
  avatar: string;
  favorite: boolean;
}
export interface ClubsResponse {
  results: Club[];
  total: number;
}
