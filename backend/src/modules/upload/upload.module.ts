import { Module } from '@nestjs/common'

import { UploadService } from './upload.service'
import { UploadImageResolver } from './graphql/upload-image.resolver'

@Module({
  imports: [],
  providers: [UploadService, UploadImageResolver],
  exports: [],
})
export class UploadModule {}
