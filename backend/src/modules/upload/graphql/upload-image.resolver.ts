import { UseGuards } from '@nestjs/common'
import { Resolver, Mutation, Args, ObjectType, Field } from '@nestjs/graphql'

import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'

import { UploadService } from '../upload.service'

@ObjectType()
class UploadImageResponse {
  @Field(() => String)
  slug: string
}

@Resolver()
export class UploadImageResolver {
  constructor(private uploadService: UploadService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => UploadImageResponse)
  async uploadImage(@Args('image') imageBuffer: string) {
    const slug = await this.uploadService.uploadImage(imageBuffer)

    return { slug }
  }
}
