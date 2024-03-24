export interface definition {
	definition: string;
	example?: string;
	synonyms: string[];
}

export interface meanings {
	partOfSpeech: string;
	definitions: definition[];
}

export interface wordObj {
	word: string;
	phonetic: string;
	meanings: meanings[];
	sources: string[];
	audio: string;
}
