<script lang="ts">
    export let title = 'Ticketing App';
    export let user: App.PageData['user'] = null;
    export let showNav = false;
  </script>
  
  <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3">
    <div class="flex items-center gap-4 text-[#0d141c]">
      <div class="size-4"><!-- logo -->
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8 30.57C16.72 29.88 20.22 29.48 24 29.48c3.78 0 7.28.4 10.17 1.09L24.85 7.36c-.39-.63-1.3-.63-1.7 0L6.64 33.84c1.36-1.07 4.44-2.6 7.16-3.27Z" fill="currentColor"/></svg>
      </div>
      <h2 class="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">{title}</h2>
    </div>
  
    {#if showNav}
    <div class="flex flex-1 justify-end gap-8">
      <div class="flex items-center gap-9">
        <a class="text-[#0d141c] text-sm font-medium leading-normal" href="/tickets">Dashboard</a>
        <a class="text-[#0d141c] text-sm font-medium leading-normal" href="/tickets">Tickets</a>
        <a class="text-[#0d141c] text-sm font-medium leading-normal" href="#">Reports</a>
        <a class="text-[#0d141c] text-sm font-medium leading-normal" href="#">People</a>
      </div>
      <button class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e7edf4] text-[#0d141c] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
        <span class="sr-only">Notifications</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06Z"/></svg>
      </button>
      <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style="background-image:url('https://i.pravatar.cc/100');"></div>
    </div>
    {/if}
  </header>