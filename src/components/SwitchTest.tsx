import { Switch } from "./ui/switch";

let checkedVar: boolean;

const icon: string = "/assets/images/icon-moon.svg";
function themeSwitch() {
	checkedVar = !checkedVar;
	if (checkedVar) {
		document.body.setAttribute("data-color-scheme", "light");
	} else if (!checkedVar) {
		document.body.setAttribute("data-color-scheme", "dark");
	}
}

const SwitchTest = () => {
	return (
		<>
			<Switch onCheckedChange={themeSwitch}></Switch>

			<img src={icon} />
		</>
	);
};
export default SwitchTest;
