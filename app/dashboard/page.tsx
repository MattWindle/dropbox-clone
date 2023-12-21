import Dropzone from "@/components/Dropzone";
import { db } from "@/firebase";
import { auth } from "@clerk/nextjs";
import { FileType } from "@/typings";
import { collection, getDocs } from "firebase/firestore";
import TableWrapper from "@/components/table/TableWrapper";

async function Dashboard() {
  const {userId} = auth();

  // Top level await can be used here as its a server component
  const docsResults = await getDocs(collection(db, "users", userId!, "files" ));

  const skeletonFiles: FileType[] = docsResults.docs.map(doc => (
    {
      id: doc.id,
      filename: doc.data().filename || doc.id,
      timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
      fullName: doc.data().fullName,
      downloadURL: doc.data().downloadURL,
      type: doc.data().type,
      size: doc.data().size,
    }
  ));

console.log(skeletonFiles);

  return <div className="pb-64">
    <Dropzone />
    <section className="container space-y-5">
      <h2>All Files</h2>
      <div>
        {/* Table Wrapper */}
        <TableWrapper skeletonFiles={skeletonFiles} />
      </div>
    </section>
  </div>;
}

export default Dashboard;
