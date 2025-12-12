import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

// List all CV files in your public/assets folder
const CV_FILES = [
  "Hanno Seegers CV 2025-12-12.pdf",
  "Hanno Seegers CV 2025-03-15.pdf",
  "Hanno Seegers CV 2025-06-26.pdf", // latest
];

interface CVFile {
  fileName: string;
  date: Date;
}

export const DownloadCV = () => {
  // Determine the latest CV by parsing the date from the file name
  const latestCV: CVFile | undefined = CV_FILES
    .map((fileName) => {
      const match = fileName.match(/(\d{4}-\d{2}-\d{2})/);
      return match ? { fileName, date: new Date(match[1]) } : null;
    })
    .filter((f): f is CVFile => f !== null)
    .sort((a, b) => b.date.getTime() - a.date.getTime())[0];

  if (!latestCV) return null;

  const formattedDate = latestCV.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FileText className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Want to know more?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Download my full CV to see my complete work history, skills, and
            qualifications. Let's connect and build something amazing together!
          </p>

          <Button
            variant="hero"
            size="xl"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => {
              const link = document.createElement("a");
              link.href = `/assets/${encodeURIComponent(latestCV.fileName)}`;
              link.download = latestCV.fileName;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>

          <p className="text-primary-foreground/60 text-sm mt-4">
            PDF format • Last updated {formattedDate}
          </p>
        </div>
      </div>
    </section>
  );
};
