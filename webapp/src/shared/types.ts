
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

export interface AbnLookupResponse {
  Abn: string;
  AbnStatus: string;
  Acn: string;
  AddressDate: string;
  AddressPostcode: string;
  AddressState: string;
  BusinessName: string[];
  EntityName: string;
  EntityTypeCode: string;
  EntityTypeName: string;
  Gst: string | null;
  Message: string;
}