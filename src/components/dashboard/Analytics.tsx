
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  Globe,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Analytics = () => {
  const { t } = useLanguage();

  const kpiData = [
    {
      title: t("entrepreneursTrained"),
      value: "1,247",
      change: "+18%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: t("followUpRate"),
      value: "87%",
      change: "+5%",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: t("engagementRate"),
      value: "92%",
      change: "+12%",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: t("averageProfitUplift"),
      value: "34%",
      change: "+8%",
      icon: DollarSign,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const regionalData = [
    { region: "West Africa", mentees: 156, mentors: 42, completion: 89 },
    { region: "East Africa", mentees: 134, mentors: 38, completion: 91 },
    { region: "Southern Africa", mentees: 52, mentors: 17, completion: 85 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">{t("analyticsAndImpact")}</h1>
        <p className="text-gray-600 mt-2 sm:mt-0">
          {t("trackImpact")}
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Card key={kpi.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
                    <Icon className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-600">
                      {kpi.title}
                    </p>
                    <div className="flex items-center">
                      <p className="text-2xl font-bold text-gray-900">
                        {kpi.value}
                      </p>
                      <span className="ml-2 text-sm font-medium text-green-600">
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5 text-blue-600" />
              {t("programImpactOverTime")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Impact trend chart would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="mr-2 h-5 w-5 text-green-600" />
              {t("regionalPerformance")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionalData.map((region) => (
                <div
                  key={region.region}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium text-gray-900">{region.region}</h4>
                    <p className="text-sm text-gray-600">
                      {region.mentees} {t("mentees")} • {region.mentors} mentors
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700"
                  >
                    {region.completion}% {t("completion")}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t("successStories")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">156</div>
              <p className="text-gray-600">{t("successfulBusinessesLaunched")}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("trainingCompletion")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
              <p className="text-gray-600">{t("averageCompletionRate")}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("outreachGrowth")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">+42%</div>
              <p className="text-gray-600">{t("yearOverYearGrowth")}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
