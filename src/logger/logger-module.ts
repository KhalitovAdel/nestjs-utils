import { type DynamicModule, Module } from '@nestjs/common'
import LoggerController from './logger.controller'

@Module({})
export class LoggerModule {
  static register (): DynamicModule {
    return {
      module: LoggerModule,
      controllers: [LoggerController]
    }
  }
}
