<script lang="ts">
    export let data: any;
    let content = '';
    let status = data.ticket.status;
  </script>
  
  <div class="px-40 flex flex-1 justify-center py-5 min-h-screen bg-slate-50" style="font-family: Inter, 'Noto Sans', sans-serif;">
    <div class="flex flex-col max-w-[960px] flex-1">
      <h2 class="text-[#0d141c] text-[28px] font-bold text-center pt-5">Enter Ticket ID</h2>
  
      <div class="flex max-w-[480px] gap-4 px-4 py-3 mx-auto">
        <input class="form-input w-full rounded-lg border border-[#cedbe8] bg-slate-50 h-14 p-[15px]" value={`Ticket #${data.ticket.id}`} readonly />
      </div>
  
      <form method="POST" use:enhance action="?/comment" class="max-w-[480px] mx-auto">
        <div class="px-4 py-3">
          <textarea bind:value={content} name="content" placeholder="Add a comment" class="form-input w-full rounded-lg border border-[#cedbe8] bg-slate-50 min-h-36 p-[15px]"></textarea>
        </div>
        <div class="flex px-4 py-3 justify-center">
          <button class="h-10 px-4 bg-[#0d80f2] text-slate-50 text-sm font-bold rounded-lg">Submit</button>
        </div>
      </form>
  
      <h3 class="text-[#0d141c] text-lg font-bold px-4 pb-2 pt-4">Attached Files</h3>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {#each data.ticket.attachments as a}
        <div class="flex flex-col gap-3">
          <a href={a.url} target="_blank" class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" style={`background-image:url('${a.url}')`}></a>
        </div>
        {/each}
      </div>
  
      <form method="POST" enctype="multipart/form-data" action="?/attach" class="flex px-4 py-3 justify-center gap-3">
        <input type="file" name="files" multiple class="hidden" id="files-input" />
        <label for="files-input" class="flex h-10 px-4 bg-[#e7edf4] text-[#0d141c] gap-2 text-sm font-bold rounded-lg items-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"/></svg>
          <span>Attach Files</span>
        </label>
        <button class="h-10 px-4 bg-[#0d80f2] text-white rounded-lg">Upload</button>
      </form>
  
      <h3 class="text-[#0d141c] text-lg font-bold px-4 pb-2 pt-4">Ticket Status</h3>
      <form method="POST" action="?/status" class="flex flex-wrap gap-3 p-4 justify-center">
        {#each ['REJECTED','PENDING','PROCESSING','COMPLETED'] as s}
        <label class="text-sm font-medium flex items-center justify-center rounded-lg border border-[#cedbe8] px-4 h-11 text-[#0d141c] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#0d80f2] relative cursor-pointer">
          {s}
          <input type="radio" name="status" value={s} class="invisible absolute" checked={status===s} on:change={() => status=s} />
        </label>
        {/each}
        <div class="w-full flex justify-center pt-2">
          <button class="h-10 px-6 bg-[#0d80f2] text-white rounded-lg">Save</button>
        </div>
      </form>
  
      <div class="px-4 py-6 max-w-[720px] mx-auto">
        <h4 class="font-bold mb-2">Recent comments</h4>
        <ul class="space-y-3">
          {#each data.ticket.comments as c}
            <li class="rounded-lg border border-[#cedbe8] bg-white p-3">
              <div class="text-sm text-[#49739c]">{new Date(c.createdAt).toLocaleString()}</div>
              <div class="text-sm text-[#0d141c]"><strong>{c.author.name}:</strong> {c.content}</div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>