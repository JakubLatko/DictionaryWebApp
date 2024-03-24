export const searchWord = async (word: string) => {
	const response = await fetch(
		`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
	);
	await response.json().then((data) => {
		console.log(data);
	});
};
