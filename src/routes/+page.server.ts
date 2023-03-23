import getter from '$lib/assets/images/presentation';

import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => ({
  ...(await getter())
});
