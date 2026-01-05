<script lang="ts">
    import ServiceCard from "./ServiceCard.svelte";

    const services = [
        {
            icon: "extension",
            title: "Sparepart",
            description:
                "Sedia lengkap sparepart original & universal: Throttle, Controller, Charger, dll.",
            tag: "Hot",
        },
        {
            icon: "battery_charging_full",
            title: "Perbaikan Baterai",
            description:
                "Diagnosa kesehatan baterai, penggantian sel drop, balancing BMS, dan perakitan pack baru.",
        },
        {
            icon: "cyclone",
            title: "Servis Dinamo",
            description:
                "Pembersihan kumparan, penggantian bearing/hall sensor, dan perbaikan suara kasar pada motor.",
        },
        {
            icon: "memory",
            title: "Perbaikan Controller",
            description:
                "Servis modul controller mati total, error code, mosfet terbakar, dan instalasi controller universal.",
        },
        {
            icon: "electrical_services",
            title: "Kelistrikan & Kabel",
            description:
                "Urut kabel body, perbaikan soket kendor, lampu mati, klakson, dan indikator speedometer.",
        },
        {
            icon: "tire_repair",
            title: "Ganti Ban",
            description:
                "Sedia ban tubeless dan ban dalam berbagai ukuran ring (14, 16, 10 inch) khusus sepeda listrik.",
        },
    ];
</script>

<section id="services" class="py-16 bg-white dark:bg-[#0f2023] relative">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
            class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
            <div class="max-w-2xl">
                <h2
                    class="text-primary font-bold text-lg mb-2 uppercase tracking-wider"
                >
                    Layanan Kami
                </h2>
                <h3
                    class="text-3xl md:text-4xl font-extrabold text-[#101718] dark:text-white"
                >
                    Servis Profesional & Terpercaya
                </h3>
                <p class="mt-4 text-slate-600 dark:text-slate-400 text-lg">
                    Daftar layanan lengkap untuk segala jenis kerusakan sepeda
                    listrik Anda. Transparan, cepat, dan bergaransi.
                </p>
            </div>
            <a
                class="hidden md:flex items-center text-primary font-bold hover:text-accent transition-colors gap-1 group"
                href="#contact"
            >
                Lihat Selengkapnya
                <span
                    class="material-symbols-outlined transition-transform group-hover:translate-x-1"
                    >arrow_forward</span
                >
            </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each services as service}
                <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    tag={service.tag}
                />
            {/each}
        </div>

        <div class="mt-12 flex justify-center md:hidden">
            <button
                class="w-full h-12 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors"
            >
                Lihat Semua Layanan
            </button>
        </div>
    </div>
</section>
