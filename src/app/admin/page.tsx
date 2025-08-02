import { ApplicationsDataTable } from "@/components/admin/applications-data-table";

export default async function AdminDashboardPage() {
  return (
    <div className="container mx-auto py-10">
       <h1 className="text-3xl font-bold mb-6">Loan Applications</h1>
       <ApplicationsDataTable />
    </div>
  );
}
