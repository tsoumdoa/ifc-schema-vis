<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  let value = '';
  const dispatch = createEventDispatcher();
  let inputElement: HTMLInputElement;

  function handleInput() {
    dispatch('search', value);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      inputElement?.focus();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="search-container">
  <input
    bind:this={inputElement}
    type="text"
    bind:value
    on:input={handleInput}
    placeholder="Search (⌘K)"
    class="search-input"
  />
</div>

<style>
  .search-container {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
  }
  .search-input {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 200px;
  }
</style>
