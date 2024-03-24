import type { wordObj } from "@/scripts/wordTypes";

function randomKey() {
	return Math.random();
}

const WordComponent = ({ res }: { res: wordObj | undefined }) => {
	return (
		<>
			<section className="syntaxAndPronouncation">
				<div>
					<h1>{res?.word}</h1>
					<p>{res?.phonetic}/</p>
				</div>
				<button>
					<img src="/assets/images/icon-play.svg" alt="" />
				</button>
			</section>

			{res?.meanings.map((meaning) => (
				<>
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
									<>
										<li key={randomKey()}>
											{element.definition}
										</li>
									</>
								))}
							</ul>

							<div className="synonyms">
								<h3 className="subheading">Synonyms</h3>
								<ul>
									{meaning.definitions.map((element) => (
										<li key={randomKey()}>
											{element.synonyms}
										</li>
									))}
								</ul>
							</div>
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
					{meaning.partOfSpeech === "interjection" ? (
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
				</>
			))}
			<section className="sourceSection">
				<h3>Source</h3>
				<div>
					{res?.sources.map((source) => (
						<span key={randomKey()}>
							<a href={source}>{source}</a>
							<img
								src="/assets/images/icon-new-window.svg"
								alt=""
							/>
						</span>
					))}
				</div>
			</section>
			{/* <section className="verbSection">
				<div className="sectionTitle">
					<h2>
						<i>verb</i>
					</h2>
				</div>

				<h3 className="subheading">Meaning</h3>
				<ul>
					<li>
						<p>To type on a computer keyboard.</p>
						<blockquote>
							“Keyboarding is the part of this job I hate the
							most.”
						</blockquote>
					</li>
				</ul>
			</section> */}
		</>
	);
};

export default WordComponent;
