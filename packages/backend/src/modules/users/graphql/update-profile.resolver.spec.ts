import { Test } from '@nestjs/testing'

import { User } from '~prisma/generated/client'
import { PrismaService } from '~common/prisma.service'

import { UsersService } from '../users.service'
import { SocialLinkKind } from '../enums/social-link-kind.enum'
import { UpdateProfileInput, UpdateProfileResolver } from './update-profile.resolver'

describe('UpdateProfileResolver', () => {
  let resolver: UpdateProfileResolver
  let updateUserSpy: jest.SpyInstance

  const USER = { name: 'Test User' } as User

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UsersService,
        UpdateProfileResolver,
        { provide: PrismaService, useValue: { user: {}, page: {}, link: {} } },
      ],
    }).compile()

    resolver = moduleRef.get<UpdateProfileResolver>(UpdateProfileResolver)

    const usersService = moduleRef.get<UsersService>(UsersService)
    updateUserSpy = jest.spyOn(usersService, 'update').mockImplementation(async () => USER)
  })

  describe('updateProfile', () => {
    test('should update with empty object if input is empty', async () => {
      const response = await resolver.updateProfile(USER, {})
      expect(response).toStrictEqual({ user: USER })

      expect(updateUserSpy).toHaveBeenCalledTimes(1)
      expect(updateUserSpy).toHaveBeenLastCalledWith(USER, {})
    })

    test('should update name if provided', async () => {
      const input = {
        name: 'New name',
      } as UpdateProfileInput

      const response = await resolver.updateProfile(USER, input)
      expect(response).toStrictEqual({ user: USER })

      expect(updateUserSpy).toHaveBeenCalledTimes(1)
      expect(updateUserSpy).toHaveBeenLastCalledWith(USER, {
        name: input.name,
      })
    })

    test('should update avatarUrl if provided', async () => {
      const input = {
        avatarUrl: 'http://image.com',
      } as UpdateProfileInput

      const response = await resolver.updateProfile(USER, input)
      expect(response).toStrictEqual({ user: USER })

      expect(updateUserSpy).toHaveBeenCalledTimes(1)
      expect(updateUserSpy).toHaveBeenLastCalledWith(USER, {
        avatarUrl: input.avatarUrl,
      })
    })

    test('should update avatarUrl to null if sent to null', async () => {
      const input = {
        avatarUrl: null,
      } as UpdateProfileInput

      const response = await resolver.updateProfile(USER, input)
      expect(response).toStrictEqual({ user: USER })

      expect(updateUserSpy).toHaveBeenCalledTimes(1)
      expect(updateUserSpy).toHaveBeenLastCalledWith(USER, {
        avatarUrl: input.avatarUrl,
      })
    })

    test('should map social link if received an username', async () => {
      const input = {
        social: [{ kind: SocialLinkKind.FACEBOOK, value: 'my-username' }],
      } as UpdateProfileInput

      const response = await resolver.updateProfile(USER, input)
      expect(response).toStrictEqual({ user: USER })

      expect(updateUserSpy).toHaveBeenCalledTimes(1)
      expect(updateUserSpy).toHaveBeenLastCalledWith(USER, {
        social: [
          {
            kind: SocialLinkKind.FACEBOOK,
            username: 'my-username',
            url: 'https://www.facebook.com/my-username',
          },
        ],
      })
    })

    test('should map social link if received an url', async () => {
      const input = {
        social: [{ kind: SocialLinkKind.TWITTER, value: 'https://www.twitter.com/my-username' }],
      } as UpdateProfileInput

      const response = await resolver.updateProfile(USER, input)
      expect(response).toStrictEqual({ user: USER })

      expect(updateUserSpy).toHaveBeenCalledTimes(1)
      expect(updateUserSpy).toHaveBeenLastCalledWith(USER, {
        social: [
          {
            kind: SocialLinkKind.TWITTER,
            username: 'my-username',
            url: 'https://www.twitter.com/my-username',
          },
        ],
      })
    })
  })
})
