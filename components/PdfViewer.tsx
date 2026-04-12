'use client';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useState } from 'react';
import { X } from 'lucide-react';

// Initialize pdf worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PdfViewerProps {
  file: string;
  onClose: () => void;
}

export default function PdfViewer({ file, onClose }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-background rounded-lg shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-border">
          <h2 className="text-xl font-semibold">My Resume</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-accent transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="max-h-[80vh] overflow-auto p-4">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
              </div>
            }
            error={
              <div className="text-center p-8">
                <p className="text-red-500">Failed to load PDF. Please try again or download the file.</p>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              width={800}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="border border-border rounded"
            />
          </Document>
        </div>
        <div className="p-4 border-t border-border flex justify-between items-center bg-muted/50">
          <div className="text-sm text-muted-foreground">
            Page {pageNumber} of {numPages}
          </div>
          <a
            href={file}
            download
            className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors text-sm font-medium"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
