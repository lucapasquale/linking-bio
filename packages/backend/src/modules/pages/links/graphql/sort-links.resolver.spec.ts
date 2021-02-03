import { Test } from '@nestjs/testing'

import { User, Page, Link } from '~prisma/generated/client'
import { PrismaService } from '~common/prisma.service'

import { SortLinksResolver } from './sort-links.resolver'
import { PagesService } from '../../pages.service'
import { LinksService } from '../links.service'

describe('SortLinksResolver', () => {
  let resolver: SortLinksResolver

  let findPageByUserSpy: jest.SpyInstance
  let findLinksFromPageSpy: jest.SpyInstance
  let updateLinkSpy: jest.SpyInstance

  const USER = { id: '1' } as User
  const testPage = { id: '11' } as Page
  const testLinks = [
    { id: '101', title: 'Link 1' },
    { id: '102', title: 'Link 2' },
  ] as Link[]

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        PagesService,
        LinksService,
        SortLinksResolver,
        { provide: PrismaService, useValue: { user: {}, page: {}, link: {} } },
      ],
    }).compile()

    resolver = moduleRef.get<SortLinksResolver>(SortLinksResolver)

    const pagesService = moduleRef.get<PagesService>(PagesService)
    findPageByUserSpy = jest
      .spyOn(pagesService, 'findOneByUserId')
      .mockImplementation(async () => testPage)

    const linksService = moduleRef.get<LinksService>(LinksService)
    findLinksFromPageSpy = jest
      .spyOn(linksService, 'findFromPage')
      .mockImplementation(async () => testLinks)

    updateLinkSpy = jest
      .spyOn(linksService, 'updateLink')
      .mockImplementation(async () => testLinks[0])
  })

  describe('sortLinks', () => {
    test('should update sortOrder of each link', async () => {
      const response = await resolver.sortLinks(USER, [testLinks[1].id, testLinks[0].id])
      expect(response).toStrictEqual({ page: testPage })

      expect(findPageByUserSpy).toHaveBeenCalledTimes(1)
      expect(findPageByUserSpy).toHaveBeenLastCalledWith(USER.id)

      expect(findLinksFromPageSpy).toHaveBeenCalledTimes(1)
      expect(findLinksFromPageSpy).toHaveBeenLastCalledWith(testPage.id)

      expect(updateLinkSpy).toHaveBeenCalledTimes(2)
      expect(updateLinkSpy).toHaveBeenNthCalledWith(1, testLinks[1], { sortOrder: 0 })
      expect(updateLinkSpy).toHaveBeenNthCalledWith(2, testLinks[0], { sortOrder: 1 })
    })

    test('should throw if not sending all linkIds', async () => {
      const links = [testLinks[1].id]

      await expect(resolver.sortLinks(USER, links)).rejects.toThrowError('invalid links')

      expect(updateLinkSpy).toHaveBeenCalledTimes(0)
    })

    test('should throw if sending more than existing linkIds', async () => {
      const links = [testLinks[1].id, testLinks[0].id, 'INVALID_ID']

      await expect(resolver.sortLinks(USER, links)).rejects.toThrowError('invalid links')
      expect(updateLinkSpy).toHaveBeenCalledTimes(0)
    })

    test('should throw if sending ids not found on page link ids', async () => {
      const links = [testLinks[1].id, 'INVALID_ID']

      await expect(resolver.sortLinks(USER, links)).rejects.toThrowError('invalid links')
      expect(updateLinkSpy).toHaveBeenCalledTimes(0)
    })

    test('should throw if sending same id multiple times', async () => {
      const links = [testLinks[1].id, testLinks[1].id]

      await expect(resolver.sortLinks(USER, links)).rejects.toThrowError('invalid links')
      expect(updateLinkSpy).toHaveBeenCalledTimes(0)
    })
  })
})
