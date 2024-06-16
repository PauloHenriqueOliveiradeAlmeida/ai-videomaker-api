import { Test, TestingModule } from '@nestjs/testing';
import { GenerateVideoController } from './generate-video.controller';
import { GenerateVideoService } from './generate-video.service';

describe('GenerateVideoController', () => {
	let controller: GenerateVideoController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [GenerateVideoController],
			providers: [GenerateVideoService],
		}).compile();

		controller = module.get<GenerateVideoController>(GenerateVideoController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
