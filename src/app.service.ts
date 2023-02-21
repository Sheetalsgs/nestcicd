import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'dockerized app deployment done for one web app ';
  }
}
