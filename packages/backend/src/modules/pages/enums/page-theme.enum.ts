import { registerEnumType } from '@nestjs/graphql'

export enum PageTheme {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
  RED = 'RED',
  PINK = 'PINK',
  TAN = 'TAN',
  FOREST = 'FOREST',
}

registerEnumType(PageTheme, { name: 'PageTheme' })
