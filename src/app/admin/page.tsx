import { ApplicationsDataTable } from "@/components/admin/applications-data-table";
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { LoanApplication } from "@/components/admin/columns";

async function getLoanApplications(): Promise<LoanApplication[]> {
  try {
    const q = query(collection(db, "loanApplications"), orderBy("submittedAt", "desc"));
    const querySnapshot = await getDocs(q);
    const applications = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        fullName: data.fullName,
        cnic: data.cnic,
        mobileNumber: data.mobileNumber,
        loanType: data.loanType,
        loanAmount: data.loanAmount,
        selfieUrl: data.selfieUrl,
        loanPeriod: data.loanPeriod,
        registrationFee: data.registrationFee,
        monthlyInstallment: data.monthlyInstallment,
        status: data.status || 'Pending',
        adminNotes: data.adminNotes || '',
        submittedAt: data.submittedAt.toDate().toISOString(),
      };
    });
    return applications;
  } catch (error) {
    console.error("Error fetching loan applications: ", error);
    return [];
  }
}


export default async function AdminDashboardPage() {
  const applications = await getLoanApplications();

  return (
    <div className="container mx-auto py-10">
       <h1 className="text-3xl font-bold mb-6">Loan Applications</h1>
       <ApplicationsDataTable data={applications} />
    </div>
  );
}
