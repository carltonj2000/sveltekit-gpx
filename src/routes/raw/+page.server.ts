import type { PageServerLoad } from './$types';
import { readFile } from 'fs/promises';
import { Window } from 'happy-dom';
import { filepath } from '../consts';

export const load = (async () => {
  const window = new Window({
    settings: {
      disableJavaScriptFileLoading: true,
      disableJavaScriptEvaluation: true,
      disableCSSFileLoading: true,
      disableIframePageLoading: true,
      enableFileSystemHttpRequests: false
    }
  });
  const document = window.document;

  const data = (await readFile(filepath)).toString();

  const re = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
  const matches = re.exec(data);
  document.write(data);
  const hrefs = [...document.querySelectorAll('a')];
  const hrefsf = hrefs.filter((h) => h._url.pathname.includes('uploads'));
  const hrefsfg = hrefsf.filter((h) => h._url.pathname.includes('gpx'));

  return { code: hrefsfg.join('<br />') };
}) satisfies PageServerLoad;
