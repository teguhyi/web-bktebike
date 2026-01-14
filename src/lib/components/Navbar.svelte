<script lang="ts">
  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header
  class="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#f0f4f5] dark:border-white/10"
>
  <div
    class="flex items-center justify-between px-6 py-4 lg:px-20 max-w-[1440px] mx-auto"
  >
    <!-- Logo -->
    <div class="flex items-center gap-3">
      <div
        class="flex items-center justify-center size-10 rounded-xl bg-primary/10 text-primary"
      >
        <span class="material-symbols-outlined text-2xl">electric_bike</span>
      </div>
      <h2
        class="text-[#101718] dark:text-white text-xl font-extrabold tracking-tight"
      >
        Virel Ebike
      </h2>
    </div>

    <!-- Desktop Navigation Links -->
    <nav class="hidden md:flex items-center gap-8">
      <a
        class="text-[#101718] dark:text-gray-200 text-sm font-semibold hover:text-[#00b4d8] transition-colors"
        href="/">Home</a
      >
      <a
        class="text-[#101718] dark:text-gray-200 text-sm font-semibold hover:text-[#00b4d8] transition-colors"
        href="#services">Layanan</a
      >
      <a
        class="text-[#101718] dark:text-gray-200 text-sm font-semibold hover:text-[#00b4d8] transition-colors"
        href="#tips">Tips</a
      >
      <a
        class="text-[#101718] dark:text-gray-200 text-sm font-semibold hover:text-[#00b4d8] transition-colors"
        href="#contact">Kontak</a
      >
    </nav>

    <!-- Mobile Menu Icon -->
    <button
      onclick={toggleMenu}
      class="md:hidden text-[#101718] dark:text-white"
      aria-label="Toggle menu"
    >
      <span class="material-symbols-outlined"
        >{isMenuOpen ? "close" : "menu"}</span
      >
    </button>
  </div>

  <!-- Mobile Menu Dropdown -->
  {#if isMenuOpen}
    <div
      class="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2"
    >
      <a
        href="/"
        onclick={() => (isMenuOpen = false)}
        class="text-[#101718] dark:text-white font-semibold hover:text-primary transition-colors"
        >Home</a
      >
      <a
        href="#services"
        onclick={() => (isMenuOpen = false)}
        class="text-[#101718] dark:text-white font-semibold hover:text-primary transition-colors"
        >Layanan</a
      >
      <a
        href="#tips"
        onclick={() => (isMenuOpen = false)}
        class="text-[#101718] dark:text-white font-semibold hover:text-primary transition-colors"
        >Tips</a
      >
      <a
        href="#contact"
        onclick={() => (isMenuOpen = false)}
        class="text-[#101718] dark:text-white font-semibold hover:text-primary transition-colors"
        >Kontak</a
      >
    </div>
  {/if}
</header>
