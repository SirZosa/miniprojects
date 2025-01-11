import { useState} from 'react'
import './App.css'
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './App.css'

function App() {
  const [height, setHeight] = useState(300);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfUrl, setPdfUrl] = useState("");

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const pdfFile = event.target.files?.[0];
    if (pdfFile) {
      setPdfUrl(URL.createObjectURL(pdfFile));
    }
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  
  return (
    <>
      <h1>PDF Viewer</h1>
      <input type="file" onChange={onFileChange} />
      {numPages && (
        <p>
          Page {pageNumber} of {numPages}
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Previous
          </button>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next
          </button>
        </p>
      )}
      {numPages && (
        <p>
          Jump to page:{' '}
          <input
            type="number"
            value={pageNumber}
            onChange={(event) => {
              const newPageNumber = Number(event.target.value);
              if (newPageNumber > 0 && newPageNumber <= numPages) {
                setPageNumber(newPageNumber);
              }
            }}
          />
        </p>
      )}
      {numPages && (
        <p>
          Zoom:
          <button onClick={() => setHeight(height - 50)} disabled={height===300}>Zoom Out</button>
          <button onClick={() => setHeight(height + 50)} disabled={height===1000}>Zoom In</button>
        </p>
      )}
      {pdfUrl && (
        <div>
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
              <Page className="page" key={`page_${pageNumber}`} pageNumber={pageNumber} height={height}/>
          </Document>
        </div>
      )}
    </>
  )
}

export default App
