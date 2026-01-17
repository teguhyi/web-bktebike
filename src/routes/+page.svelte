<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import ServicesSection from "$lib/components/ServicesSection.svelte";
    import TipsSection from "$lib/components/TipsSection.svelte";
    import ContactSection from "$lib/components/ContactSection.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <title
        >Virel Ebike - Servis Sepeda Listrik Jakarta Timur | Bengkel E-Bike
        Terpercaya</title
    >
    <meta
        name="description"
        content="Bengkel servis sepeda listrik terpercaya di Jakarta Timur. Spesialis perbaikan baterai, dinamo, controller e-bike. Layanan cepat, bergaransi, teknisi berpengalaman. Hubungi 085947364465."
    />
    <meta
        name="keywords"
        content="servis sepeda listrik, bengkel sepeda listrik, ganti baterai sepeda listrik, perbaikan dinamo e-bike, servis e-bike Jakarta, bengkel e-bike Jakarta Timur, sparepart sepeda listrik"
    />
    <meta name="author" content="Virel Ebike" />
    <link rel="canonical" href="https://bktebike.com/" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://bktebike.com/" />
    <meta
        property="og:title"
        content="Virel Ebike - Servis Sepeda Listrik Jakarta Timur | Bengkel E-Bike Terpercaya"
    />
    <meta
        property="og:description"
        content="Bengkel servis sepeda listrik terpercaya di Jakarta Timur. Spesialis perbaikan baterai, dinamo, controller e-bike."
    />
    <meta property="og:image" content="https://bktebike.com/hero-ebike.webp" />
    <meta property="og:locale" content="id_ID" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://bktebike.com/" />
    <meta
        name="twitter:title"
        content="Virel Ebike - Servis Sepeda Listrik Jakarta Timur"
    />
    <meta
        name="twitter:description"
        content="Bengkel servis sepeda listrik terpercaya. Spesialis baterai, dinamo, controller."
    />
    <meta name="twitter:image" content="https://bktebike.com/hero-ebike.webp" />

    <!-- JSON-LD Structured Data -->
    {@html `<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Virel Ebike",
        "description": "Bengkel servis sepeda listrik terpercaya di Jakarta Timur. Spesialis perbaikan baterai, dinamo, dan controller e-bike.",
        "url": "https://bktebike.com",
        "telephone": "+6285947364465",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kp. Rawa Bebek Gang Sejahtera No. 53 RT. 5 RW.1",
            "addressLocality": "Jakarta Timur",
            "addressRegion": "DKI Jakarta",
            "postalCode": "13950",
            "addressCountry": "ID"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -6.202224,
            "longitude": 106.966232
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "17:00"
            }
        ],
        "priceRange": "$$",
        "image": "https://bktebike.com/hero-ebike.webp",
        "areaServed": {
            "@type": "City",
            "name": "Jakarta"
        },
        "serviceType": ["Servis Sepeda Listrik", "Perbaikan Baterai E-Bike", "Servis Dinamo", "Ganti Controller", "Sparepart Sepeda Listrik"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Layanan Servis Sepeda Listrik",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ganti Baterai Sepeda Listrik"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Servis Dinamo E-Bike"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Perbaikan Controller"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Panggilan Teknisi ke Rumah"
                    }
                }

            ]
        }
    }
    </script>`}
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
