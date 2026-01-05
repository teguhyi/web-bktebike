<script lang="ts">
    interface Props {
        icon: string;
        title: string;
        description: string;
        tag?: string;
    }

    let { icon, title, description, tag }: Props = $props();
</script>

<div
    class="group p-6 rounded-xl border border-[#dae4e7] dark:border-gray-800 bg-background-light dark:bg-[#13282c] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
>
    <div
        class="w-12 h-12 rounded-lg bg-white dark:bg-white/5 border border-[#dae4e7] dark:border-gray-700 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-colors"
    >
        <span
            class="material-symbols-outlined text-primary group-hover:text-white text-3xl transition-colors"
            >{icon}</span
        >
    </div>
    {#if tag}
        <div class="flex items-center gap-2 mb-2">
            <h4 class="text-xl font-bold text-[#101718] dark:text-white">
                {title}
            </h4>
            <span
                class="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-accent text-white rounded-full"
                >{tag}</span
            >
        </div>
    {:else}
        <h4 class="text-xl font-bold text-[#101718] dark:text-white mb-2">
            {title}
        </h4>
    {/if}
    <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {description}
    </p>
</div>
