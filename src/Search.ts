import { IsString, IsNumber, IsEmpty, IsOptional } from 'class-validator';

export class Search {
  @IsString()
  term: string;
}

export class PaginationAndAuthor {
  @IsString()
  @IsOptional()
  author: string;
  @IsNumber()
  @IsOptional()
  after: number;
  @IsNumber()
  @IsOptional()
  count: number;
}
