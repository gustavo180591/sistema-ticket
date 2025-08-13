<script lang="ts">export let form: any;</script>

<div class="relative flex size-full min-h-screen flex-col bg-slate-50 overflow-x-hidden" style="font-family: Inter, 'Noto Sans', sans-serif;">
  <div class="layout-container flex h-full grow flex-col">
    <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3">
      <div class="flex items-center gap-4 text-[#0d141c]">
        <div class="size-4"><svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 11.27c0 2.74-4.16 5.13-10.31 6.36C39.84 18.87 44 21.26 44 24s-4.16 5.13-10.31 6.36C39.84 31.6 44 33.99 44 36.73 44 40.74 35.05 44 24 44S4 40.74 4 36.73c0-2.74 4.16-5.13 10.31-6.36C8.16 29.13 4 26.74 4 24s4.16-5.13 10.31-6.36C8.16 16.4 4 14.01 4 11.27 4 7.26 12.95 4 24 4s20 3.26 20 7.27Z" fill="currentColor"/></svg></div>
        <h2 class="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">TicketingApp</h2>
      </div>
    </header>

    <div class="px-40 flex flex-1 justify-center py-5">
      <div class="flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
        <h2 class="text-[#0d141c] text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Create your account</h2>
        <form method="POST" class="space-y-4">
          <div class="flex max-w-[480px] items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#0d141c] text-base font-medium leading-normal pb-2">Full name</p>
              <input name="name" required placeholder="Enter your full name" class="form-input w-full rounded-lg border border-[#cedbe8] bg-slate-50 h-14 p-[15px]" value={form?.name ?? ''} />
            </label>
          </div>
          <div class="flex max-w-[480px] items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#0d141c] text-base font-medium leading-normal pb-2">Email</p>
              <input name="email" type="email" required placeholder="Enter your email" class="form-input w-full rounded-lg border border-[#cedbe8] bg-slate-50 h-14 p-[15px]" value={form?.email ?? ''} />
            </label>
          </div>
          <div class="flex max-w-[480px] items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-[#0d141c] text-base font-medium leading-normal pb-2">Password</p>
              <input name="password" type="password" required placeholder="Enter your password" class="form-input w-full rounded-lg border border-[#cedbe8] bg-slate-50 h-14 p-[15px]" />
            </label>
          </div>
          {#if form?.error}
          <p class="px-4 text-sm text-red-600">{form.error}</p>
          {/if}
          <div class="flex px-4 py-3">
            <button class="flex h-12 px-5 flex-1 bg-[#0d80f2] text-slate-50 text-base font-bold rounded-lg" type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>