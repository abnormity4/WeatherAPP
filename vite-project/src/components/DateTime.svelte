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

    //to-do вызвать функцию сразу после загрузки сайта а не через 1000ms. для этого нужно вообще переписать всё наверное

</script>

<div>
    <h3>date/time component</h3>

    <p>
      {dateState[0]}:{dateState[1]}
    </p>
</div>

