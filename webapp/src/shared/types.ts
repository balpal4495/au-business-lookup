
export interface Business {
  Abn: string;
  AbnStatus: string;
  isCurrent: boolean;
  Name: string;
  NameType: string;
  PostCode: string;
  Score: number;
  State: string;
}

export interface NameSearchResponse {
  Message: string;
  Names: Business[];
}