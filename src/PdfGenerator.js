import {jsPDF} from "jspdf";
class PdfGenerator
{
    
    getDocument()
    {
        const doc = new jsPDF();
        doc.text(document.body.innerText, 10, 10);
        doc.save(`cv.pdf`);
    }
}
export default PdfGenerator;