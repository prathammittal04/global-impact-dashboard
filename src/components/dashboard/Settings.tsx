
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, Save, Bell, Globe, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Settings = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">{t("settings")}</h1>
        <Button className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
          <Save className="mr-2 h-4 w-4" />
          {t("saveChanges")}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <SettingsIcon className="mr-2 h-5 w-5 text-blue-600" />
              {t("organizationSettings")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="org-name">{t("organizationName")}</Label>
              <Input
                id="org-name"
                defaultValue="International Centre for Entrepreneurship and Career Development"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-email">{t("contactEmail")}</Label>
              <Input
                id="org-email"
                type="email"
                defaultValue="admin@icecd.org"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-website">{t("website")}</Label>
              <Input
                id="org-website"
                defaultValue="https://www.icecd.org"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-phone">{t("phoneNumber")}</Label>
              <Input
                id="org-phone"
                defaultValue="+1 (555) 123-4567"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5 text-green-600" />
              {t("notificationSettings")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>{t("emailNotifications")}</Label>
                <p className="text-sm text-gray-600">
                  {t("emailNotificationsDesc")}
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>{t("overdueCheckIns")}</Label>
                <p className="text-sm text-gray-600">
                  {t("overdueCheckInsDesc")}
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>{t("newApplications")}</Label>
                <p className="text-sm text-gray-600">
                  {t("newApplicationsDesc")}
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>{t("weeklyReports")}</Label>
                <p className="text-sm text-gray-600">
                  {t("weeklyReportsDesc")}
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="mr-2 h-5 w-5 text-purple-600" />
              {t("regionalSettings")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="timezone">{t("defaultTimezone")}</Label>
              <Input
                id="timezone"
                defaultValue="GMT (Greenwich Mean Time)"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">{t("defaultLanguage")}</Label>
              <Input
                id="language"
                defaultValue="English"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">{t("currency")}</Label>
              <Input
                id="currency"
                defaultValue="USD ($)"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-orange-600" />
              {t("securitySettings")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>{t("twoFactorAuth")}</Label>
                <p className="text-sm text-gray-600">
                  {t("twoFactorAuthDesc")}
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>{t("sessionTimeout")}</Label>
                <p className="text-sm text-gray-600">
                  {t("sessionTimeoutDesc")}
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <Button variant="outline" className="w-full">
              {t("changePassword")}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
