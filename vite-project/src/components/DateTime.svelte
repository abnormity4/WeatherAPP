<script lang="ts">
    import { onDestroy } from "svelte";

    const dateUpdater = setInterval(() => {
        const date = new Date();
        const pad = (a: number): string => a.toString().padStart(2, '0')
        dateState = [pad(date.getHours()), pad(date.getMinutes()), pad(date.getSeconds())]
    }, 1000);
    
    let dateState: string[] = $state([]);

    onDestroy(() => {
        clearInterval(dateUpdater);
    })

</script>

<div>
    <h1>Date and Time:</h1>

    <p>
      {dateState[0]}:{dateState[1]}
    </p>
</div>