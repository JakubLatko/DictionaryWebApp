import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

function SelectTest() {
	function changeFont() {
		const trigger = document.querySelector("#selectValue");
		const fontType = trigger?.innerHTML;
		if (!fontType) return;
		if (fontType === "Serif") {
			document.body.style.fontFamily = "Lora";
		}
		if (fontType === "Sans-Serif") {
			document.body.style.fontFamily = "Inter";
		}
		if (fontType === "Mono") {
			document.body.style.fontFamily = "Inconsolata";
		}
		document.body.setAttribute("data-font-type", fontType);
	}
	return (
		<Select onValueChange={changeFont}>
			<SelectTrigger className="w-[180px]">
				<SelectValue
					placeholder="Font"
					id="selectValue"
					defaultValue={"serif"}
				/>
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="serif">Serif</SelectItem>
				<SelectItem value="sans-serif">Sans-Serif</SelectItem>
				<SelectItem value="mono">Mono</SelectItem>
			</SelectContent>
		</Select>
	);
}

export default SelectTest;
