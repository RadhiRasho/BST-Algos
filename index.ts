import { spawn } from 'bun';
import { glob } from 'glob';
import inquirer from 'inquirer';

const args = process.argv.slice(2);

const fileName = args[0];

if (!fileName) throw new Error('Please provide a file name to run the script');

const files = await glob(`src/*${fileName}*.ts`);

let file = files[0];

if (files.length > 1) {
	const answer = await inquirer.prompt({
		type: 'list',
		name: 'name',
		message: 'Multiple files found, Select a file to run:',
		choices: files,
	});

	file = answer.name;
}

const bunFile = Bun.file(file);

console.log('Running file:', bunFile.name);

const exist = await bunFile.exists();

if (exist && bunFile.name) {
	spawn(['bun', bunFile.name]);
} else {
	throw new Error(`File src/${fileName}.ts does not exist`);
}
