import React from 'react'
import * as xlsx from 'xlsx/xlsx.mjs';
export default function TaskForm() {
  const readUploadFile = (e) => {
    e.preventDefault();
   /*  if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            console.log(json);
            console.log(json[0]);
            console.log(json[0].Alias);
            
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    } */
}
  return (
    <div><form>
    <label htmlFor="upload">Upload File</label>
    <input
        type="file"
        name="upload"
        id="upload"
         onChange={readUploadFile} 
    />
</form> </div>

  )
}