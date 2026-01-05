<script lang="ts">
    interface Props {
        image: string;
        category: string;
        title: string;
        excerpt: string;
        link?: string;
        categoryColor?: string;
    }

    let {
        image,
        category,
        title,
        excerpt,
        link = "#",
        categoryColor = "bg-primary",
    }: Props = $props();
</script>

<article
    class="group relative flex flex-col bg-white dark:bg-[#1a2c30] rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-100 dark:border-slate-800"
>
    <!-- Image Container -->
    <div class="aspect-[16/9] w-full overflow-hidden bg-slate-200 relative">
        <div
            class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            role="img"
            aria-label={title}
            style="background-image: url('{image}');"
        ></div>
        <div
            class="absolute top-4 left-4 {categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"
        >
            {category}
        </div>
    </div>
    <!-- Content -->
    <div class="flex flex-col flex-grow p-6 md:p-8">
        <h3
            class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-200"
        >
            {title}
        </h3>
        <p
            class="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6 line-clamp-3"
        >
            {excerpt}
        </p>
        <!-- Action Link -->
        <div class="mt-auto">
            <a
                class="inline-flex items-center text-primary font-bold text-sm hover:text-accent transition-colors duration-200"
                href={link}
            >
                <span>Baca Selengkapnya</span>
                <span
                    class="material-symbols-outlined ml-1 text-lg group-hover:translate-x-1 transition-transform duration-200"
                    >arrow_forward</span
                >
            </a>
        </div>
    </div>
</article>
