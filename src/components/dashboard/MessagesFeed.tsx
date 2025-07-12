
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Plus, Settings } from "lucide-react";

export const MessagesFeed = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Messages / Community Feed</h1>
        <Button className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
          <Settings className="mr-2 h-4 w-4" />
          Configure Integration
        </Button>
      </div>

      <Card className="min-h-96">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-5 w-5 text-blue-600" />
            Community Discussion Board
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Community Chat Integration
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              This section will replace WhatsApp groups with an integrated community discussion board for mentors and mentees to communicate and share experiences.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Planned features:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Group discussions by region or training phase</li>
                <li>• Direct messaging between mentors and mentees</li>
                <li>• Resource sharing and announcements</li>
                <li>• Success story sharing</li>
              </ul>
            </div>
            <Button className="mt-6 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              <Plus className="mr-2 h-4 w-4" />
              Set Up Community Features
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
