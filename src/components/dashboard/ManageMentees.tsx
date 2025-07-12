
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit, Trash2, Search, Plus, Calendar } from "lucide-react";

export const ManageMentees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [mentorFilter, setMentorFilter] = useState("all");

  const mentees = [
    {
      id: 1,
      name: "Akua Mensah",
      age: 28,
      location: "Kumasi, Ghana",
      assignedMentor: "John Kwame",
      nextVisitDate: "2024-01-20",
      status: "Active",
      stage: "Training Phase 2",
    },
    {
      id: 2,
      name: "Chioma Okafor",
      age: 24,
      location: "Abuja, Nigeria",
      assignedMentor: "Sarah Okafor",
      nextVisitDate: "2024-01-25",
      status: "Active",
      stage: "Training Phase 1",
    },
    {
      id: 3,
      name: "Joseph Mwangi",
      age: 32,
      location: "Mombasa, Kenya",
      assignedMentor: "Grace Wanjiku",
      nextVisitDate: "2024-02-01",
      status: "Inactive",
      stage: "Completed",
    },
    {
      id: 4,
      name: "Fatima Sow",
      age: 26,
      location: "Dakar, Senegal",
      assignedMentor: "John Kwame",
      nextVisitDate: "2024-01-22",
      status: "Active",
      stage: "Training Phase 3",
    },
  ];

  const filteredMentees = mentees.filter(mentee => {
    const matchesSearch = mentee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentee.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentee.assignedMentor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || mentee.status.toLowerCase() === statusFilter;
    const matchesMentor = mentorFilter === "all" || mentee.assignedMentor === mentorFilter;
    
    return matchesSearch && matchesStatus && matchesMentor;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Manage Mentees</h1>
        <Button className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
          <Plus className="mr-2 h-4 w-4" />
          Add New Mentee
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mentee Directory</CardTitle>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search mentees by name, location, or mentor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Select value={mentorFilter} onValueChange={setMentorFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Mentor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Mentors</SelectItem>
                <SelectItem value="John Kwame">John Kwame</SelectItem>
                <SelectItem value="Sarah Okafor">Sarah Okafor</SelectItem>
                <SelectItem value="Grace Wanjiku">Grace Wanjiku</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Assigned Mentor</TableHead>
                  <TableHead>Next Visit Date</TableHead>
                  <TableHead>Stage</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMentees.map((mentee) => (
                  <TableRow key={mentee.id}>
                    <TableCell className="font-medium">{mentee.name}</TableCell>
                    <TableCell>{mentee.age}</TableCell>
                    <TableCell>{mentee.location}</TableCell>
                    <TableCell>{mentee.assignedMentor}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                        {mentee.nextVisitDate}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700">
                        {mentee.stage}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={mentee.status === "Active" ? "default" : "secondary"}
                        className={
                          mentee.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }
                      >
                        {mentee.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
