<script lang="ts">
  import { BROWSER } from 'esm-env';
  import {
    lazyload,
    AppHead,
    NavbarKit,
    Footer,
    RouteTransition,
    ScreenBlock,
    YandexMetrikaInit
  } from 'daks-svelte';

  import type { LayoutData } from './$types';
  export let data: LayoutData;

  import '../app.css';
  import '$iconify';

  import { app, nav } from '$configs';

  if (BROWSER) document.lazyload ??= lazyload();
</script>

<AppHead {app} />

<RouteTransition
  class="flex flex-col grow"
  refresh={data.refresh}
  mode="1">
  <slot />
</RouteTransition>

<Footer {...nav.footer} />

<NavbarKit
  {...nav.navbar}
  centered />

<ScreenBlock />

<YandexMetrikaInit />
