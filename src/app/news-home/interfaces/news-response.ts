export interface NewsResponse {
  id: number;
  headline: string;
  url: string;
  image: string;
  shortDescription: string;
  date: Date;
  saved?: boolean;
  savedDate?: Date;
  saving?: boolean;
}
