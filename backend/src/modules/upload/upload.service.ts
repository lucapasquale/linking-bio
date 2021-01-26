import * as cloudinary from 'cloudinary'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class UploadService {
  constructor(private configService: ConfigService) {
    cloudinary.v2.config({
      cloud_name: this.configService.get('cloudinary.cloudName'),
      api_key: this.configService.get('cloudinary.apiKey'),
      api_secret: this.configService.get('cloudinary.apiSecret'),
    })
  }

  async uploadImage(imageBuffer: string) {
    const { url } = await cloudinary.v2.uploader.upload(imageBuffer, {
      resource_type: 'image',
      fetch_format: 'auto',
    })

    return url
  }
}
