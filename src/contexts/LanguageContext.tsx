
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

const translations: Translations = {
  // Navigation
  dashboard: { en: 'Dashboard', hi: 'डैशबोर्ड' },
  manageMentors: { en: 'Manage Mentors', hi: 'मेंटर प्रबंधन' },
  manageMentees: { en: 'Manage Mentees', hi: 'मेंटी प्रबंधन' },
  analytics: { en: 'Analytics', hi: 'विश्लेषण' },
  settings: { en: 'Settings', hi: 'सेटिंग्स' },
  notifications: { en: 'Notifications', hi: 'सूचनाएं' },
  
  // Dashboard
  totalMentors: { en: 'Total Mentors', hi: 'कुल मेंटर' },
  totalMentees: { en: 'Total Mentees', hi: 'कुल मेंटी' },
  activeCheckIns: { en: 'Active Check-ins', hi: 'सक्रिय चेक-इन' },
  upcomingVisits: { en: 'Upcoming Visits', hi: 'आगामी यात्राएं' },
  menteeActivityOverTime: { en: 'Mentee Activity Over Time', hi: 'समय के साथ मेंटी गतिविधि' },
  recentNotifications: { en: 'Recent Notifications', hi: 'हाल की सूचनाएं' },
  welcomeBack: { en: 'Welcome back! Here\'s what\'s happening with your entrepreneurship ecosystem.', hi: 'वापस स्वागत है! यहाँ आपके उद्यमिता पारिस्थितिकी तंत्र में क्या हो रहा है।' },
  
  // Mentors page
  mentorDirectory: { en: 'Mentor Directory', hi: 'मेंटर निर्देशिका' },
  addNewMentor: { en: 'Add New Mentor', hi: 'नया मेंटर जोड़ें' },
  searchMentors: { en: 'Search mentors by name, email, or location...', hi: 'नाम, ईमेल या स्थान द्वारा मेंटर खोजें...' },
  name: { en: 'Name', hi: 'नाम' },
  email: { en: 'Email', hi: 'ईमेल' },
  location: { en: 'Location', hi: 'स्थान' },
  assignedMentees: { en: 'Assigned Mentees', hi: 'असाइन किए गए मेंटी' },
  lastCheckIn: { en: 'Last Check-in', hi: 'अंतिम चेक-इन' },
  status: { en: 'Status', hi: 'स्थिति' },
  actions: { en: 'Actions', hi: 'कार्य' },
  active: { en: 'Active', hi: 'सक्रिय' },
  inactive: { en: 'Inactive', hi: 'निष्क्रिय' },
  mentees: { en: 'mentees', hi: 'मेंटी' },
  
  // Analytics
  analyticsAndImpact: { en: 'Analytics & Impact', hi: 'विश्लेषण और प्रभाव' },
  trackImpact: { en: 'Track the impact of your entrepreneurship programs', hi: 'अपने उद्यमिता कार्यक्रमों के प्रभाव को ट्रैक करें' },
  entrepreneursTrained: { en: 'Entrepreneurs Trained', hi: 'प्रशिक्षित उद्यमी' },
  followUpRate: { en: 'Follow-up Rate', hi: 'फॉलो-अप दर' },
  engagementRate: { en: 'Engagement Rate', hi: 'सहभागिता दर' },
  averageProfitUplift: { en: 'Average Profit Uplift', hi: 'औसत लाभ वृद्धि' },
  programImpactOverTime: { en: 'Program Impact Over Time', hi: 'समय के साथ कार्यक्रम प्रभाव' },
  regionalPerformance: { en: 'Regional Performance', hi: 'क्षेत्रीय प्रदर्शन' },
  successStories: { en: 'Success Stories', hi: 'सफलता की कहानियां' },
  successfulBusinessesLaunched: { en: 'Successful businesses launched', hi: 'सफल व्यवसाय शुरू किए गए' },
  trainingCompletion: { en: 'Training Completion', hi: 'प्रशिक्षण पूर्णता' },
  averageCompletionRate: { en: 'Average completion rate', hi: 'औसत पूर्णता दर' },
  outreachGrowth: { en: 'Outreach Growth', hi: 'आउटरीच वृद्धि' },
  yearOverYearGrowth: { en: 'Year-over-year growth', hi: 'साल-दर-साल वृद्धि' },
  completion: { en: 'completion', hi: 'पूर्णता' },
  
  // Settings
  saveChanges: { en: 'Save Changes', hi: 'परिवर्तन सहेजें' },
  organizationSettings: { en: 'Organization Settings', hi: 'संगठन सेटिंग्स' },
  organizationName: { en: 'Organization Name', hi: 'संगठन का नाम' },
  contactEmail: { en: 'Contact Email', hi: 'संपर्क ईमेल' },
  website: { en: 'Website', hi: 'वेबसाइट' },
  phoneNumber: { en: 'Phone Number', hi: 'फोन नंबर' },
  notificationSettings: { en: 'Notification Settings', hi: 'सूचना सेटिंग्स' },
  emailNotifications: { en: 'Email Notifications', hi: 'ईमेल सूचनाएं' },
  emailNotificationsDesc: { en: 'Receive email alerts for important updates', hi: 'महत्वपूर्ण अपडेट के लिए ईमेल अलर्ट प्राप्त करें' },
  overdueCheckIns: { en: 'Overdue Check-ins', hi: 'अतिदेय चेक-इन' },
  overdueCheckInsDesc: { en: 'Alert when check-ins are overdue', hi: 'चेक-इन अतिदेय होने पर अलर्ट करें' },
  newApplications: { en: 'New Applications', hi: 'नए आवेदन' },
  newApplicationsDesc: { en: 'Notify about new mentor/mentee applications', hi: 'नए मेंटर/मेंटी आवेदनों के बारे में सूचित करें' },
  weeklyReports: { en: 'Weekly Reports', hi: 'साप्ताहिक रिपोर्ट' },
  weeklyReportsDesc: { en: 'Send weekly summary reports', hi: 'साप्ताहिक सारांश रिपोर्ट भेजें' },
  regionalSettings: { en: 'Regional Settings', hi: 'क्षेत्रीय सेटिंग्स' },
  defaultTimezone: { en: 'Default Timezone', hi: 'डिफ़ॉल्ट समय क्षेत्र' },
  defaultLanguage: { en: 'Default Language', hi: 'डिफ़ॉल्ट भाषा' },
  currency: { en: 'Currency', hi: 'मुद्रा' },
  securitySettings: { en: 'Security Settings', hi: 'सुरक्षा सेटिंग्स' },
  twoFactorAuth: { en: 'Two-Factor Authentication', hi: 'द्विकारक प्रमाणीकरण' },
  twoFactorAuthDesc: { en: 'Add an extra layer of security', hi: 'सुरक्षा की एक अतिरिक्त परत जोड़ें' },
  sessionTimeout: { en: 'Session Timeout', hi: 'सत्र समय समाप्ति' },
  sessionTimeoutDesc: { en: 'Auto-logout after 2 hours of inactivity', hi: '2 घंटे की निष्क्रियता के बाद ऑटो-लॉगआउट' },
  changePassword: { en: 'Change Password', hi: 'पासवर्ड बदलें' },
  
  // Login
  signInToYourDashboard: { en: 'Sign in to your admin dashboard', hi: 'अपने एडमिन डैशबोर्ड में साइन इन करें' },
  enterYourEmail: { en: 'Enter your email', hi: 'अपना ईमेल दर्ज करें' },
  enterYourAddress: { en: 'Enter your address', hi: 'अपना पता दर्ज करें' },
  signIn: { en: 'Sign In', hi: 'साइन इन' },
  address: { en: 'Address', hi: 'पता' },
  
  // Common
  profile: { en: 'Profile', hi: 'प्रोफ़ाइल' },
  logOut: { en: 'Log out', hi: 'लॉग आउट' },
  language: { en: 'Language', hi: 'भाषा' },
  english: { en: 'English', hi: 'अंग्रेजी' },
  hindi: { en: 'Hindi', hi: 'हिंदी' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
