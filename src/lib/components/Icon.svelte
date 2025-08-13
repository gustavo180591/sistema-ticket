<script lang="ts">export let name: 'bell'|'plus'|'paperclip'|'search'|'caret-down'|'logoA'|'logoB' = 'logoA'; export let size = 20;</script>
<!-- Simplificado: algunos íconos inline -->
{#if name === 'bell'}
<svg xmlns="http://www.w3.org/2000/svg" {size} {size} fill="currentColor" viewBox="0 0 256 256" width={size} height={size}><path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06Z"/></svg>
{:else if name === 'plus'}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={size} height={size}><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"/></svg>
{:else if name === 'paperclip'}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={size} height={size}><path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"/></svg>
{:else if name === 'search'}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={size} height={size}><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/></svg>
{:else if name === 'caret-down'}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={size} height={size}><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>
{:else}
<!-- logos minimal -->
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size}><path d="M13.8 30.57C16.72 29.88 20.22 29.48 24 29.48c3.78 0 7.28.4 10.17 1.09L24.85 7.36c-.39-.63-1.3-.63-1.7 0L6.64 33.84c1.36-1.07 4.44-2.6 7.16-3.27Z" fill="currentColor"/></svg>
{/if}