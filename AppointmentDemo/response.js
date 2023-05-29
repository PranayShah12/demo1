
window.addEventListener("DOMContentLoaded", () => {

    const task = JSON.parse(localStorage.getItem("task"))

    if (task && task.length > 0) {

        const tabledata = document.getElementById("tabledata");
        let actualdate = new Date();
        let realdate = `${actualdate.getFullYear()}-${actualdate.getMonth() + 1 < 10 ? `0${actualdate.getMonth() + 1}` : actualdate.getMonth() + 1}-${actualdate.getDate() < 10 ? `0${actualdate.getDate() + 1}` : actualdate.getDate()}`
        let Realfrtime = `${actualdate.getHours()}:${actualdate.getMinutes}`
        console.log(Realfrtime)
        for (let i = 0; i < task.length; i++) {
            const row = document.createElement("tr");
            const currentDate = new Date();
            const rowDate = new Date(task[i].appDate);



            row.innerHTML = `
            <td>${i + 1}</td>
            <td>${task[i].name}</td>
            <td>${task[i].mail_id}</td>
            <td>${task[i].appDate}</td>
            <td>${task[i].frtime}</td>
            <td>${task[i].Endtime}</td>
            <td>${task[i].Despvalue}</td>`

            tabledata.appendChild(row);

            if (task[i].appDate == realdate && task[i].frtime >= Realfrtime && task[i].Endtime >= Realfrtime) {

                row.className = ("table-danger")
            }
            if (task[i].appDate == realdate && task[i].frtime <= Realfrtime && task[i].Endtime <= Realfrtime) {

                row.className = ("table-secondary")
            }
            if (task[i].appDate <= realdate && task[i].frtime < Realfrtime && task[i].Endtime >= Realfrtime) {

                row.className = ("table-success")
            }

            if (task[i].appDate > realdate) {
                row.className = ("table-primary")
            }
        }

    }
})
