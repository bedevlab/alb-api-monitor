import fs from "fs";

const url = "https://albashatv.site/api.php";

const form = new URLSearchParams();
form.append("method", "o6");
form.append("event", "view");

try {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: form
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const text = await response.text();

    fs.writeFileSync("data.json", text);

    console.log("Saved response to data.json");
}
catch (err) {
    console.error(err);
    process.exit(1);
}
