window.onload = () => {
    const sidebar = document.getElementById("side-bar");
    const collapseIcon = document.getElementById("collapse-icon");
    const random = document.getElementById("random-container");
    const expand = () => {sidebar.style.left = "0"}
    const collapse = () => {
        sidebar.style.left = null
    }

    random.addEventListener('click', collapse)
    collapseIcon.addEventListener('click', expand)
    // collapseIcon.onclick = expand();
}