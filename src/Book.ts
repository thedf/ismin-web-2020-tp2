// export interface Book {
//   title: string;
//   author: string;
//   date: Date;
// }

import { IsString, IsDate } from 'class-validator';

export class Book {
  @IsString()
  title: string;
  @IsString()
  author: string;
  @IsString()
  date: string;
}
