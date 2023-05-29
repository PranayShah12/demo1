function finalStep() {
    let Username = document.getElementById("fname").value;
    let Email = document.getElementById("mail").value;
    let Date = document.getElementById("myDate").value;

    let Fromtime = document.getElementById("fromtime").value;
    let Uptotime = document.getElementById("totime").value;
    let Description = document.getElementById("desp").value;

    if (Username === "" || Email === "" || Date === "" || Fromtime === "" || Uptotime === "" || Description === "") {
        return;
    }
    const userData = {
        name: Username,
        mail_id: Email,
        appDate: Date,
        frtime: Fromtime,
        Endtime: Uptotime,
        Despvalue: Description
    }

    const overlappingAppointments = arr.filter((appointment) => {
        return (
            appointment.appDate === userData.appDate &&
            (
                (appointment.frtime <= userData.frtime && appointment.Endtime > userData.frtime) ||
                (appointment.frtime < userData.Endtime && appointment.Endtime >= userData.Endtime) ||
                (appointment.frtime >= userData.frtime && appointment.Endtime <= userData.Endtime)
            )
        )
    })

    if (overlappingAppointments.length > 0) {
        alert("this Slot is already Booked")
        return
    }


    arr.push(userData);

    arr.sort((a, b) => {
        if (a.appDate != b.appDate) {
            return a.appDate.localeCompare(b.appDate);
        } else { return a.frtime.localeCompare(b.frtime) };
    })



    let newData = localStorage.setItem('new', JSON.stringify(userData))
    let array = localStorage.setItem('task', JSON.stringify(arr));

    loginform.reset();

    window.location.href = "appointment.html"
}

function form_valid() {

    // debugger
    let name = document.form1.fname.value;
    if (name == "" || name == null) {
        document.getElementById("fmess").innerHTML = "Enter name";
        return false;
    } else if (!isNaN(name)) {
        document.getElementById("fmess").innerHTML = "Enter alphabets only";
        return false;
    }
    let email = document.form1.mail.value
    if (email == "") {
        document.getElementById("emess").innerHTML = "Enter Email address";
        return false;
    } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
        document.getElementById("emess").innerHTML = "You have entered an invalid email address!";
        return false;
    }
    let date = document.form1.myDate.value;

    let actualdate = new Date();
    let realdate = `${actualdate.getFullYear()}-${actualdate.getMonth() + 1 < 10 ? `0${actualdate.getMonth() + 1}` : actualdate.getMonth() + 1}-${actualdate.getDate() < 10 ? `0${actualdate.getDate() + 1}` : actualdate.getDate()}`
    if (date == "") {
        document.getElementById("dmess").innerHTML = "select date";
        return false;
    } else if (date < realdate) {
        document.getElementById("errmess").innerHTML = "Invalid Date"
        return false;
    }


    let ftime = document.form1.fromtime.value;
    let utime = document.form1.totime.value;
    let desp = document.form1.despval.value;
    if (ftime == "") {
        document.getElementById("ftmess").innerHTML = "select from time";
        return false;
    }
    else if (utime == "") {
        document.getElementById("totmess").innerHTML = "select to time";
        return false;
    } else if (utime <= ftime) {
        document.getElementById("timemess").innerHTML = "To time Should be Greater then from time";
        return false;
    } else if (desp == "") {
        document.getElementById("despmess").innerHTML = "enter Description";
        return false;
    }

    finalStep()
}


// alert("Appointmnet is submitted")


function on_change() {
    let name = document.form1.fname.value;
    if (name != "" || name != null) {
        document.getElementById("fmess").innerHTML = "";
        return false;
    } else if (isNaN(name)) {
        document.getElementById("fmess").innerHTML = "";
        return false;
    }
}
function mailchange() {
    let email = document.form1.mail.value
    if (email != "") {
        document.getElementById("emess").innerHTML = "";
        return false;
    } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
        document.getElementById("emess").innerHTML = "";
        return false;
    }

}
function datechange() {
    let date = document.form1.myDate.value;
    if (date != "") {
        document.getElementById("dmess").innerHTML = "";
        return false;
    }
    if ((date < realdate) == false) {
        document.getElementById("errmess").innerHTML = "";
        return false;
    }
}
function f_timechange() {
    let ftime = document.form1.fromtime.value;
    if (ftime != "") {
        document.getElementById("ftmess").innerHTML = "";
        return false;
    }
}
function to_timechange() {
    let utime = document.form1.totime.value;
    if (utime != "") {
        document.getElementById("totmess").innerHTML = "";
        return false;
    }
}
function desp_change() {
    let desp = document.form1.despval.value;
    if (desp != "") {
        document.getElementById("despmess").innerHTML = "";
        return false;
    }
}



