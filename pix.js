const PIX_KEY = "andrewcoelho17@gmail.com"; // sua chave PIX

document.getElementById("btnCopyPix").addEventListener("click", async () => {
    try {
        // tenta usar a API moderna
        await navigator.clipboard.writeText(PIX_KEY);

        // feedback pro usuário
        const status = document.getElementById("status");
        status.textContent = "PIX copiado!";
        setTimeout(() => status.textContent = "", 2000); // limpa em 2s
    } catch (err) {
        // fallback antigo
        const textarea = document.createElement("textarea");
        textarea.value = PIX_KEY;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand("copy");
            alert("PIX copiado!");
        } catch (err2) {
            alert("Não foi possível copiar o PIX");
        }
        document.body.removeChild(textarea);
    }
});