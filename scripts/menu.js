// Link

const menuLink = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT4ju0tv2OnB4VHdEQ26HU4u14WkrjQRzW1yM6aqk1dzR4rAEwnNTDTI49K_lzju_-kWQEL21Euj8wJ/pub?gid=0&output=csv"; // Sheet1 (gid=0)
const dataLink = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT4ju0tv2OnB4VHdEQ26HU4u14WkrjQRzW1yM6aqk1dzR4rAEwnNTDTI49K_lzju_-kWQEL21Euj8wJ/pub?gid=253754463&output=csv";

// Elements

const mondayMenuLabel = document.querySelector("#monday-div").querySelector("#monday-menu");
const tuesdayMenuLabel = document.querySelector("#tuesday-div").querySelector("#tuesday-menu");
const wednesdayMenuLabel = document.querySelector("#wednesday-div").querySelector("#wednesday-menu");
const thursdayMenuLabel = document.querySelector("#thursday-div").querySelector("#thursday-menu");
const fridayMenuLabel = document.querySelector("#friday-div").querySelector("#friday-menu");
const dateLabel = document.querySelector("#info3");

// Code

fetch(menuLink)
    .then(res => res.text())
    .then(csv => {
        const rows = csv.split('\n').slice(1);
        
        rows.map(row => {
            const [day, ...items] = row.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
            const menuItems = items.join(',').trim().replace(/^"|"$/g, '');
            
            switch (day.trim())
            {
                case "Senin":
                    mondayMenuLabel.textContent = menuItems;
                    
                    break;
                case "Selasa":
                    tuesdayMenuLabel.textContent = menuItems;

                    break;
                case "Rabu":
                    wednesdayMenuLabel.textContent = menuItems;

                    break;
                case "Kamis":
                    thursdayMenuLabel.textContent = menuItems;

                    break;
                case "Jum'at":
                    fridayMenuLabel.textContent = menuItems;

                    break;
                default: break;
            }
        });
    });

fetch(dataLink)
    .then(res => res.text())
    .then(csv => {
        const rows = csv.split("\n");
        const date = rows[1].split(',')[0].trim();
        const split = date.split(" ");

        dateLabel.textContent = `*Informasi ini terakhir di update pada ${split[0]} dan hanya valid sampai dengan ${split[1]}.`;
    });