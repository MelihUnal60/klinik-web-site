import sendData from "./Utils";
import { RequestCallInfoDTO } from "./RequestDTO";
import { RequestAppointmentDTO } from "./RequestDTO";
import { RequestRoentgenRecordDTO } from "./RequestDTO";

export const sendCallInfoData = (e) => {
    e.preventDefault();
    let nameSurname = document.getElementById("inputNameSurname").value;
    let phone = document.getElementById("inputPhone").value;

    let postDTO = new RequestCallInfoDTO(phone,nameSurname);

    sendData("CallingInfo",postDTO);
}

export const sendAppointmentForm = (e) => {
    e.preventDefault();

    let nameSurname = document.getElementById("appNameSurname").value;
    let phone = document.getElementById("appPhone").value;
    let appointmentDate = document.getElementById("appDate").value;
    let appointmentTime = document.getElementById("appTime").value;
    let textArea = document.getElementById("appTxt").value;

    let postDTO = new RequestAppointmentDTO(phone,nameSurname,appointmentDate,appointmentTime,textArea);

    sendData("AppointmentForm",postDTO);
}

export const sendRoentgenRecord = async (e) => {
    e.preventDefault();

    try {
        const roentgenImageInput = document.getElementById("formFile");
        const nameSurnameInput = document.getElementById("roentgenNameSurname");
        const phoneInput = document.getElementById("roentgenTel");
        const textareaInput = document.getElementById("roentgenTxt");

        const roentgenImg = roentgenImageInput.files[0]; // Seçilen dosyayı almak için files[0] kullanılmalı
        const nameSurname = nameSurnameInput.value;
        const phone = phoneInput.value;
        const textarea = textareaInput.value;

        if (!roentgenImg) {
            console.error("Lütfen bir röntgen görüntüsü seçin.");
            return;
        }


        const postDTO = new RequestRoentgenRecordDTO(phone, nameSurname, textarea, roentgenImg);

        await sendData("RoentgenRecord", postDTO);

        console.log("Röntgen kaydı başarıyla gönderildi.");
    } catch (error) {
        console.error("Röntgen kaydı gönderilirken bir hata oluştu:", error);
    }
};



