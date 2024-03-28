export interface definition {
	definition: string;
	example?: string;
}

export interface meanings {
	partOfSpeech: string;
	definitions: definition[];
	synonyms: string[];
}

export interface wordObj {
	word?: string;
	phonetic?: string;
	meanings?: meanings[];
	sources?: string[];
	audio?: string;
	title?: string;
	message?: string;
	resolution?: string;
}
