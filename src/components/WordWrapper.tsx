import { useState, type FormEvent } from "react";
import WordContent from "@/components/WordContent";
import "../styles/main.css";

import type { wordObj } from "@/scripts/wordTypes";

const searchWord = async (word: string) => {
	let returnData;
	const response = await fetch(
		`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
	);
	await response.json().then((data) => {
		returnData = data;
	});
	return returnData;
};

let word: string;
let res: wordObj | undefined;
async function formHandler() {
	const wordInput = document.querySelector<HTMLInputElement>("#wordInput");
	if (!wordInput) return;
	word = wordInput.value;
	let response: any = await searchWord(word);
	wordInput.value = "";
	return response;
}

const WordComponent = () => {
	let [response, setResponse] = useState();
	return (
		<main>
			<form
				className="wordForm"
				onSubmit={async (e) => {
					e.preventDefault();
					const formRes = await formHandler();
					setResponse(formRes);
					if (!formRes) {
						return;
					}
					console.log(formRes);
					res = {
						meanings: formRes[0].meanings,
						phonetic: formRes[0].phonetic,
						sources: formRes[0].sourceUrls,
						word: formRes[0].word,
						audio: formRes[0].phonetics[0]?.audio,
					};
					console.log(res);
				}}>
				<input
					type="text"
					name="wordInput"
					id="wordInput"
					required
					placeholder="Search for any word..."
				/>
				<button type="submit">
					<img src="/assets/images/icon-search.svg" alt="" />
				</button>
			</form>

			{res !== undefined ? (
				<WordContent res={res} key={res.word}></WordContent>
			) : (
				<div>Nie ma resa</div>
			)}
		</main>
	);
};

export default WordComponent;
