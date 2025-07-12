
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
import { Calendar, Search, Download, Eye } from "lucide-react";

export const CheckInReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mentorFilter, setMentorFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const checkIns = [
    {
      id: 1,
      mentee: "Akua Mensah",
      mentor: "John Kwame",
      date: "2024-01-15",
      type: "Visit",
      status: "Completed",
      notes: "Good progress on business plan development",
      rating: "Excellent",
    },
    {
      id: 2,
      mentee: "Chioma Okafor",
      mentor: "Sarah Okafor",
      date: "2024-01-14",
      type: "Phone Call",
      status: "Completed",
      notes: "Discussed marketing strategies",
      rating: "Good",
    },
    {
      id: 3,
      mentee: "Fatima Sow",
      mentor: "John Kwame",
      date: "2024-01-12",
      type: "Video Call",
      status: "Missed",
      notes: "Rescheduled for next week",
      rating: "N/A",
    },
    {
      id: 4,
      mentee: "Joseph Mwangi",
      mentor: "Grace Wanjiku",
      date: "2024-01-10",
      type: "Visit",
      status: "Completed",
      notes: "Final evaluation completed successfully",
      rating: "Excellent",
    },
  ];

  const filteredCheckIns = checkIns.filter(checkIn => {
    const matchesSearch = checkIn.mentee.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         checkIn.mentor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMentor = mentorFilter === "all" || checkIn.mentor === mentorFilter;
    
    return matchesSearch && matchesMentor;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Check-In Reports</h1>
        <Button variant="outline" className="mt-4 sm:mt-0">
          <Download className="mr-2 h-4 w-4" />
          Export Reports
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Check-Ins</CardTitle>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by mentee or mentor name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
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
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mentee</TableHead>
                  <TableHead>Mentor</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCheckIns.map((checkIn) => (
                  <TableRow key={checkIn.id}>
                    <TableCell className="font-medium">{checkIn.mentee}</TableCell>
                    <TableCell>{checkIn.mentor}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                        {checkIn.date}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        {checkIn.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={checkIn.status === "Completed" ? "default" : "destructive"}
                        className={
                          checkIn.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }
                      >
                        {checkIn.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          checkIn.rating === "Excellent"
                            ? "bg-green-50 text-green-700"
                            : checkIn.rating === "Good"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-gray-50 text-gray-700"
                        }
                      >
                        {checkIn.rating}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">
                      {checkIn.notes}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
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
