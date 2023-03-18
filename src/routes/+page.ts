import getter from '$lib/assets/images/presentation';

import type { PageLoad } from './$types';
export const load: PageLoad = async () => ({
  ...(await getter())
});
