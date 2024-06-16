import { Controller, Get, Param } from '@nestjs/common';
import { GenerateVideoService } from './generate-video.service';

@Controller('generate-video')
export class GenerateVideoController {
	constructor(private readonly generateVideoService: GenerateVideoService) {}

	@Get()
	generate() {
		return this.generateVideoService.generate();
	}

	@Get(':phrase')
	generateWithPhrase(@Param('phrase') phrase: string) {
		return this.generateVideoService.generateWithPhrase(phrase);
	}
}
