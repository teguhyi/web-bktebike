<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const { location, title, description, allLocations } = data;

    // Group locations by city for cleaner footer links
    const locationsByCity = allLocations.reduce((acc, loc) => {
        if (!acc[loc.city]) acc[loc.city] = [];
        acc[loc.city].push(loc);
        return acc;
    }, {});
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
</svelte:head>

<div
    class="min-h-screen bg-background-light dark:bg-background-dark font-display flex flex-col"
>
    <!-- Navbar Placeholder (Optional or import actual Navbar if needed, keeping it clean as per request) -->
    <nav
        class="bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10 sticky top-0 z-50"
    >
        <div
            class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
        >
            <a href="/" class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-2xl"
                    >electric_bike</span
                >
                <span
                    class="font-extrabold text-[#101718] dark:text-white text-lg"
                    >BKTeBike</span
                >
            </a>
            <a
                href="/"
                class="text-sm font-semibold text-primary hover:underline"
                >Kembali ke Beranda</a
            >
        </div>
    </nav>

    <main class="flex-grow">
        <!-- Hero / Main Content -->
        <section
            class="px-6 py-12 md:py-20 lg:py-24 max-w-4xl mx-auto text-center"
        >
            <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
            >
                <span class="material-symbols-outlined text-sm"
                    >location_on</span
                >
                Area Layanan: {location.name}
            </div>

            <h1
                class="text-4xl md:text-5xl lg:text-6xl font-black text-[#101718] dark:text-white mb-6 leading-tight"
            >
                Pusat Servis Sepeda Listrik di <span class="text-primary"
                    >{location.name}</span
                >
            </h1>

            <p
                class="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
                Kabar gembira untuk warga <strong>{location.name}</strong>! Kini
                Anda tidak perlu repot membawa sepeda listrik rusak ke bengkel
                yang jauh. Teknisi profesional BKTeBike siap datang atau
                melayani perbaikan sepeda listrik kesayangan Anda dengan cepat,
                aman, dan memuaskan.
            </p>

            <div
                class="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
                <a
                    href="https://wa.me/6287877217070?text=Halo,%20saya%20di%20{encodeURIComponent(
                        location.name,
                    )}%20mau%20servis%20sepeda%20listrik"
                    class="flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-accent hover:bg-red-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                    <span class="material-symbols-outlined">chat</span>
                    Panggil Teknisi Sekarang
                </a>
            </div>
        </section>

        <!-- Why Choose Us Grid (Short) -->
        <section class="px-6 py-12 bg-white dark:bg-[#13282c]">
            <div
                class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                <div
                    class="p-6 rounded-xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800 text-center"
                >
                    <span
                        class="material-symbols-outlined text-primary text-4xl mb-4"
                        >timer</span
                    >
                    <h3
                        class="font-bold text-lg mb-2 text-[#101718] dark:text-white"
                    >
                        Respon Cepat
                    </h3>
                    <p class="text-sm text-slate-500">
                        Tim kami siap merespon panggilan darurat di area {location.name}.
                    </p>
                </div>
                <div
                    class="p-6 rounded-xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800 text-center"
                >
                    <span
                        class="material-symbols-outlined text-primary text-4xl mb-4"
                        >engineering</span
                    >
                    <h3
                        class="font-bold text-lg mb-2 text-[#101718] dark:text-white"
                    >
                        Teknisi Ahli
                    </h3>
                    <p class="text-sm text-slate-500">
                        Berpengalaman menangani berbagai merk sepeda listrik.
                    </p>
                </div>
                <div
                    class="p-6 rounded-xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800 text-center"
                >
                    <span
                        class="material-symbols-outlined text-primary text-4xl mb-4"
                        >verified_user</span
                    >
                    <h3
                        class="font-bold text-lg mb-2 text-[#101718] dark:text-white"
                    >
                        Transparan
                    </h3>
                    <p class="text-sm text-slate-500">
                        Biaya jelas di awal, tidak ada biaya tersembunyi.
                    </p>
                </div>
            </div>
        </section>

        <!-- Internal Linking Area -->
        <section class="max-w-7xl mx-auto px-6 py-16">
            <h2
                class="text-2xl font-bold text-[#101718] dark:text-white mb-8 text-center"
            >
                Jangkauan Layanan Kami Lainnya
            </h2>
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm"
            >
                {#each Object.entries(locationsByCity) as [city, locs]}
                    <div class="flex flex-col gap-3">
                        <h3
                            class="font-bold text-primary uppercase tracking-wider text-xs"
                        >
                            {city}
                        </h3>
                        <ul class="flex flex-col gap-2">
                            {#each locs as loc}
                                <li>
                                    <a
                                        href="/area/{loc.slug}"
                                        class="text-slate-600 dark:text-slate-400 hover:text-accent hover:underline decoration-accent underline-offset-2 transition-colors"
                                    >
                                        Servis Sepeda Listrik {loc.name}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </section>
    </main>

    <!-- Simple Footer -->
    <footer
        class="py-8 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-gray-200 dark:border-gray-800"
    >
        <p>&copy; 2024 BKTeBike. Solusi E-Bike Terbaik.</p>
    </footer>
</div>
