import { Module } from '@nestjs/common';
import { DisputaService } from './disputa.service';
import { DisputaController } from './disputa.controller';

@Module({
  controllers: [DisputaController],
  providers: [DisputaService]
})
export class DisputaModule { }
