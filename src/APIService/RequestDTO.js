export  function RequestAppointmentDTO(phone,nameSurname,appointmentDate,appointmentTime,textArea){
    this.phone = phone;
    this.nameSurname = nameSurname;
    this.appointmentDate = appointmentDate;
    this.appointmentTime = appointmentTime;
    this.textArea = textArea;
}


export  function RequestCallInfoDTO(phone,nameSurname,){
    this.phone = phone;
    this.nameSurname = nameSurname;
}


export function RequestRoentgenRecordDTO(phone,namesurname,textarea,roentgenImg){
    this.phone = phone;
    this.nameSurname = namesurname;
    this.textArea = textarea;
    this.roentgenImg = roentgenImg;
}

