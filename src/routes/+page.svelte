<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import ServicesSection from "$lib/components/ServicesSection.svelte";
    import TipsSection from "$lib/components/TipsSection.svelte";
    import ContactSection from "$lib/components/ContactSection.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <title>BKTeBike - Solusi E-Bike Terbaik & Spesialis Servis #1</title>
    <meta
        name="description"
        content="Layanan perbaikan sepeda listrik profesional untuk mengembalikan performa e-bike kesayangan Anda. Cepat, terpercaya, dan bergaransi. Spesialis baterai, dinamo, dan kelistrikan."
    />
</svelte:head>

<div
    class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display antialiased"
>
    <Navbar />

    <main>
        <Hero />
        <ServicesSection />
        <TipsSection />
        <ContactSection />
    </main>

    <Footer />
</div>
