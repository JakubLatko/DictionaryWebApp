import type { wordObj } from "@/scripts/wordTypes";

function randomKey() {
	let number = Math.round(Math.random() * 1000);
	return number;
}

const WordComponent = ({ res }: { res: wordObj | undefined }) => {
	return (
		<>
			{res?.word ? (
				<section className="syntaxAndPronouncation">
					<div>
						<h1>{res?.word}</h1>
						{res?.phonetic ? <p>{res?.phonetic}</p> : null}
					</div>
					{res?.phonetic ? (
						<button>
							<img src="/assets/images/icon-play.svg" alt="" />
						</button>
					) : null}
				</section>
			) : null}
			{res?.meanings?.map((meaning) => (
				<span key={randomKey()}>
					{meaning.partOfSpeech === "noun" ? (
						<section className="nounSection" key={randomKey()}>
							<div className="sectionTitle">
								<h2>
									<i>{meaning.partOfSpeech}</i>
								</h2>
							</div>
							<h3 className="subheading">Meaning</h3>
							<ul>
								{meaning.definitions.map((element) => (
									<span key={randomKey()}>
										<li>{element.definition}</li>
									</span>
								))}
							</ul>
							{meaning.synonyms.length < 1 ? null : (
								<div className="synonyms">
									<h3 className="subheading">Synonyms</h3>
									<ul>
										{meaning.synonyms.map((element) => (
											<li key={randomKey()}>{element}</li>
										))}
									</ul>
								</div>
							)}
						</section>
					) : null}

					{meaning.partOfSpeech === "verb" ? (
						<section className="verbSection" key={randomKey()}>
							<div className="sectionTitle">
								<h2>
									<i>{meaning.partOfSpeech}</i>
								</h2>
							</div>
							<h3 className="subheading">Meaning</h3>
							<ul>
								{meaning.definitions.map((element) => (
									<li key={randomKey()}>
										<p>{element.definition}</p>
										<blockquote>
											{element.example}
										</blockquote>
									</li>
								))}
							</ul>
						</section>
					) : null}
					{meaning.partOfSpeech === "interjection" ||
					"pronoun" ||
					"adjective" ||
					"adverb" ||
					"preposition" ||
					"conjuction" ? (
						<section className="verbSection" key={randomKey()}>
							<div className="sectionTitle">
								<h2>
									<i>{meaning.partOfSpeech}</i>
								</h2>
							</div>
							<h3 className="subheading">Meaning</h3>
							<ul>
								{meaning.definitions.map((element) => (
									<li key={randomKey()}>
										<p>{element.definition}</p>
										<blockquote>
											{element.example}
										</blockquote>
									</li>
								))}
							</ul>
						</section>
					) : null}
				</span>
			))}
			{res?.word ? (
				<section className="sourceSection">
					<h3>Source</h3>
					<ul>
						{res?.sources?.map((source) => (
							<li className="sourceLink" key={randomKey()}>
								<a href={source}>{source}</a>
								<img
									src="/assets/images/icon-new-window.svg"
									alt=""
								/>
							</li>
						))}
					</ul>
				</section>
			) : null}
		</>
	);
};

export default WordComponent;
