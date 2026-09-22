"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { adminText } from "../_i18n/translations";

export default function SettingsPage() {
  const { locale } = useLanguage();
  const t = adminText(locale).settings;
  const [storeName, setStoreName] = useState("Store Admin");
  const [supportEmail, setSupportEmail] = useState("support@example.com");
  const [currency, setCurrency] = useState("DZD");
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-[#fcfcfb] p-6 sm:p-8 dark:bg-[#1a1a19] text-[#0b0b0b] dark:text-white">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#0b0b0b]/10 pb-5 dark:border-white/10">
        <div>
          <h1 className="text-xl font-bold tracking-tight">{t.title}</h1>
          <p className="mt-1 text-xs text-[#898781] dark:text-[#a09e96]">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-md border border-[#0b0b0b]/10 bg-white px-3 py-1.5 text-xs font-medium text-[#52514e] transition-colors hover:bg-[#0b0b0b]/5 dark:border-white/10 dark:bg-[#242423] dark:text-[#c3c2b7] dark:hover:bg-white/5">
            {t.cancel}
          </button>
          <button className="rounded-md bg-[#2a78d6] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#2263b3]">
            {t.save}
          </button>
        </div>
      </div>

      <div className="mt-8 max-w-4xl space-y-8">
        {/* Section 1: Store Information */}
        <SettingsCard title={t.storeInfo.title} description={t.storeInfo.description}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-[#52514e] dark:text-[#c3c2b7]">
                {t.storeInfo.storeName}
              </label>
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-3 py-1.5 text-xs text-[#0b0b0b] outline-none focus:border-[#2a78d6] dark:border-white/10 dark:bg-[#1a1a19] dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#52514e] dark:text-[#c3c2b7]">
                {t.storeInfo.supportEmail}
              </label>
              <input
                type="email"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-3 py-1.5 text-xs text-[#0b0b0b] outline-none focus:border-[#2a78d6] dark:border-white/10 dark:bg-[#1a1a19] dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#52514e] dark:text-[#c3c2b7]">
                {t.storeInfo.storeCurrency}
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-2.5 py-1.5 text-xs text-[#52514e] outline-none dark:border-white/10 dark:bg-[#1a1a19] dark:text-[#c3c2b7]"
              >
                <option value="DZD">DZD (دج)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
              </select>
            </div>
          </div>
        </SettingsCard>

        {/* Section 2: Preferences */}
        <SettingsCard title={t.preferences.title} description={t.preferences.description}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-medium text-[#0b0b0b] dark:text-white">
                  {t.preferences.emailNotifications}
                </div>
                <div className="text-[11px] text-[#898781] dark:text-[#a09e96]">
                  {t.preferences.emailNotificationsHint}
                </div>
              </div>
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                className="h-4 w-4 rounded border-[#0b0b0b]/10 accent-[#2a78d6] dark:border-white/10"
              />
            </div>

            <div className="border-t border-[#0b0b0b]/5 dark:border-white/5 pt-4 flex items-center justify-between">
              <div>
                <div className="text-xs font-medium text-[#0b0b0b] dark:text-white">
                  {t.preferences.darkMode}
                </div>
                <div className="text-[11px] text-[#898781] dark:text-[#a09e96]">
                  {t.preferences.darkModeHint}
                </div>
              </div>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                className="h-4 w-4 rounded border-[#0b0b0b]/10 accent-[#2a78d6] dark:border-white/10"
              />
            </div>
          </div>
        </SettingsCard>

        {/* Section 3: API & Security */}
        <SettingsCard title={t.api.title} description={t.api.description}>
          <div className="space-y-3">
            <label className="block text-xs font-medium text-[#52514e] dark:text-[#c3c2b7]">
              {t.api.liveSecretKey}
            </label>
            <div className="flex items-center gap-2">
              <input
                type="password"
                readOnly
                value="sk_live_9482718293810293"
                className="w-full rounded-md border border-[#0b0b0b]/10 bg-[#fcfcfb] px-3 py-1.5 font-mono text-xs text-[#52514e] outline-none dark:border-white/10 dark:bg-[#1a1a19] dark:text-[#c3c2b7]"
              />
              <button className="rounded-md border border-[#0b0b0b]/10 bg-white px-3 py-1.5 text-xs font-medium text-[#52514e] hover:bg-[#0b0b0b]/5 dark:border-white/10 dark:bg-[#242423] dark:text-[#c3c2b7] dark:hover:bg-white/5">
                {t.api.copy}
              </button>
            </div>
          </div>
        </SettingsCard>
      </div>
    </div>
  );
}

// Reusable Settings Card
function SettingsCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-[#0b0b0b]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#20201f]">
      <div className="border-b border-[#0b0b0b]/10 pb-3 dark:border-white/10">
        <h2 className="text-sm font-semibold tracking-tight text-[#0b0b0b] dark:text-white">
          {title}
        </h2>
        <p className="mt-0.5 text-xs text-[#898781] dark:text-[#a09e96]">
          {description}
        </p>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}