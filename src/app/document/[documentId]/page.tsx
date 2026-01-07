
export interface DocumentPageIdProps {
    params: {
        documentId: string;
    };
}



const DocumentPageId = async ({ params }: DocumentPageIdProps) => {

    const { documentId } = await params;
    return (
        <main>
            <h1 className="text-3xl font-bold">Document Page {documentId}</h1>
            <p>This is the document page of our application.</p>
        </main>
    );
};
export default DocumentPageId;