// Footer Component JS
const FooterTemplate = `
<footer class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 text-center">
                ${new Date().getFullYear()} © Drterrace 
        </div>
    </div>
</footer>
`;

function renderFooter(containerId = "footer") {
    const el = document.getElementById(containerId);
    if (el) el.innerHTML = FooterTemplate;
}
