<script lang="ts">
  import { Contacts, YandexMetrikaHit, YandexMap } from 'daks-svelte';

  import microdata from '$configs/microdata';

  const data = {
    locations: [
      {
        geometry: [55.646035, 37.666438],
        properties: {
          iconContent: '<strong class="tracking-wider">СУ 363</strong>',
          balloonContentHeader: 'Строительное Управление № 363',
          balloonContentBody: '<img class=mx-auto src=/images/ymap.webp width=192 height=192 />',
          balloonContentFooter:
            '<div class=text-center>время работы: 9 <sup>00</sup> -- 19 <sup>00</sup></div>'
        },
        options: {
          preset: 'islands#nightStretchyIcon'
        }
      }
    ],
    state: {
      center: [55.646035, 37.666438],
      zoom: 17,
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch'],
      controls: ['zoomControl', 'fullscreenControl']
    }
  };

  const title = 'СУ 363 • Контакты';
  const description = 'Контакты Строительного Управления № 363';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="grow gap-8"
  itemprop="mainContentOfPage">
  <header class="content mb-0">
    <h1 class="title">Контакты</h1>
  </header>

  <Contacts
    class="content"
    {microdata} />

  <div
    class="
      content flex grow
      h-[40vmax] xs:h-[35vmax] sm:h-[30vmax] md:h-[25vmax] lg:h-auto">
    <YandexMap
      class="
        w-full min-h-full overflow-hidden
        border-4 border-slate-400"
      {data} />
  </div>
</main>
