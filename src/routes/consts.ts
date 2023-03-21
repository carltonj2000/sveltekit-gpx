import path from 'path';
export const dir = '/renderws/carltonData/cj2023/code/svelte/sveltekit-gpx/data/';
export const filename = 'page.html';
export const filepath = path.join(dir, filename);

const fileparts = filename.split('.');
export const prettierFilename = fileparts[0] + '-pretty.' + fileparts[1];
export const prettierFilepath = path.join(dir, prettierFilename);
