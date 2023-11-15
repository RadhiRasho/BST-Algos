import { spawn } from 'bun';
import { glob } from 'glob';
import inquirer from 'inquirer';

const args = process.argv.slice(2);

const fileName = args[0];

if (!fileName) throw new Error('Please provide a file name to run the script');

const files = await glob(`src/*${fileName}*.ts`);

let file = files[0];

if (files.length > 1) {
	const answer = await inquirer.prompt<{ file: string }>({
		type: 'list',
		name: 'file',
		message: 'Multiple files found, Select a file to run:',
		choices: files,
	});

	file = answer.file;
}

const bunFile = Bun.file(file);

const exist = await bunFile.exists();

if (exist && bunFile.name) {
	spawn(['bun', bunFile.name]);
} else {
	throw new Error(`File src/${fileName}.ts does not exist`);
}
