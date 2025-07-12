
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Upload, RefreshCw, FileText } from "lucide-react";

export const CurriculumManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Curriculum Management</h1>
        <Button className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
          <Upload className="mr-2 h-4 w-4" />
          Upload Content
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
              Training Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-48 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Content Management System
              </h3>
              <p className="text-gray-600 mb-4">
                Upload and organize training materials, modules, and resources for mentors and mentees.
              </p>
              <Button variant="outline">
                <Upload className="mr-2 h-4 w-4" />
                Upload Materials
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <RefreshCw className="mr-2 h-5 w-5 text-green-600" />
              Refresher Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-48 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mb-4">
                <RefreshCw className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600 mb-4">
                Create and schedule refresher courses and follow-up content for ongoing support.
              </p>
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Create Course
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Curriculum Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Phase 1: Foundation</h4>
              <p className="text-blue-700 text-sm">
                Basic entrepreneurship concepts, business ideation, and market research
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">Phase 2: Development</h4>
              <p className="text-green-700 text-sm">
                Business plan creation, financial planning, and legal considerations
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-900 mb-2">Phase 3: Launch</h4>
              <p className="text-purple-700 text-sm">
                Marketing strategies, sales techniques, and business launch preparation
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-medium text-orange-900 mb-2">Phase 4: Growth</h4>
              <p className="text-orange-700 text-sm">
                Scaling strategies, advanced financial management, and sustainability
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
