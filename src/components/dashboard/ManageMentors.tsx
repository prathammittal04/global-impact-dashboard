
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
import { Edit, Trash2, Mail, Search, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ManageMentors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useLanguage();

  const mentors = [
    {
      id: 1,
      name: "John Kwame",
      email: "john.kwame@email.com",
      assignedMentees: 5,
      lastCheckIn: "2024-01-15",
      status: "Active",
      location: "Accra, Ghana",
    },
    {
      id: 2,
      name: "Sarah Okafor",
      email: "sarah.okafor@email.com",
      assignedMentees: 3,
      lastCheckIn: "2024-01-10",
      status: "Active",
      location: "Lagos, Nigeria",
    },
    {
      id: 3,
      name: "Michael Banda",
      email: "michael.banda@email.com",
      assignedMentees: 7,
      lastCheckIn: "2023-12-28",
      status: "Inactive",
      location: "Lusaka, Zambia",
    },
    {
      id: 4,
      name: "Grace Wanjiku",
      email: "grace.wanjiku@email.com",
      assignedMentees: 4,
      lastCheckIn: "2024-01-12",
      status: "Active",
      location: "Nairobi, Kenya",
    },
  ];

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">{t("manageMentors")}</h1>
        <Button className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
          <Plus className="mr-2 h-4 w-4" />
          {t("addNewMentor")}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("mentorDirectory")}</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={t("searchMentors")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("name")}</TableHead>
                  <TableHead>{t("email")}</TableHead>
                  <TableHead>{t("location")}</TableHead>
                  <TableHead>{t("assignedMentees")}</TableHead>
                  <TableHead>{t("lastCheckIn")}</TableHead>
                  <TableHead>{t("status")}</TableHead>
                  <TableHead>{t("actions")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMentors.map((mentor) => (
                  <TableRow key={mentor.id}>
                    <TableCell className="font-medium">{mentor.name}</TableCell>
                    <TableCell>{mentor.email}</TableCell>
                    <TableCell>{mentor.location}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        {mentor.assignedMentees} {t("mentees")}
                      </Badge>
                    </TableCell>
                    <TableCell>{mentor.lastCheckIn}</TableCell>
                    <TableCell>
                      <Badge
                        variant={mentor.status === "Active" ? "default" : "secondary"}
                        className={
                          mentor.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }
                      >
                        {mentor.status === "Active" ? t("active") : t("inactive")}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
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
