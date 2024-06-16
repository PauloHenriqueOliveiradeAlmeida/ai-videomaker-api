import { Test, TestingModule } from '@nestjs/testing';
import { GenerateVideoService } from './generate-video.service';

describe('GenerateVideoService', () => {
	let service: GenerateVideoService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [GenerateVideoService],
		}).compile();

		service = module.get<GenerateVideoService>(GenerateVideoService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
