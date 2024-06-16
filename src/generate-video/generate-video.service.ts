import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateVideoService {
	generate() {
		return `This action returns all generateVideo`;
	}

	generateWithPhrase(phrase: string) {
		return `This action returns a #${phrase} generateVideo`;
	}
}
