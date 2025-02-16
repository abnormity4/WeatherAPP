<div class="input-wrapper">
    <input type="text" placeholder="Search...">
    <div class="icon-wrapper">
        <svg viewBox="0 0 24 24">
            <g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g>
        </svg>
    </div>
</div>

<style>

svg {
    fill: var(--primary-700);
    width: 70%;
    height: 70%;
}

input:focus + .icon-wrapper svg {
    fill: var(--secondary-500);
    transition: var(--tr-primary);
}

input:focus, input:hover {
    box-shadow: 0 0 0 2px var(--secondary-500);
    transition: var(--tr-primary);
}

input, input::placeholder {
    font-style: italic;
}

input::placeholder {
    color: var(--primary-700)
}

input {
    height: 80%;
    outline: none;
    border: none;
    border-radius: var(--radius-s);
    padding: 8px 8px 8px 32px;
    background-color: var(--primary-600);
    color: var(--secondary-500);
}

.input-wrapper, .icon-wrapper {
    display: flex;
    align-items: center;
}

.icon-wrapper {
    position: absolute;
    width: 6%;
    margin-left: 8px;
    justify-content: center;
}

.input-wrapper {
    position: relative;
    height: 100%;
}

</style>

<script lang="ts">
    
</script>