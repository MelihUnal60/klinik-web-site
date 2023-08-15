import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default async function sendData(uri, body) {
    var myHeaders = new Headers();
    myHeaders.append("accept", "text/plain");
    myHeaders.append("Content-Type", "application/json");

    try {
        const response = await fetch("http://api.caliskandent.com/" + uri, {
            method: "POST",
            body: JSON.stringify(body),
            headers: myHeaders,
            redirect: 'follow'
        });

        if (response.ok) {
            const result = await response.text();
            console.log(result);
            toast.success('İşlem başarılı.'); // Başarılı mesajını göster
        } else {
            console.error('Error uploading data.');
            toast.error('İşlem sırasında hata oluştu.'); // Hata mesajını göster
        }
    } catch (error) {
        console.error('An error occurred:', error);
        toast.error('Bir hata oluştu.'); // Hata mesajını göster
    }
}


