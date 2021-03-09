import { Test } from '@nestjs/testing'

import { User, Page } from '@prisma/client'
import { PrismaService } from '~common/prisma.service'

import { PagesService } from '../pages.service'
import { PageTheme } from '../enums/page-theme.enum'
import { UpdatePageInput, UpdatePageResolver } from './update-page.resolver'

describe('UpdateProfileResolver', () => {
  let resolver: UpdatePageResolver
  let findPageByUserSpy: jest.SpyInstance
  let pageUpdateSpy: jest.SpyInstance

  const USER = { id: 1 } as User
  const testPage = { slug: 'my-page', theme: PageTheme.LIGHT } as Page

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        PagesService,
        UpdatePageResolver,
        { provide: PrismaService, useValue: { user: {}, page: {}, link: {} } },
      ],
    }).compile()

    resolver = moduleRef.get<UpdatePageResolver>(UpdatePageResolver)

    const pagesService = moduleRef.get<PagesService>(PagesService)
    findPageByUserSpy = jest
      .spyOn(pagesService, 'findOneByUserId')
      .mockImplementation(async () => testPage)

    pageUpdateSpy = jest.spyOn(pagesService, 'update').mockImplementation(async () => testPage)
  })

  describe('updatePage', () => {
    test('should update page with empty input', async () => {
      const response = await resolver.updatePage(USER, {})
      expect(response).toStrictEqual({ page: testPage })

      expect(findPageByUserSpy).toHaveBeenCalledTimes(1)
      expect(findPageByUserSpy).toHaveBeenLastCalledWith(USER.id)

      expect(pageUpdateSpy).toHaveBeenCalledTimes(1)
      expect(pageUpdateSpy).toHaveBeenLastCalledWith(testPage, {})
    })

    test('should update page theme', async () => {
      const input = {
        theme: PageTheme.DARK,
      } as UpdatePageInput

      const response = await resolver.updatePage(USER, input)
      expect(response).toStrictEqual({ page: testPage })

      expect(findPageByUserSpy).toHaveBeenCalledTimes(1)
      expect(findPageByUserSpy).toHaveBeenLastCalledWith(USER.id)

      expect(pageUpdateSpy).toHaveBeenCalledTimes(1)
      expect(pageUpdateSpy).toHaveBeenLastCalledWith(testPage, input)
    })
  })
})
