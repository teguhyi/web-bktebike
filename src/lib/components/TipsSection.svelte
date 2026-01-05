<script lang="ts">
    import ArticleCard from "./ArticleCard.svelte";

    const articles = [
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoxu9um-YKlSUzrcL0ACPNa8V6GiJm_FcCg971pmIjkFzrVy9vp3SK-NYXdDn4XuTNbxqPsnVY98a4mLSnTjfTUAKAxAal6CKlPyyowquN7PSkh8Hr8LSsr-0wlLtpuPRmTP6KrRei-sbFVlgTU6ysuPXejj321rowA3LKMdfigBrtuCYQeznuaVBuqmHjoCKHNCbT9T-rspM-HJU0x9fwoBzHBX8etJAYX9l6A0rWiXs8cV3T2KgKmnlc8AOMOHv5WQXQ8NA_oxU",
            category: "Baterai",
            title: "Cara Merawat Baterai Agar Awet",
            excerpt:
                "Tips sederhana untuk memperpanjang umur baterai sepeda listrik Anda dan menjaga performa maksimal dalam jangka panjang.",
            categoryColor: "bg-primary",
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe_CGN9UBcdbCXDJl86jc4qNdw1mfu0Ylcae6lo23gi2dwRZAaYpx8SZ1zrXBh_3lBR4OYW9_M_K32smLB0-NJZyhODPBJeuAGCEgzSgERSAvywc7byL3C6QZCjrz17-ur_gT1P-wIhd6zKz0ZQJ-FWaXyybsMGt-ZVCyQztOCFb6782Q0FN_qYfjCz074fOYublBbYwgJtiWnM--jQwn4iLlqkY7YZ-JzoPiVbrNImhax1uJKbhO530BCmOjOL0iEIZO1pSzdVpI",
            category: "Keamanan",
            title: "Tekanan Ban yang Ideal",
            excerpt:
                "Menjaga tekanan ban sangat penting untuk kenyamanan, keamanan, dan efisiensi baterai saat berkendara di berbagai medan.",
            categoryColor: "bg-primary",
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM4bktX_1NJxRQZJby92BBYu-mihg00gykRy2LxCS6c_EuO9aWaHQvdEJrknzEojtFLMrXS6WzXkUvVo4_WCADvvFYaweNakDhLXc4oXWHscEDwVGALgWGcyi9qcTrqSKMXs4HjHd8g-fS2T1bM55UJLVyhty0HpgrmYp7a8p2fHFFola240twvQhRi7oytvSp3t7AlRwfWP1cf5DGUWT0XIQifYHSeJCgIOHG-SXsu7WGneYRCWi-eGOQVyfWqupe1Z6M5-MHRIA",
            category: "Penting",
            title: "Kapan Harus Servis Rutin?",
            excerpt:
                "Kenali tanda-tanda sepeda listrik Anda membutuhkan servis profesional segera sebelum kerusakan parah terjadi.",
            categoryColor: "bg-accent",
        },
    ];
</script>

<section id="tips" class="w-full px-4 py-16 md:px-10 lg:px-20 lg:py-24">
    <div class="max-w-7xl mx-auto flex flex-col">
        <!-- Section Header -->
        <div
            class="flex flex-col items-center justify-center text-center mb-12 lg:mb-16"
        >
            <span
                class="text-accent font-bold tracking-wider text-sm uppercase mb-2"
                >Blog & Tips</span
            >
            <h2
                class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight"
            >
                Tips Perawatan E-Bike
            </h2>
            <div class="h-1 w-20 bg-primary mt-6 rounded-full"></div>
        </div>
        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each articles as article}
                <ArticleCard
                    image={article.image}
                    category={article.category}
                    title={article.title}
                    excerpt={article.excerpt}
                    categoryColor={article.categoryColor}
                />
            {/each}
        </div>
        <!-- Bottom Action -->
        <div class="mt-16 flex justify-center">
            <button
                class="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300"
            >
                <span>Lihat Semua Artikel</span>
                <span class="material-symbols-outlined text-sm">grid_view</span>
            </button>
        </div>
    </div>
</section>
