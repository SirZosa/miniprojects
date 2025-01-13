import { useState} from 'react'
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './App.css'

function App() {
  const [height, setHeight] = useState(800);
  const [numPages, setNumPages] = useState<number>(1);
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
    <header>
      <h1>PDF Viewer</h1>
      <input type="file" onChange={onFileChange} />
    </header>
      <main className="pdf-viewer">
      <div className="controls">
        <p>Page: {pageNumber}/{numPages}</p>
        <div className="button-pair">
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
        </div>
        <div className="button-pair">
          <button onClick={() => setHeight(height - 50)} disabled={height===300}>-</button>
          <p>Zoom</p>
          <button onClick={() => setHeight(height + 50)} disabled={height===1000}>+</button>
        </div>
        <p>
          Jump to page:
          <input
            type="number"
            onChange={(event) => {
              const newPageNumber = Number(event.target.value);
              if (newPageNumber > 0 && newPageNumber <= numPages) {
                setPageNumber(newPageNumber);
              }
            }}
          />
        </p>
      </div>
      {pdfUrl && (
        <div className="pdf-container">
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
              <Page className="page" key={`page_${pageNumber}`} pageNumber={pageNumber} height={height}/>
          </Document>
        </div>
      )}
      </main>
    </>
  )
}

export default App
