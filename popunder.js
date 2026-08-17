(function () {
    "use strict";

    const targetUrl = "https://s.shopee.co.id/6VN8uf8xLk";
    const cookieName = "popunder_opened";

    if (document.cookie.indexOf(cookieName + "=1") !== -1) {
        return;
    }

    function openPopunder() {
        if (document.cookie.indexOf(cookieName + "=1") !== -1) {
            return;
        }

        const win = window.open(
            targetUrl,
            "_blank",
            "noopener,noreferrer"
        );

        if (win) {
            document.cookie =
                cookieName + "=1; max-age=86400; path=/; SameSite=Lax";

            try {
                win.blur();
                window.focus();
            } catch (e) {}
        }

        document.removeEventListener("click", openPopunder);
    }

    document.addEventListener("click", openPopunder, {
        once: true,
        passive: true
    });
})();
