import { Module } from '@nestjs/common';
import { GenerateVideoModule } from './generate-video/generate-video.module';

@Module({
	imports: [GenerateVideoModule],
})
export class AppModule {}
