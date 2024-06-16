import { Module } from '@nestjs/common';
import { GenerateVideoService } from './generate-video.service';
import { GenerateVideoController } from './generate-video.controller';

@Module({
	controllers: [GenerateVideoController],
	providers: [GenerateVideoService],
})
export class GenerateVideoModule {}
