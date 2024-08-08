import { Controller, Get, Logger, Post, type LogLevel } from '@nestjs/common'

@Controller('logger')
class LoggerController {
  private static readonly levels = new Map([
    ['verbose', ['fatal', 'error', 'warn', 'log', 'debug', 'verbose']],
    ['debug', ['fatal', 'error', 'warn', 'log', 'debug']],
    ['log', ['fatal', 'error', 'warn', 'log']],
    ['warn', ['fatal', 'error', 'warn']],
    ['error', ['fatal', 'error']],
    ['fatal', ['fatal']]
  ])

  @Get()
  public getLevel (): string {
    const levels = Object.keys(LoggerController.levels)

    return (levels.find(level => Logger.isLevelEnabled(level as LogLevel))) ?? 'off'
  }

  @Post()
  public setLevel (level: string): void {
    const levels = LoggerController.levels.get(level)

    Logger.overrideLogger(levels as LogLevel[])
  }
}

export default LoggerController
export { LoggerController }
