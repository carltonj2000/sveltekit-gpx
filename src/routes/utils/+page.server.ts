import { dir, filename, filepath, prettierFilename, prettierFilepath } from '../consts';
import { readFile, writeFile } from 'fs/promises';
import prettier from 'prettier';

export const actions = {
  prettier: async () => {
    try {
      const data = (await readFile(filepath, 'utf-8')).toString();
      //const formatted = prettier.format(data, { parser: 'html' });
      const formatted = prettier.format(data, { filepath: filename });
      await writeFile(prettierFilepath, formatted, 'utf-8');
      return { dir, filename, prettierFilename };
    } catch (error) {
      return { dir, filename, prettierFilename, error };
    }
  }
};
