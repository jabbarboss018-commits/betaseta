"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { deleteLoanApplication, updateLoanApplicationStatus } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

export type LoanApplication = {
  id: string;
  fullName: string;
  cnic: string;
  mobileNumber: string;
  loanType: string;
  loanAmount: string;
  selfieUrl: string;
  loanPeriod: string;
  registrationFee: number;
  monthlyInstallment: string;
  submittedAt: string;
  status: "Pending" | "Approved" | "Rejected";
  adminNotes: string;
};

const ActionsCell = ({ row }: { row: { original: LoanApplication } }) => {
    const application = row.original;
    const { toast } = useToast();
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [status, setStatus] = useState(application.status);
    const [adminNotes, setAdminNotes] = useState(application.adminNotes);
    const [isSaving, setIsSaving] = useState(false);

    const handleStatusUpdate = async () => {
        setIsSaving(true);
        try {
            await updateLoanApplicationStatus(application.id, status, adminNotes);
            toast({ title: "Success", description: "Application status updated." });
            setIsEditDialogOpen(false);
            window.location.reload(); 
        } catch (error) {
            console.error("Failed to update status:", error);
            toast({ variant: "destructive", title: "Error", description: "Failed to update status." });
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async () => {
        setIsSaving(true);
        try {
            await deleteLoanApplication(application.id);
            toast({ title: "Success", description: "Application deleted." });
            setIsDeleteDialogOpen(false);
            window.location.reload();
        } catch (error) {
            console.error("Failed to delete application:", error);
            toast({ variant: "destructive", title: "Error", description: "Failed to delete application." });
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <>
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onSelect={() => window.open(application.selfieUrl, '_blank')}>
                        View Selfie
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={() => setIsEditDialogOpen(true)}>
                        Edit Status
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => setIsDeleteDialogOpen(true)} className="text-red-600">
                        Delete Application
                    </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Edit Dialog */}
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                    <DialogTitle>Edit Application Status</DialogTitle>
                    <DialogDescription>
                        Update the status and add notes for the application of {application.fullName}.
                    </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="status" className="text-right">
                                Status
                            </Label>
                            <Select onValueChange={(value) => setStatus(value as any)} defaultValue={status}>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Select a status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Pending">Pending</SelectItem>
                                    <SelectItem value="Approved">Approved</SelectItem>
                                    <SelectItem value="Rejected">Rejected</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="notes" className="text-right">
                                Notes
                            </Label>
                            <Textarea
                                id="notes"
                                value={adminNotes}
                                onChange={(e) => setAdminNotes(e.target.value)}
                                className="col-span-3"
                                placeholder="Type your message here."
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
                        <Button onClick={handleStatusUpdate} disabled={isSaving}>
                            {isSaving ? "Saving..." : "Save changes"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Dialog */}
            <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete the loan application for {application.fullName}.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
                        <Button variant="destructive" onClick={handleDelete} disabled={isSaving}>
                            {isSaving ? "Deleting..." : "Delete"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};


export const columns: ColumnDef<LoanApplication>[] = [
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Full Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("fullName")}</div>,
  },
  {
    accessorKey: "cnic",
    header: "CNIC",
    cell: ({ row }) => <div>{row.getValue("cnic")}</div>,
  },
   {
    accessorKey: "mobileNumber",
    header: "Mobile",
    cell: ({ row }) => <div>{row.getValue("mobileNumber")}</div>,
  },
  {
    accessorKey: "loanType",
    header: "Loan Type",
    cell: ({ row }) => <div className="capitalize">{row.getValue("loanType")}</div>,
  },
   {
    accessorKey: "loanAmount",
    header: "Amount",
    cell: ({ row }) => <div>{parseInt(row.getValue("loanAmount")).toLocaleString()} PKR</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>,
  },
  {
    accessorKey: "submittedAt",
    header: "Submitted At",
    cell: ({ row }) => <div>{new Date(row.getValue("submittedAt")).toLocaleString()}</div>,
  },
   {
    id: "actions",
    cell: ActionsCell,
  },
];
