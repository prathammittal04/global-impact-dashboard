
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Calendar, MapPin, TrendingUp, AlertCircle } from "lucide-react";

export const DashboardHome = () => {
  const stats = [
    {
      title: "Total Mentors",
      value: "127",
      icon: Users,
      change: "+12%",
      changeType: "positive",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Total Mentees",
      value: "342",
      icon: UserCheck,
      change: "+23%",
      changeType: "positive",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Active Check-ins",
      value: "89",
      icon: Calendar,
      change: "+8%",
      changeType: "positive",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Upcoming Visits",
      value: "24",
      icon: MapPin,
      change: "-3%",
      changeType: "negative",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const recentNotifications = [
    {
      id: 1,
      type: "warning",
      message: "5 mentees haven't been contacted in over 30 days",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "info",
      message: "New mentor application from Sarah Johnson",
      time: "4 hours ago",
    },
    {
      id: 3,
      type: "success",
      message: "Monthly check-in completed for Lagos region",
      time: "1 day ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2 sm:mt-0">
          Welcome back! Here's what's happening with your entrepreneurship ecosystem.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <div className="flex items-center">
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <span
                        className={`ml-2 text-sm font-medium ${
                          stat.changeType === "positive"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
              Mentee Activity Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-orange-600" />
              Recent Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      notification.type === "warning"
                        ? "bg-orange-500"
                        : notification.type === "success"
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
