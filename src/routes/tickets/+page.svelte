<script lang="ts">
    export let data: { tickets: any[]; order: 'asc'|'desc' };
    let order = data.order;
  </script>
  
  <div class="px-40 flex flex-1 justify-center py-5 min-h-screen bg-slate-50" style="font-family: Inter, 'Noto Sans', sans-serif;">
    <div class="flex flex-col max-w-[960px] flex-1">
      <div class="p-4"><p class="text-[#0d141c] text-[32px] font-bold">Tickets</p></div>
      <div class="pb-3">
        <div class="flex border-b border-[#cedbe8] px-4 gap-8">
          <a class="flex items-center border-b-[3px] border-b-[#0d80f2] text-[#0d141c] pb-[13px] pt-4" href="?status=ALL">All</a>
          <a class="flex items-center border-b-[3px] border-b-transparent text-[#49739c] pb-[13px] pt-4" href="?status=PENDING">Open</a>
          <a class="flex items-center border-b-[3px] border-b-transparent text-[#49739c] pb-[13px] pt-4" href="?status=COMPLETED">Closed</a>
        </div>
      </div>
  
      <div class="px-4 py-3 @container">
        <div class="flex overflow-hidden rounded-lg border border-[#cedbe8] bg-slate-50">
          <table class="flex-1 w-full">
            <thead>
              <tr class="bg-slate-50">
                <th class="px-4 py-3 text-left text-[#0d141c] w-[160px] text-sm font-medium">Ticket ID</th>
                <th class="px-4 py-3 text-left text-[#0d141c] text-sm font-medium">Subject</th>
                <th class="px-4 py-3 text-left text-[#0d141c] w-60 text-sm font-medium">Status</th>
                <th class="px-4 py-3 text-left text-[#0d141c] w-[200px] text-sm font-medium">Assignee</th>
                <th class="px-4 py-3 text-left text-[#0d141c] w-[200px] text-sm font-medium">Created</th>
              </tr>
            </thead>
            <tbody>
              {#each data.tickets as t}
              <tr class="border-t border-t-[#cedbe8] hover:bg-slate-100/40">
                <td class="h-[72px] px-4 py-2 text-[#0d141c] text-sm">#{t.id}</td>
                <td class="h-[72px] px-4 py-2 text-[#49739c] text-sm"><a href={`/tickets/${t.id}`} class="underline decoration-dotted">{t.subject}</a></td>
                <td class="h-[72px] px-4 py-2 text-sm">
                  <span class="inline-flex h-8 px-4 items-center rounded-lg bg-[#e7edf4] text-[#0d141c]">{t.status}</span>
                </td>
                <td class="h-[72px] px-4 py-2 text-[#49739c] text-sm">{t.assignee?.name ?? '—'}</td>
                <td class="h-[72px] px-4 py-2 text-[#49739c] text-sm">{new Date(t.createdAt).toISOString().slice(0,10)}</td>
              </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
  
      <div class="flex justify-end gap-3 px-4 py-3">
        <a class="flex h-10 px-4 items-center rounded-lg bg-[#e7edf4] text-[#0d141c] text-sm font-bold" href={`?order=${order==='asc'?'desc':'asc'}`}>Orden: {order.toUpperCase()}</a>
      </div>
    </div>
  </div>