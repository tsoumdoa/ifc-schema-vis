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
    padding: 8px 12px;
    border: 3px solid #000;
    border-radius: 0;
    background: #fff;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    font-weight: bold;
    width: 250px;
    box-shadow: 4px 4px 0px #000;
    transition: none;
  }
  .search-input:focus {
    outline: none;
    background: #f0f0f0;
    box-shadow: 6px 6px 0px #000;
  }
  .search-input::placeholder {
    color: #666;
    font-weight: normal;
  }
</style>
