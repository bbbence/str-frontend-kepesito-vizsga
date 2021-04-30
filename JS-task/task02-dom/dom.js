function changeOuterLinks() {
    const aElements = document.querySelectorAll('nav#link-list a');
    aElements.forEach(item => {
        if (item.innerHTML.includes('outer-link')) {
            item.setAttribute('target', '_blank');
            item.innerHTML = `<strong>${item.innerHTML}</strong>`;
        }
    })

    document.querySelectorAll('nav').forEach(s => {
        s.style.display = "flex";
        s.style.flexDirection = "column";
        s.style.margin = "0px auto";
        s.style.width = "30%";
        s.style.border = "1px solid blue";
        s.style.padding = "16px";
    });
}

changeOuterLinks();

export { changeOuterLinks };