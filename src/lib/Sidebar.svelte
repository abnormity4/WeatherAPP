<div class="sidebar-wrapper">
    <div class="sidebar">
        <label class="sidebar-option" for="home" data-tooltip="Home">
            <div>
                <input name="option" type="radio" id="home">
                <svg viewBox="0 0 24 24" fill="none">
                        <path d="M22 10.2V11.725C22 15.6258 22 17.5763 20.8284 18.7881C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.7881C2 17.5763 2 15.6258 2 11.725V10.2C2 7.91549 2 6.77128 2.5192 5.82274C3.0384 4.87421 3.98695 4.28551 5.88403 3.10813L7.88403 1.86687C9.88939 0.62229 10.8921 0 12 0C13.1079 0 14.1106 0.62229 16.116 1.86687L18.116 3.10812C20.0131 4.28551 20.9616 4.87421 21.4808 5.82274" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M15 16H9" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                </svg>                
            </div>
        </label>
        <label class="sidebar-option" for="bookmark" data-tooltip="Saved">
            <div>
                <input name="option" type="radio" id="bookmark">
                <svg viewBox="0 0 24 24" fill="none">
                        <path d="M3 9.1V14.09C3 17.18 3 18.73 3.73 19.41C4.08 19.73 4.52 19.93 4.99 19.99C5.98 20.1 7.13 19.08 9.44 17.05C10.46 16.14 10.97 15.69 11.56 15.57C11.85 15.52 12.15 15.52 12.44 15.57C13.03 15.69 13.54 16.14 14.56 17.05C16.86 19.08 18.02 20.1 19 19.99C19.47 19.93 19.91 19.73 20.26 19.41C21 18.73 21 17.18 21 14.09V9.1C21 4.81 21 2.66 19.68 1.33C18.36 0 16.24 0 12 0C7.76 0 5.64 0 4.32 1.33C3.51 2.15 3.2 3.27 3.08 5" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M15 4H9" stroke="#1C274D" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </div>
        </label>
    </div>
</div>

<style>

svg * {
    stroke: var(--primary-500);
}

.sidebar-option:hover > div::after {
    content: '';
    position: absolute;
    height: 20px;
    width: 8px;
    left: 50px;
    top: 35%;
    transform: rotate(-45deg);
}

.sidebar-option:hover::after {
    content: attr(data-tooltip);
    color: white;
    position: absolute;
    padding: 8px;
    left: calc(100% + 5px);
    top: 5px;
    font-weight: 300;
    height: calc(100% - 20%);
}

.sidebar-option:hover::after, .sidebar-option:hover > div::after {
    background-color: var(--tertiary-400);
    box-shadow: 3px 5px 5px rgba(27, 33, 44, 0.12);
    animation: scaleup 0.1s;
}

.sidebar, .sidebar-option:hover, .sidebar-option:has(input[type=radio]:checked), .sidebar-option:hover::after {
    border-radius: var(--radius-s);
}

.sidebar-option:has(input[type=radio]:checked) {
    background: linear-gradient(to top, var(--tertiary-500), var(--tertiary-400));
}

input[type=radio] {
    display: none;
}

.sidebar-option:hover {
    background-color: var(--secondary-600);
}

.sidebar-option {
    position: relative;
    width: 100%;
    height: 40px;
    padding: 8px;
}

.sidebar {
    width: 100%;
    height: 180px;
    background: linear-gradient(to top, var(--secondary-500), var(--secondary-400));
    flex-direction: column;
    gap: 12px;
    padding: 0 4px;
    font-size: var(--font-m);
}

.sidebar-wrapper {
    grid-area: sidebar;
}

.sidebar, .sidebar-wrapper, .sidebar-option:hover::after {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
