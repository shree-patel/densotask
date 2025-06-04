

import Footer from '../components/Footer';
import FileUploader from '../components/InputFile';

export default function FileUploadView() {
  return (
   
   

      <div className="flex-grow-2 d-flex flex-column">
     

        <div className="p-3 flex-grow-1">
          <FileUploader />
        </div>

      
      <Footer/>
      </div>
    
  );
}
