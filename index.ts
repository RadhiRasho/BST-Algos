import { isCancel, select, text } from "@clack/prompts";
import { Glob, spawn } from "bun";

const args = process.argv.slice(2);

let fileName = args[0];

if (!fileName) {
	const answer = await text({
		message: "Enter a file name to run (full or partial)",
		validate: (value) => {
			if (typeof value !== "string") {
				return "Please enter a string";
			}
		},
	});

	if (isCancel(answer)) {
		process.exit(0);
	}

	fileName = answer;
}

const glob = new Glob(`src/*${fileName}*`);

const files = await Array.fromAsync(glob.scan());

let file: string = files[0];

type Options = {
	value: string;
	label: string;
	hint?: string;
};

const options = files.map((file) => {
	return { value: file, label: file };
});

if (files.length > 1) {
	const answer = await select<Options[], string>({
		message: "Multiple files found, Select a file to run:",
		options: options,
	});

	if (isCancel(answer)) {
		process.exit(0);
	}

	file = answer;
}

const bunFile = Bun.file(file);

const exists = await bunFile.exists();

if (exists && bunFile.name) {
	spawn({
		cmd: ["bun", bunFile.name],
		stdin: "inherit",
		stdout: "inherit",
		stderr: "inherit",
	});
} else {
	throw new Error(`File src/${fileName}.ts does not exist`);
}
