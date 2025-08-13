<script lang="ts">
    export let form: any;
  </script>
  
  <div class="relative flex size-full min-h-screen flex-col bg-slate-50 overflow-x-hidden" style="font-family: Inter, 'Noto Sans', sans-serif;">
    <div class="layout-container flex h-full grow flex-col">
      <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3">
        <div class="flex items-center gap-4 text-[#0d141c]">
          <div class="size-4">{#await Promise.resolve() then _}
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8 30.57C16.72 29.88 20.22 29.48 24 29.48c3.78 0 7.28.4 10.17 1.09L24.85 7.36c-.39-.63-1.3-.63-1.7 0L6.64 33.84c1.36-1.07 4.44-2.6 7.16-3.27Z" fill="currentColor"/></svg>
          {/await}</div>
          <h2 class="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">Ticketing App</h2>
        </div>
      </header>
  
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
          <h2 class="text-[#0d141c] text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Log in to your account</h2>
  
          <form method="POST" class="space-y-4">
            <div class="flex max-w-[480px] items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#0d141c] text-base font-medium leading-normal pb-2">Email</p>
                <input name="email" required type="email" placeholder="Enter your email" class="form-input w-full rounded-lg text-[#0d141c] bg-[#e7edf4] h-14 placeholder:text-[#49739c] p-4" value={form?.email ?? ''} />
              </label>
            </div>
  
            <div class="flex max-w-[480px] items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#0d141c] text-base font-medium leading-normal pb-2">Password</p>
                <input name="password" required type="password" placeholder="Enter your password" class="form-input w-full rounded-lg text-[#0d141c] bg-[#e7edf4] h-14 placeholder:text-[#49739c] p-4" />
              </label>
            </div>
  
            {#if form?.error}
            <p class="px-4 text-sm text-red-600">{form.error}</p>
            {/if}
  
            <div class="flex px-4 py-3">
              <button class="flex h-10 px-4 flex-1 bg-[#0d80f2] text-slate-50 text-sm font-bold rounded-lg" type="submit">Log In</button>
            </div>
          </form>
  
          <a class="text-[#49739c] text-sm leading-normal pb-3 pt-1 px-4 text-center underline" href="/auth/register">Don't have an account? Sign up</a>
        </div>
      </div>
    </div>
  </div>